const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  author: { type: String, required: true, trim: true },
  isbn: { type: String, trim: true, unique: true, sparse: true }, // ISBN might not always be present but should be unique if it is
  category: { type: String, trim: true },
  publisher: { type: String, trim: true },
  publicationYear: { type: Number },
  copiesAvailable: { type: Number, default: 1 },
  description: { type: String },
  coverImageUrl: { type: String },
  addedDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Book', BookSchema);
