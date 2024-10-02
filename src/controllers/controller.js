const tones = require("../data/tone.json");
const model = require("../services/gen-ai/gemini");
const generatePrompt = require("../services/gen-ai/generate-prompt");

async function generateResponse(req, res, next) {
  try {
    const { text, tone } = req.body;

    const prompt = generatePrompt(text, tone);

    const result = await model.generateContent(prompt);
    if (!result) {
      return res.status(500).json({
        message:
          "Failed to generate response. Please check your input or try again later.",
      });
    } else {
      // Clean up the response text by removing escape characters, decoding HTML entities, and extra whitespace
      const cleanedResponse = result.response
        .text()
        .replace(/\\"/g, '"') // Replace escaped double quotes with a normal double quote
        .replace(/\\n/g, " ") // Replace newline escape sequences with a space
        .trim(); // Trim leading and trailing whitespace

      return res.status(200).json({ data: cleanedResponse });
    }
  } catch (err) {
    next(err);
  }
}

function listTones(req, res) {
  res.status(200).json({ data: tones });
}

module.exports = {
  generateResponse,
  listTones,
};
