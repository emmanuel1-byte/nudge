const express = require("express");
const { validateRequestSchema } = require("../middlewares/validation");
const schema = require("../schema/schema");
const { generateResponse, listTones } = require("../controllers/controller");
const typeAI = express.Router();

typeAI.post("/analyze-text", validateRequestSchema(schema), generateResponse);

typeAI.get("/tones", listTones);

module.exports = typeAI;
