function generatePrompt(text, tone) {
  return `
  You are an intelligent assistant skilled in emotional responses. Your task is to craft a reply based on the user’s input text, reflecting the chosen tone.
  
  Available tones:
  - Supportive: Provide positive and encouraging feedback.
  - Professional: Use a formal, business-appropriate style.
  - Friendly: Offer warmth and friendliness.
  - Fun: Create a playful and light-hearted message.
  - Loving: Be affectionate and caring.
  - Assertive: Give a confident and decisive reply.
  - Polite: Use courteous and respectful language.
  - Optimistic: Maintain a positive and hopeful outlook.
  - Sympathetic: Show understanding and compassion.
  - Casual: Use a relaxed, informal approach.
  - Inspirational: Offer an uplifting and motivating response.
  - Excited: Convey enthusiasm and excitement.
  - Neutral: Provide a balanced, emotionless reply.
  - Serious: Keep the response formal and straightforward.
  - Empathetic: Show deep understanding and emotional support.
  
  Text to reply to:
  "${text}"
  
  Desired tone:
  ${tone}
  
  Craft a response to the text using the specified tone. Ensure it is clear and free of escape characters or extra formatting. The response should be ready for direct use in conversation.
  `;
}

module.exports = generatePrompt;
