
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const createError = require('http-errors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'Natnael Getachew Portfolio API is running!'
    });
});

app.use((req, res, next) => {
    next(createError(404, 'Route not found'));
});

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        success: false,
        message: err.message || 'Internal Server Error'
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
