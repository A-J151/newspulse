const { generateContent } = require("../AI/aiService");
const { buildSummaryPrompt } = require("../AI/prompts/summaryPrompt");

async function generateSummary(req, res) {
  try {
    const { title, content } = req.body;

    if (!title.trim() || !content.trim()) {
      return res.status(400).json({
        success: false,
        message: "Title and content are required",
      });
    }
    const prompt = buildSummaryPrompt(title, content);
    const response = await generateContent(prompt);
    res.json({ success: true, summary: response });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}
module.exports = { generateSummary };
