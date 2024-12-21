const mongoose=require("mongoose");
const scholarshipSchema = new mongoose.Schema({
    name: String,
    type: String, // e.g., 'Need-based', 'Merit-based'
    description: String,
    eligibilityCriteria: { 
        academicThreshold: Number, // Minimum academic performance score
        incomeLevel: String, // e.g., 'Low', 'Medium', 'High'
        financialNeed: String // e.g., 'Low', 'Medium', 'High'
    },
    awardAmount: Number,
    applicants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] // Reference to User
});

module.exports = mongoose.model('Scholarship', scholarshipSchema);
