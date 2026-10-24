
const User = require('../models/user');
const createError = require('http-errors');

// Get all users
exports.getAll = async (req, res, next) => {
    try {
        const users = await User.find().select('-password');

        res.json({
            success: true,
            data: users.map(user => ({
                id: user._id,
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                created: user.created,
                updated: user.updated
            }))
        });
    } catch (error) {
        next(error);
    }
};

// Get one user
exports.getById = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id).select('-password');

        if (!user) {
            return next(createError(404, 'User not found'));
        }

        res.json({
            success: true,
            data: {
                id: user._id,
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                created: user.created,
                updated: user.updated
            }
        });
    } catch (error) {
        if (error.name === 'CastError') {
            return next(createError(400, 'Invalid user ID'));
        }
        next(error);
    }
};

// Create a user
exports.create = async (req, res, next) => {
    try {
        const user = await User.create(req.body);

        res.status(201).json({
            success: true,
            data: {
                id: user._id,
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                created: user.created,
                updated: user.updated
            }
        });
    } catch (error) {
        next(error);
    }
};

// Update a user
exports.update = async (req, res, next) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.id,
            {
                ...req.body,
                updated: new Date()
            },
            { new: true, runValidators: true }
        ).select('-password');

        if (!user) {
            return next(createError(404, 'User not found'));
        }

        res.json({
            success: true,
            data: {
                id: user._id,
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                created: user.created,
                updated: user.updated
            }
        });
    } catch (error) {
        if (error.name === 'CastError') {
            return next(createError(400, 'Invalid user ID'));
        }
        next(error);
    }
};

// Delete a user
exports.delete = async (req, res, next) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);

        if (!user) {
            return next(createError(404, 'User not found'));
        }

        res.json({
            success: true,
            message: 'User deleted successfully'
        });
    } catch (error) {
        if (error.name === 'CastError') {
            return next(createError(400, 'Invalid user ID'));
        }
        next(error);
    }
};
