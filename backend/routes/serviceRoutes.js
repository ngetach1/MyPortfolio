
const express = require('express');
const router = express.Router();

const serviceController = require('../controllers/serviceController');

// GET all services and POST a new service
router.route('/')
    .get(serviceController.getAll)
    .post(serviceController.create);

// GET, PUT, and DELETE one service by ID
router.route('/:id')
    .get(serviceController.getById)
    .put(serviceController.update)
    .delete(serviceController.delete);

module.exports = router;
