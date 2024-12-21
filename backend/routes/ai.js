

const express = require("express");
const router = express.Router();
const { ai } = require("../controllers/ai");

// Define AI route
router.post("/", ai);

module.exports = router;
