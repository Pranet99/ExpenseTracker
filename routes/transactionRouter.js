const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction'); // Assuming you have a Transaction model

// POST route to create a new transaction
router.post('/create', async (req, res) => {
    try {
        const { userId, date, amount, description, category, source, recurring, frequency } = req.body;

        // Validate the required fields
        if (!userId || !amount ) {
            return res.status(400).json({ message: 'Required fields are missing' });
        }

        // Create a new transaction instance
        const newTransaction = new Transaction({
            userId,
            date,
            amount,
            description,
            category,
            source,
            recurring,
            frequency
        });

        // Save the transaction to the database
        await newTransaction.save();

        res.status(201).json({ message: 'Transaction created successfully!', transaction: newTransaction });
    } catch (error) {
        console.error('Error creating transaction:', error);
        res.status(500).json({ message: 'Server error. Please try again later.' });
    }
});

// GET route to fetch all transactions for a specific user
router.get('/:userId', async (req, res) => {
    try {
        const { userId } = req.params;

        // Fetch transactions based on userId
        const transactions = await Transaction.find({ userId });

        res.status(200).json(transactions);
    } catch (error) {
        console.error('Error fetching transactions:', error);
        res.status(500).json({ message: 'Server error. Please try again later.' });
    }
});

module.exports = router;
