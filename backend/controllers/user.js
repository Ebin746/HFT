const User = require("../models/user"); // Import User model
const Scholarship = require("../models/scholarship"); // Import Scholarship model
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI("AIzaSyDkatmi5tr3aFs0979qnpeZeLC9SHe56_Q");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Create a new user
const createUser = async (req, res) => {
  try {
    const { name, email, password, academicPerformance, incomeLevel, financialNeed } = req.body;
    const newUser = new User({
      name,
      email,
      password: password,
      aiScore: '0',
      academicPerformance,
      incomeLevel,
      financialNeed,
      appliedScholarships: [],
    });
    console.log(newUser)
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Failed to create user" });
  }
};

// Get all users
const getUsers = async (req, res) => {
  try {
    const users = await User.find().populate("appliedScholarships");
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

// Apply for a scholarship
const applyScholarship = async (req, res) => {
  const { userId, scholarshipId } = req.body;
  console.log(userId, "::",scholarshipId);
  let aiScore, aiNeed;
  try {
    const user = await User.findById(userId);
    const scholarship = await Scholarship.findById(scholarshipId);

    if (!user || !scholarship) {
      return res.status(404).json({ error: "User or Scholarship not found" });
    }

    //
    
        //Build the prompt for the AI model
        const prompt = `
        You are a judge tasked with assigning a score out of 10 to a student for a scholarship.
        The score is based on the following factors:
        - Financial need
        - Academic performance
        - Income level
        - Scholarship type
    
        Provide only the score and a one-line reason for the decision, always in this format: {score-need}.
        Student details: Name: ${user.name}, Academic Performance: ${user.academicPerformance}, Income Level: ${user.incomeLevel}, Financial Need: ${user.financialNeed}
        Scholarship type: ${scholarship.name}
        `;
    
        const result = await model.generateContent(prompt);
        const responseText = result.response.text();
    
        // Extract score and need from the AI response
       aiScore= responseText.split("-")[0];
       aiNeed=responseText.split("-")[1]
        console.log(aiScore,"::",aiNeed)
 

    // Handle if the response is malformed or missing data


    // Assign AI score and reason to user
    user.aiScore=aiScore||0;
    user.appliedScholarships.push(scholarshipId);

    // Add the user to the scholarship applicants list
    scholarship.applicants.push(userId);

    // Save user and scholarship data
    await user.save();
    await scholarship.save();

    res.status(200).json({ message: "Successfully applied for scholarship", aiScore, aiNeed });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to apply for scholarship" });
  }
};

// Get a single user
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate("appliedScholarships");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch user" });
  }
};

module.exports = { createUser, getUsers, applyScholarship, getUserById };
