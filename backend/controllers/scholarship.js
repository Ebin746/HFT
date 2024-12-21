const Scholarship = require('../models/scholarship'); // Import Scholarship model

// Create a new scholarship
const createScholarship = async (req, res) => {
    try {
        const scholarship = new Scholarship(req.body);
        await scholarship.save();
        res.status(201).json(scholarship);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create scholarship' });
    }
};

// Get all scholarships
const getScholarships = async (req, res) => {
    try {
        const scholarships = await Scholarship.find().populate('applicants');
        res.status(200).json(scholarships);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch scholarships' });
    }
};

// Get a single scholarship
const getScholarshipById = async (req, res) => {
    try {
        const scholarship = await Scholarship.findById(req.params.id).populate('applicants');
        if (!scholarship) {
            return res.status(404).json({ error: 'Scholarship not found' });
        }
        res.status(200).json(scholarship);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch scholarship' });
    }
};

module.exports = { createScholarship, getScholarships, getScholarshipById };
