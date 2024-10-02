# Nudge Backend 🚀

Welcome to the Nudge Backend repository! 🌟 This is my personal project a smart reply generator that helps you craft the perfect message with the ideal tone. Let’s explore how you can get involved!

## 🎉 What’s Nudge?

Nudge is a response generator designed to enhance your communication experience. With Nudge, you can:

- **Choose Your Tone:** Supportive, professional, fun, loving—you pick the vibe!
- **Get Smart Replies:** AI-powered suggestions that match your chosen tone.
- **Boost Communication:** Write better messages faster and with flair!

## 🚀 Getting Started

Excited to dive in? Here’s how you can set up Nudge:

### 🛠️ Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### 📦 Installation

1. **Clone the Repo:**

   ```bash
   git clone https://github.com/emmanuel1-byte/nudge.git
   cd nudge
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Set Up Environment Variables:**

   - Create a `.env` file in the root directory.
   - Add your configuration details (e.g., API keys):


4. **Run the Server:**

   ```bash
   npm start
   ```

   Your server should now be running at `http://localhost:3000`. 🎉

## 💡 API Endpoints

Here’s a sneak peek at the API I’ve built:

- **`POST /analyze-text`**  
  Analyze text and get a response based on the selected tone.

  - **Body:**
    ```json
    {
      "text": "Your message here",
      "tone": "supportive"
    }
    ```
  - **Response:**
    ```json
    {
      "response": "Here’s a supportive reply for you!"
    }
    ```

- **`GET /tones`**  
  Get a list of available tones.

  - **Response:**
    ```json
    {
      "tones": [
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
        "Annoyed"
      ]
    }
    ```

## 🧩 Contributing

This is a personal project, but if you have suggestions or improvements, here’s how you can contribute:

1. **Fork the Repo:** Create your own copy to work on.
2. **Create a Branch:**
   ```bash
   git checkout -b feature/your-feature
   ```
3. **Make Your Changes:** Improve the code, add features, or fix bugs.
4. **Submit a Pull Request:** I’ll review your changes and merge them in!

## 🎉 Thanks for Being Awesome!

Your support and feedback mean a lot. Thanks for being a part of my journey to make typing smarter and more enjoyable. Happy coding! 🚀
