const express = require("express");
const { validateRequestSchema } = require("../middlewares/validation");
const schema = require("../schema/schema");
const { generateResponse, listTones } = require("../controllers/controller");
const nudge = express.Router();

nudge.post("/analyze-text", validateRequestSchema(schema), generateResponse);

nudge.get("/tones", listTones);

module.exports = nudge;
