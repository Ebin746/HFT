const express = require('express');
const { createScholarship, getScholarships, getScholarshipById } = require("../controllers/scholarship");

const router = express.Router();

// Routes for scholarships
router.post('/', createScholarship);
router.get('/', getScholarships);
router.get('/:id', getScholarshipById);

module.exports = router;
