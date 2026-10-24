
const Project = require('../models/project');
const createError = require('http-errors');

// Get all projects
exports.getAll = async (req, res, next) => {
    try {
        const projects = await Project.find();

        res.json({
            success: true,
            data: projects.map(project => ({
                id: project._id,
                title: project.title,
                completion: project.completion,
                description: project.description,
                image: project.image
            }))
        });
    } catch (error) {
        next(error);
    }
};

// Get one project
exports.getById = async (req, res, next) => {
    try {
        const project = await Project.findById(req.params.id);

        if (!project) {
            return next(createError(404, 'Project not found'));
        }

        res.json({
            success: true,
            data: {
                id: project._id,
                title: project.title,
                completion: project.completion,
                description: project.description,
                image: project.image
            }
        });
    } catch (error) {
        if (error.name === 'CastError') {
            return next(createError(400, 'Invalid project ID'));
        }
        next(error);
    }
};

// Create a project
exports.create = async (req, res, next) => {
    try {
        const project = await Project.create(req.body);

        res.status(201).json({
            success: true,
            data: {
                id: project._id,
                title: project.title,
                completion: project.completion,
                description: project.description,
                image: project.image
            }
        });
    } catch (error) {
        next(error);
    }
};

// Update a project
exports.update = async (req, res, next) => {
    try {
        const project = await Project.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!project) {
            return next(createError(404, 'Project not found'));
        }

        res.json({
            success: true,
            data: {
                id: project._id,
                title: project.title,
                completion: project.completion,
                description: project.description,
                image: project.image
            }
        });
    } catch (error) {
        if (error.name === 'CastError') {
            return next(createError(400, 'Invalid project ID'));
        }
        next(error);
    }
};

// Delete a project
exports.delete = async (req, res, next) => {
    try {
        const project = await Project.findByIdAndDelete(req.params.id);

        if (!project) {
            return next(createError(404, 'Project not found'));
        }

        res.json({
            success: true,
            message: 'Project deleted successfully'
        });
    } catch (error) {
        if (error.name === 'CastError') {
            return next(createError(400, 'Invalid project ID'));
        }
        next(error);
    }
};
