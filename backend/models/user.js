const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    aiScore:{
        type:String,
        default:0
    },
    academicPerformance: Number,
    incomeLevel: String, 
    financialNeed: String, 
    appliedScholarships: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Scholarship' }] 
});

module.exports = mongoose.model('User', userSchema);
