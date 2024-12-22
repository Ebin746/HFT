const Scholarship = require('../models/scholarship'); // Import Scholarship model

const createScholarship = async (req, res) => {
    try {
        // Destructure the scholarship data from the request body
        const { name, type, description, eligibilityCriteria, awardAmount, applicants, Deadline } = req.body;
console.log(Deadline)
        // Validate required fields (you can expand this validation based on your needs)
        if (!name || !type || !description || !eligibilityCriteria || !awardAmount || !Deadline) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Create a new scholarship instance using the destructured values
        const scholarship = new Scholarship({
            name,
            type,
            description,
            eligibilityCriteria,
            awardAmount,
            applicants,
            Deadline
        });

        // Save the scholarship and return the result
        await scholarship.save();
        res.status(201).json(scholarship);
    } catch (error) {
        console.error(error);  // Log the error for debugging
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
