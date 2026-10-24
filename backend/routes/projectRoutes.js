
const express = require('express');
const router = express.Router();

const projectController = require('../controllers/projectController');

// GET all projects and POST a new project
router.route('/')
    .get(projectController.getAll)
    .post(projectController.create);

// GET, PUT, and DELETE one project by ID
router.route('/:id')
    .get(projectController.getById)
    .put(projectController.update)
    .delete(projectController.delete);

module.exports = router;
