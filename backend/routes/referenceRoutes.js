
const express = require('express');
const router = express.Router();

const referenceController = require('../controllers/referenceController');

// GET all references and POST a new reference
router.route('/')
    .get(referenceController.getAll)
    .post(referenceController.create);

// GET, PUT, and DELETE one reference by ID
router.route('/:id')
    .get(referenceController.getById)
    .put(referenceController.update)
    .delete(referenceController.delete);

module.exports = router;
