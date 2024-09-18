const Joi = require("joi");

const schema = Joi.object({
  text: Joi.string().required(),
  tone: Joi.string()
    .valid(
      "Supportive",
      "Professional",
      "Friendly",
      "Fun",
      "Loving",
      "Assertive",
      "Polite",
      "Optimistic",
      "Sympathetic",
      "Casual",
      "Inspirational",
      "Excited",
      "Neutral",
      "Serious",
      "Empathetic",
      "Annoyed",
      "Happy"
    )
    .required()
    .messages({
      "any.only": "Tone must be one of the predefined values.",
      "any.required": "Tone is a required field.",
    }),
});

module.exports = schema;
