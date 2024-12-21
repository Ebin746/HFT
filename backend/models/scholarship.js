const mongoose=require("mongoose");
const scholarshipSchema = new mongoose.Schema({
    name: String,
    type: String, 
    description: String,
    eligibilityCriteria: { 
        academicThreshold: Number, 
        incomeLevel: String, 
        financialNeed: String 
    },
    awardAmount: Number,
    applicants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] ,// Reference to User,
    
},


);

module.exports = mongoose.model('Scholarship', scholarshipSchema);
