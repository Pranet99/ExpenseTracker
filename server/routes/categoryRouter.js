const express = require('express');
const router = express.Router();
const Category = require('../models/category'); // Import the Category model

// POST route to create a new category
router.post('/', async (req, res) => {
    try {
        const { name, description } = req.body;

        // Validate the request body
        if (!name) {
            return res.status(400).json({ message: 'Category name is required' });
        }

        // Create a new category instance
        const newCategory = new Category({ name, description });

        // Save the new category to the database
        await newCategory.save();

        res.status(201).json({ message: 'Category created successfully!', category: newCategory });
    } catch (error) {
        console.error('Error creating category:', error);
        res.status(500).json({ message: 'Server error. Please try again later.' });
    }
});

// GET route to fetch all categories
router.get('/', async (req, res) => {
    try {
        // Fetch all categories from the database
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500).json({ message: 'Server error. Please try again later.' });
    }
});

module.exports = router;
