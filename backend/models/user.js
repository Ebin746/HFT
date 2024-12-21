const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    academicPerformance: Number, // Score out of 10
    incomeLevel: String, // e.g., 'Low', 'Medium', 'High'
    financialNeed: String, // e.g., 'Low', 'Medium', 'High'
    appliedScholarships: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Scholarship' }] // Reference to Scholarship
});

module.exports = mongoose.model('User', userSchema);
