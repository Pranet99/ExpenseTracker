const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true // Ensures no duplicate category names
    },
    description: {
        type: String,
        default: '' // Optional field for category description
    }
}, { timestamps: true });

const Category = mongoose.model('Category', CategorySchema);
module.exports = Category;
