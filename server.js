const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRouter = require('./routes/userRouter');
const transactionRouter = require('./routes/transactionRouter');
const categoryRouter = require('./routes/categoryRouter');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb+srv://Praneeth:Kslp1125@cluster0.vhua2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/users', userRouter);
app.use('/api/transactions', transactionRouter);
app.use('/api/categories', categoryRouter);

// 404 Handler
app.use((req, res, next) => {
    res.status(404).json({ message: 'Requested resource could not be found.' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
