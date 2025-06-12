// gemini.js or index.js
import { GoogleGenerativeAI } from "@google/generative-ai"; // Note: use @google/generative-ai NOT @google/genai
import dotenv from "dotenv";

// If you're using a Node.js backend, enable dotenv
// dotenv.config();

// Vite or frontend: use import.meta.env
const API_KEY = import.meta.env.VITE_API_KEY;

if (!API_KEY) {
  console.error("Error: API_KEY not found. Make sure it's set in your .env file.");
  throw new Error("Missing API_KEY");
}

const genAI = new GoogleGenerativeAI(API_KEY);

//  Updated version of runSimpleText() using gemini-2.0-flash
async function runSimpleText(prompt) {
  console.log("--- Running Simple Text Generation ---");
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
    });

    const text = result.response.text();
    console.log("Generated Text:\n", text);
     return text;
  } catch (error) {
    console.error("Error generating content:", error);
     return "Error: Could not generate text.";
  }
//   console.log("-------------------------------------\n");
}

// Leave runStreamingChat() out if it's not supported for this model

async function runChat(prompt) {
 const text = await runSimpleText(prompt); //get returned value
  return text;
  // await runStreamingChat(); // Optionally comment this if using a model that doesn’t support streaming
}

export default runChat;
