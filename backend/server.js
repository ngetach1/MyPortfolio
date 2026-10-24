
require('dotenv').config();
const referenceRoutes = require('./routes/referenceRoutes');
const projectRoutes = require('./routes/projectRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const userRoutes = require('./routes/userRoutes');

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const createError = require('http-errors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/references', referenceRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/users', userRoutes);

// Home route
app.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'Natnael Getachew Portfolio API is running!'
    });
});

// 404 error handler
app.use((req, res, next) => {
    next(createError(404, 'Route not found'));
});

// Global error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        success: false,
        message: err.message || 'Internal Server Error'
    });
});

// Connect to MongoDB and start server
async function startServer() {
    try {
        await mongoose.connect(process.env.ATLASDB);

        console.log('Connected to MongoDB Atlas successfully!');

        app.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    }
}

startServer();
