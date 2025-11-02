# Gemini AI Clone

A modern, interactive clone of Google's Gemini AI interface built with React and Vite. This application provides a chat-like interface to interact with Google's Gemini AI model (gemini-2.0-flash) with a clean, user-friendly design.

## Features

- 🤖 **AI Chat Interface** - Interact with Google's Gemini 2.0 Flash model
- 💬 **Chat History** - View and reload previous prompts from the sidebar
- ✨ **Typing Animation** - Smooth word-by-word text animation for AI responses
- 🎨 **Modern UI** - Clean, responsive interface inspired by Google's Gemini
- 📝 **Text Formatting** - Automatic formatting of bold text and line breaks in responses
- 🔄 **New Chat** - Start fresh conversations anytime
- 📱 **Sidebar Navigation** - Expandable sidebar with recent prompts and quick actions

## Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Google Generative AI SDK** - `@google/generative-ai` for AI integration
- **React Context API** - State management
- **CSS** - Custom styling for components

## Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd gemini-ai-clone
```

2. Install dependencies:
```bash
npm install
```

## Configuration

1. Get your Google Gemini API key from [Google AI Studio](https://makersuite.google.com/app/apikey)

2. Create a `.env` file in the root directory:
```env
VITE_API_KEY=your_api_key_here
```

3. **Important**: Never commit your `.env` file. It's already included in `.gitignore`.

## Usage

1. Start the development server:
```bash
npm run dev
```

2. Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`)

3. Enter your prompt in the input field and click send or press Enter

4. View your conversation history in the sidebar by clicking the menu icon

5. Click "New Chat" to start a fresh conversation

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
gemini-ai-clone/
├── src/
│   ├── components/
│   │   ├── Main/          # Main chat interface component
│   │   └── Sidebar/       # Sidebar with navigation and history
│   ├── context/
│   │   └── Context.jsx    # React Context for state management
│   ├── config/
│   │   └── gemini.js      # Gemini AI configuration and API calls
│   ├── assets/            # Icons and images
│   ├── App.jsx            # Root component
│   ├── main.jsx           # Application entry point
│   └── index.css          # Global styles
├── public/                # Static assets
├── .env                   # Environment variables (create this)
└── package.json           # Dependencies and scripts
```

## How It Works

- **Context API**: Manages application state including prompts, responses, and UI state
- **Gemini Integration**: Uses `@google/generative-ai` SDK to connect with Google's Gemini API
- **Text Processing**: Automatically formats AI responses with bold text and line breaks
- **Animation**: Implements a word-by-word typing effect for a more natural user experience

## Notes

- The app uses Google's `gemini-2.0-flash` model
- Responses are formatted to display bold text (using `**text**` markdown syntax) and line breaks
- Gemini may display inaccurate information, so always verify important responses
- Make sure your API key has the necessary permissions to access the Gemini API

## License

This project is for educational purposes. Please review Google's terms of service when using the Gemini API.
