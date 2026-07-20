# 📰 NewsPulse

NewsPulse is a production-style full-stack news application built with **React** and **Express.js** that delivers real-time headlines from trusted news sources and generates **AI-powered summaries** using **OpenRouter AI**.

---

## ✨ Features

### 📰 News

- Browse latest news by category
  - 🌍 World
  - 💻 Technology
  - 🇮🇳 India
- Instant article search
- Featured Top Story
- Refresh latest headlines

### 🤖 AI

- AI-powered article summaries
- Provider-independent AI architecture
- Prompt Builder pattern
- Easily switch between AI providers

### 🎨 User Interface

- Fully responsive design
- Material UI components
- Smooth animations with Framer Motion
- Image fallback support
- Loading indicators
- Snackbar notifications

### ⚡ Backend

- RESTful API architecture
- Backend caching
- Proper error handling
- Clean separation of concerns

---

# 🛠 Tech Stack

### Frontend

- React
- Material UI
- Axios
- Framer Motion

### Backend

- Node.js
- Express.js

### APIs

- GNews API
- OpenRouter AI

---

# 📂 Project Structure

```text
NewsPulse
│
├── backend
│   ├── AI
│   │   ├── prompts
│   │   │   └── summaryPrompt.js
│   │   └── aiService.js
│   │
│   ├── controllers
│   │   ├── aiController.js
│   │   └── newsController.js
│   │
│   ├── routes
│   │   ├── aiRoutes.js
│   │   └── newsRoutes.js
│   │
│   ├── services
│   │   └── newsService.js
│   │
│   ├── errors
│   ├── package.json
│   └── server.js
│
├── frontend
│   ├── public
│   │
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   ├── services
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

# ⚙️ Installation

## Clone the Repository

```bash
git clone https://github.com/your-username/newspulse.git
```

---

## Install Frontend

```bash
cd frontend
npm install
```

---

## Install Backend

```bash
cd backend
npm install
```

---

# 🔑 Environment Variables

Create a `.env` file inside the **backend** folder.

```env
PORT=3000

GNEWS_API_KEY=YOUR_GNEWS_API_KEY

AI_API_KEY=YOUR_OPENROUTER_API_KEY

AI_MODEL=google/gemma-3-27b-it:free

BASE_URL=https://openrouter.ai/api/v1
```

---

# ▶️ Running the Application

### Start Backend

```bash
cd backend
npm run dev
```

### Start Frontend

```bash
cd frontend
npm run dev
```

---

# 📡 API Endpoints

## Get News

```http
GET /news/:category
```

Example

```http
GET /news/world
```

---

## Generate AI Summary

```http
POST /ai/summary
```

Request

```json
{
  "title": "Article title",
  "content": "Article content"
}
```

Response

```json
{
  "success": true,
  "summary": "AI generated summary..."
}
```

---

# 🤖 AI Architecture

NewsPulse follows a provider-independent AI architecture.

```text
Controller
      │
      ▼
Prompt Builder
      │
      ▼
AI Service
      │
      ▼
OpenRouter AI
      │
      ▼
Large Language Model
```

The controller never communicates directly with the AI provider. It only interacts with the AI Service, making it easy to replace OpenRouter with another provider in the future.

---

# 📸 Screenshots

> Add screenshots of:
>
> - Home Page
> - AI Summary
> - Mobile View

---

# 🗺️ Roadmap

Future improvements:

- 🤖 AI Chat
- 📰 AI Daily Brief
- 🔐 User Authentication
- 🔖 Bookmark Articles
- 🌙 Dark Mode
- 📧 Newsletter Backend Integration
- 🧪 Unit & Integration Tests

---

# 👨‍💻 Author
Arti Joshi

GitHub:
https://github.com/yourusername

LinkedIn:
https://www.linkedin.com/in/arti-joshi-173549149/
