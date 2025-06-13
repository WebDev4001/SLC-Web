// Helper function to display messages
function displayFormMessage(formElement, type, message) {
    let messageElement = formElement.querySelector('.form-message');
    if (!messageElement) {
        messageElement = document.createElement('div');
        messageElement.className = 'form-message mt-4 p-3 rounded-lg text-sm';
        formElement.insertBefore(messageElement, formElement.querySelector('button[type=\"submit\"]'));
    }
    messageElement.textContent = message;
    if (type === 'success') {
        messageElement.classList.remove('bg-red-100', 'text-red-700');
        messageElement.classList.add('bg-green-100', 'text-green-700');
    } else if (type === 'error') {
        messageElement.classList.remove('bg-green-100', 'text-green-700');
        messageElement.classList.add('bg-red-100', 'text-red-700');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const suggestBookForm = document.querySelector('#suggest-book form');
    const joinSlcForm = document.querySelector('#join-slc form');
    const contactForm = document.querySelector('#contact-feedback form');

    // 1. Handle Book Suggestion Form
    if (suggestBookForm) {
        suggestBookForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            const data = {
                // resource_type is in the form, but our backend model for BookSuggestion doesn't have it.
                // We'll send what the backend expects.
                title: formData.get('resource_title'),
                author: formData.get('resource_author'),
                // publicationYear: Needs to be parsed as Number, not in current form, but in schema.
                reason: formData.get('resource_reason'),
                // suggesterName and suggesterEmail are not in the current form, but in schema.
                // The form has an 'anonymous' checkbox.
            };

            // Add suggester details if not anonymous
            if (!formData.has('anonymous')) {
                // These fields would need to be added to the HTML form
                // For now, we'll skip them if 'anonymous' or not present.
                // data.suggesterName = formData.get('suggester_name_field'); (assuming field exists)
                // data.suggesterEmail = formData.get('suggester_email_field'); (assuming field exists)
            }

            const submitButton = this.querySelector('button[type=\"submit\"]');
            submitButton.disabled = true;
            submitButton.textContent = 'Submitting...';

            try {
                const response = await fetch('/api/suggest-book', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                const result = await response.json();

                if (response.ok) {
                    displayFormMessage(this, 'success', result.msg || 'Suggestion submitted successfully!');
                    this.reset();
                } else {
                    displayFormMessage(this, 'error', result.msg || 'Failed to submit suggestion. Please try again.');
                    if (result.errors) {
                        console.error('Validation errors:', result.errors);
                        // Optionally display specific field errors
                    }
                }
            } catch (error) {
                console.error('Error submitting suggestion:', error);
                displayFormMessage(this, 'error', 'An unexpected error occurred. Please try again.');
            } finally {
                submitButton.disabled = false;
                submitButton.textContent = 'Submit Suggestion';
            }
        });
    }

    // 2. Handle Join SLC Form
    if (joinSlcForm) {
        joinSlcForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            const formData = new FormData(this); // Use FormData for file uploads

            const apiFormData = new FormData();
            apiFormData.append('fullName', formData.get('applicant_name'));
            apiFormData.append('email', formData.get('applicant_email'));
            apiFormData.append('studentId', formData.get('applicant_roll'));

            const branchAndYearRaw = formData.get('applicant_branch');
            let branch = '';
            let year = '';
            if (branchAndYearRaw) {
                const branchAndYearArray = branchAndYearRaw.split(',');
                branch = branchAndYearArray[0] ? branchAndYearArray[0].trim() : '';
                year = branchAndYearArray[1] ? branchAndYearArray[1].trim() : '';
            }
            apiFormData.append('branch', branch);
            apiFormData.append('year', year);

            apiFormData.append('reasonToJoin', formData.get('applicant_motivation'));
            apiFormData.append('resume', formData.get('applicant_resume'));

            const submitButton = this.querySelector('button[type=\"submit\"]');
            submitButton.disabled = true;
            submitButton.textContent = 'Submitting...';

            try {
                const response = await fetch('/api/join-slc', {
                    method: 'POST',
                    body: apiFormData,
                });

                const result = await response.json();

                if (response.ok) {
                    displayFormMessage(this, 'success', result.msg || 'Application submitted successfully!');
                    this.reset();
                } else {
                    displayFormMessage(this, 'error', result.msg || 'Failed to submit application. Please check your input and try again.');
                     if (result.errors) {
                        console.error('Validation errors:', result.errors);
                    }
                    if (result.field) {
                        console.error('Duplicate error on field:', result.field);
                    }
                }
            } catch (error) {
                console.error('Error submitting application:', error);
                displayFormMessage(this, 'error', 'An unexpected error occurred. Please try again.');
            } finally {
                submitButton.disabled = false;
                submitButton.textContent = 'Submit Application';
            }
        });
    }

    // 3. Handle Contact/Feedback Form
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            const data = {
                name: formData.get('feedback_name'),
                email: formData.get('feedback_email'),
                subject: formData.get('feedback_subject'),
                message: formData.get('feedback_message'),
            };

            const submitButton = this.querySelector('button[type=\"submit\"]');
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';

            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                const result = await response.json();

                if (response.ok) {
                    displayFormMessage(this, 'success', result.msg || 'Message sent successfully!');
                    this.reset();
                _BLANK_LINE_
                } else {
                    displayFormMessage(this, 'error', result.msg || 'Failed to send message. Please try again.');
                    if (result.errors) {
                        console.error('Validation errors:', result.errors);
                    }
                }
            } catch (error) {
                console.error('Error sending message:', error);
                displayFormMessage(this, 'error', 'An unexpected error occurred. Please try again.');
            } finally {
                submitButton.disabled = false;
                submitButton.textContent = 'Send Message';
            }
        });
    }
});
