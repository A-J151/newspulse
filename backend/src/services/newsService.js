const ServiceUnavailableError = require("../errors/ServiceUnavailableError");
const CategoryNotFoundError = require("../errors/categoryNotFoundError");
const axios = require("axios");

const cache = {};
const CACHE_DURATION = 5 * 60 * 1000;
async function getNews(category) {
  const categoryMap = {
    world: "general",
    technology: "technology",
    india: "nation",
  };
  const mappedCategory = categoryMap[category];
  if (!mappedCategory) {
    throw new CategoryNotFoundError(`the category ${category} is not found`);
  }
  const cachedData = cache[mappedCategory];
  console.log("Current cache:", Object.keys(cache));
  if (cachedData && Date.now() - cachedData.timestamp < CACHE_DURATION) {
    console.log("Serving From Cache...");
    return cachedData.articles;
  }
  try {
    console.log("Fetching from GNews:", mappedCategory);
    const response = await axios.get("https://gnews.io/api/v4/top-headlines", {
      params: {
        category: mappedCategory,
        lang: "en",
        country: "in",
        max: 20,
        apikey: process.env.GNEWS_API_KEY,
      },
    });
    const articles = response.data.articles.map((article) => ({
      title: article.title,
      content: article.description || article.content || "",
      contentSnippet: article.description || article.content || "",
      link: article.url,
      pubDate: article.publishedAt,
      image: article.image,
      source: article.source?.name || "Unknown",
    }));
    cache[mappedCategory] = {
      articles,
      timestamp: Date.now(),
    };
    return articles;
  } catch (err) {
    if (err.response?.status === 429) {
      throw new ServiceUnavailableError(
        "Gnews API rate limit exceeded. Please try again in a few minutes",
      );
    }
    console.error(err.response?.data || err.message);

    throw new ServiceUnavailableError("Unable to fetch news from GNews.");
  }
}

module.exports = { getNews };
