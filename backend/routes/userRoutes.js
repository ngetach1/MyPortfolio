
const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

// GET all users and POST a new user
router.route('/')
    .get(userController.getAll)
    .post(userController.create);

// GET, PUT, and DELETE one user by ID
router.route('/:id')
    .get(userController.getById)
    .put(userController.update)
    .delete(userController.delete);

module.exports = router;
