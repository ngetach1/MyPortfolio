
const Reference = require('../models/reference');
const createError = require('http-errors');

// Get all references
exports.getAll = async (req, res, next) => {
    try {
        const references = await Reference.find();

        res.json({
            success: true,
            data: references.map(reference => ({
                id: reference._id,
                name: reference.name,
                testimonial: reference.testimonial,
                position: reference.position,
                company: reference.company
            }))
        });
    } catch (error) {
        next(error);
    }
};

// Get one reference
exports.getById = async (req, res, next) => {
    try {
        const reference = await Reference.findById(req.params.id);

        if (!reference) {
            return next(createError(404, 'Reference not found'));
        }

        res.json({
            success: true,
            data: {
                id: reference._id,
                name: reference.name,
                testimonial: reference.testimonial,
                position: reference.position,
                company: reference.company
            }
        });
    } catch (error) {
        if (error.name === 'CastError') {
            return next(createError(400, 'Invalid reference ID'));
        }
        next(error);
    }
};

// Create a reference
exports.create = async (req, res, next) => {
    try {
        const reference = await Reference.create(req.body);

        res.status(201).json({
            success: true,
            data: {
                id: reference._id,
                name: reference.name,
                testimonial: reference.testimonial,
                position: reference.position,
                company: reference.company
            }
        });
    } catch (error) {
        next(error);
    }
};

// Update a reference
exports.update = async (req, res, next) => {
    try {
        const reference = await Reference.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!reference) {
            return next(createError(404, 'Reference not found'));
        }

        res.json({
            success: true,
            data: {
                id: reference._id,
                name: reference.name,
                testimonial: reference.testimonial,
                position: reference.position,
                company: reference.company
            }
        });
    } catch (error) {
        if (error.name === 'CastError') {
            return next(createError(400, 'Invalid reference ID'));
        }
        next(error);
    }
};

// Delete a reference
exports.delete = async (req, res, next) => {
    try {
        const reference = await Reference.findByIdAndDelete(req.params.id);

        if (!reference) {
            return next(createError(404, 'Reference not found'));
        }

        res.json({
            success: true,
            message: 'Reference deleted successfully'
        });
    } catch (error) {
        if (error.name === 'CastError') {
            return next(createError(400, 'Invalid reference ID'));
        }
        next(error);
    }
};
