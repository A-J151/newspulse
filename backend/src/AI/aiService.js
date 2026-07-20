const OpenAi = require("openai");
// dotenv.config();

const client = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
  defaultHeaders: {
    "HTTP-Referer": "https://newspulse-cyan.vercel.app",
    "X-Title": "NewsPulse",
  },
});
console.log("OPENROUTER_API_KEY exists:", !!process.env.OPENROUTER_API_KEY);
async function generateContent(prompt) {
  const response = await client.chat.completions.create({
    model: "openrouter/free",
    messages: [
      {
        role: "system",
        content:
          "You are NewsPulse AI. Always answer factually and never invent information.",
      },
      { content: prompt, role: "user" },
    ],
  });
  return response.choices[0].message.content;
}
module.exports = { generateContent };
