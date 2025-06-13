// Ensure this script is loaded after the DOM is fully parsed
document.addEventListener('DOMContentLoaded', () => {
    const chatWindow = document.getElementById('chat-window');
    const chatInput = document.getElementById('chat-input');
    const sendButton = document.getElementById('send-chat-button');
    const openChatButton = document.getElementById('open-chat-button');
    const chatWidget = document.getElementById('chat-widget');

    if (!chatWindow || !chatInput || !sendButton || !openChatButton || !chatWidget) {
        console.warn('Chatbot UI elements not found. Chatbot functionality may be limited. Ensure elements with IDs (chat-window, chat-input, send-chat-button, open-chat-button, chat-widget) exist.');
        // The subtask description mentioned path.html might use these:
        // chat-messages, user-input, send-button, open-path-btn, path-chatbot-widget.
        // This script currently relies on the first set of IDs.
        return;
    }

    // Toggle chat widget visibility
    openChatButton.addEventListener('click', () => {
        chatWidget.classList.toggle('hidden');
        if (!chatWidget.classList.contains('hidden')) {
            chatInput.focus();
            // Add a welcome message if it's the first time opening or chat is empty
            if (chatWindow.children.length === 0 ||
                (chatWindow.children.length > 0 && !Array.from(chatWindow.children).some(child => child.classList.contains('mr-auto')))) {
                 appendMessage('Hello! I am PATH, your SLC assistant. How can I help you today?', 'bot');
            }
        }
    });

    function appendMessage(message, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('mb-3', 'p-3', 'rounded-lg', 'max-w-xs', 'break-words', 'text-sm');
        if (sender === 'user') {
            messageDiv.classList.add('bg-blue-500', 'text-white', 'ml-auto');
            messageDiv.textContent = message;
        } else {
            messageDiv.classList.add('bg-gray-200', 'text-gray-800', 'mr-auto');
            let i = 0;
            messageDiv.textContent = '';
            function typeWriter() {
                if (i < message.length) {
                    messageDiv.textContent += message.charAt(i);
                    i++;
                    setTimeout(typeWriter, 20);
                    chatWindow.scrollTop = chatWindow.scrollHeight;
                }
            }
            typeWriter();
        }
        chatWindow.appendChild(messageDiv);
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }

    async function sendMessageToBackend(userMessage) {
        appendMessage(userMessage, 'user');
        chatInput.value = '';
        chatInput.disabled = true;
        sendButton.disabled = true;

        try {
            const response = await fetch('/api/chatbot', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: userMessage }),
            });

            if (!response.ok) {
                const errorResult = await response.json().catch(() => null);
                const errorMsg = errorResult && errorResult.msg ? errorResult.msg : 'Network response was not ok.';
                appendMessage(`Error: ${errorMsg}`, 'bot');
                throw new Error(errorMsg);
            }

            const result = await response.json();
            appendMessage(result.reply, 'bot');

        } catch (error) {
            console.error('Error sending message to chatbot API:', error);
            // Avoid appending the technical error message to chat again if already done by the if(!response.ok) block
            let alreadyDisplayed = false;
            const chatMessages = chatWindow.querySelectorAll('.mr-auto'); // Bot messages
            if (chatMessages.length > 0) {
                const lastBotMessage = chatMessages[chatMessages.length - 1].textContent;
                if (lastBotMessage.includes(error.message)) {
                    alreadyDisplayed = true;
                }
            }
            if (!alreadyDisplayed) {
                 appendMessage('Sorry, I am having trouble connecting. Please try again later.', 'bot');
            }
        } finally {
            chatInput.disabled = false;
            sendButton.disabled = false;
            chatInput.focus();
        }
    }

    sendButton.addEventListener('click', () => {
        const message = chatInput.value.trim();
        if (message) {
            sendMessageToBackend(message);
        }
    });

    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const message = chatInput.value.trim();
            if (message) {
                sendMessageToBackend(message);
            }
        }
    });
});