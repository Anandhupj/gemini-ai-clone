// index.js
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const API_KEY = process.env.API_KEY;
if (!API_KEY) {
    console.error("Error: API_KEY not found. Make sure it's set in your .env file.");
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(API_KEY);

async function runSimpleText() {
    console.log("--- Running Simple Text Generation ---");
    try {
        // For text-only input, use the gemini-pro model
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        const prompt = "Write a short story about a friendly robot exploring a new planet.";

        const result = await model.generateContent(prompt);
        const response = result.response;
        const text = response.text();
        console.log("Generated Text:\n", text);
    } catch (error) {
        console.error("Error generating content:", error);
    }
    console.log("-------------------------------------\n");
}

async function runStreamingChat() {
    console.log("--- Running Streaming Chat ---");
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const chat = model.startChat({
            history: [
                {
                    role: "user",
                    parts: [{ text: "Hello, I have 2 dogs in my house." }],
                },
                {
                    role: "model",
                    parts: [{ text: "Great to meet you. What would you like to know?" }],
                },
            ],
            generationConfig: {
                maxOutputTokens: 200,
            },
            // Safety settings are important to configure
            safetySettings: [
                {
                    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
                    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
                },
                {
                    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
                    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
                },
            ],
        });

        const msg = "How many paws are in my house?";
        console.log(`User: ${msg}`);

        const result = await chat.sendMessageStream(msg);
        let text = "";
        console.log("Model (streaming):");
        for await (const chunk of result.stream) {
            const chunkText = chunk.text();
            process.stdout.write(chunkText); // Print chunk without newline
            text += chunkText;
        }
        process.stdout.write("\n"); // Add a final newline

        // console.log("\nFull Model Response (after streaming):\n", text);

        // You can continue the chat
        const nextMsg = "What about if one dog visits a friend?";
        console.log(`\nUser: ${nextMsg}`);
        const nextResult = await chat.sendMessageStream(nextMsg);
        let nextText = "";
        console.log("Model (streaming):");
        for await (const chunk of nextResult.stream) {
            const chunkText = chunk.text();
            process.stdout.write(chunkText);
            nextText += chunkText;
        }
        process.stdout.write("\n");

    } catch (error) {
        console.error("Error in chat:", error);
    }
    console.log("----------------------------\n");
}

async function main() {
    await runSimpleText();
    await runStreamingChat();
    // You can also add vision examples if needed (gemini-pro-vision)
}

 main();

 

// const apiKey = "AIzaSyBbRp61TgrvR0x903Vlfa88qsQzQCnFX3o"
