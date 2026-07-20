function buildSummaryPrompt(title, content) {
  return `Summarize the following news article.
    
    Rules:
    -maximum 40 words.
    -Be factual.
    -Don't add information that is not present.
    -keep the summary easy to undertand.
    
    title:${title}
    Content: ${content}`;
}

module.exports = { buildSummaryPrompt };
