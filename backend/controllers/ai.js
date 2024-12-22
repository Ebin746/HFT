const scholarshipSchema = require("../models/scholarship");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI("AIzaSyDkatmi5tr3aFs0979qnpeZeLC9SHe56_Q");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const ai = async (req, res) => {
  const { scholarshipId } = req.body;

  if (!scholarshipId) {
    console.log("no messagey found");
    return res.status(401).json({ error: "Prompt missing" });
  }
  const scholarshipDeatils = await scholarshipSchema
    .findById(scholarshipId)
    .populate("applicants");
  const applicants = scholarshipDeatils.applicants;

  console.log(applicants, scholarshipDeatils);
  try {
    const prompt = `
            You are a judge tasked with assigning a score out of 10 to a student for a scholarship.
            The score is based on the following factors:
            - Financial need
            - Academic performance
            - Income level
            - Scholarship type

            select one  student retun his id and name  , response must  should contain only name and id in this format {id-name} 
            Scholarship type: ${scholarshipDeatils}
            Students details: ${applicants}
            
        `;
    const result = await model.generateContent(prompt);
    console.log(result.response.text().split("-")[0]);
    res.status(200).json({ response: result.response.text() });
  } catch (error) {
    console.error("Error:", error);
    res
      .status(500)
      .json({ error: "An error occurred while generating the response" });
  }
};

module.exports = { ai };
