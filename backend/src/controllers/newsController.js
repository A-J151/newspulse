const newsService = require("../services/newsService.js");
const categoryNotFoundError = require("../errors/categoryNotFoundError");
const ServiceUnavailableError = require("../errors/ServiceUnavailableError");
async function getNews(req, res) {
  try {
    const articles = await newsService.getNews(req.params.category);
    res.json(articles);
  } catch (err) {
    res.status(err.statusCode || 500).json({
      error: err.message,
      status: err.statusCode,
    });
  }
}
module.exports = { getNews };
