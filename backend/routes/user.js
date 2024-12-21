const express = require('express');
const { createUser, getUsers, applyScholarship, getUserById } = require("../controllers/user");

const router = express.Router();

// Routes for users
router.post('/', createUser);
router.get('/', getUsers);
router.post('/apply', applyScholarship);
router.get('/:id', getUserById);

module.exports = router;
