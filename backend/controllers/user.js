const User = require("../models/user"); // Import User model
const Scholarship = require("../models/scholarship"); // Import Scholarship model

// Create a new user
const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
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
  try {
    const user = await User.findById(userId);
    const scholarship = await Scholarship.findById(scholarshipId);

    if (!user || !scholarship) {
      return res.status(404).json({ error: "User or Scholarship not found" });
    }

    user.appliedScholarships.push(scholarshipId);
    scholarship.applicants.push(userId);

    await user.save();
    await scholarship.save();

    res.status(200).json({ message: "Successfully applied for scholarship" });
  } catch (error) {
    res.status(500).json({ error: "Failed to apply for scholarship" });
  }
};

// Get a single user
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate(
      "appliedScholarships"
    );
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch user" });
  }
};

module.exports = { createUser, getUsers, applyScholarship, getUserById };
