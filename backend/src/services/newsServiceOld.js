const Parser = require("rss-parser");
const rssFeeds = require("../config/rssFeeds");
const ServiceUnavailableError = require("../errors/ServiceUnavailableError");
const { sortByLatest, removeDuplicates } = require("../helper/helper");
const CategoryNotFoundError = require("../errors/categoryNotFoundError");
const parser = new Parser();
async function getNews(category) {
  if (!rssFeeds[category]) {
    throw new CategoryNotFoundError(`the category ${category} is not found`);
  }
  const sources = rssFeeds[category];
  const promises = sources.map((src) => parser.parseURL(src.url));
  const result = await Promise.allSettled(promises);
  const articles = result
    .filter((src) => src.status === "fulfilled")
    .map((src) => src.value.items)
    .flat();
  console.log(articles);
  result.forEach((res, index) => {
    if (res.status === "rejected") {
      console.log(
        `${sources[index].name} for ${sources[index].url} failed with reason ${res.reason.message}`,
      );
    }
  });
  if (articles.length === 0) {
    throw new ServiceUnavailableError(
      "All news sources are currently unavailable",
    );
  }
  // const uniqueArticles =removeDuplicates(articles);
  // const sortedArticles= sortByLatest(uniqueArticles)
  //     return sortedArticles ;
  const sortedArticles = sortByLatest(removeDuplicates(articles));
  //   const uniqueLinks = new Set(sortedArticles.map((article) => article.link));
  //   console.log(uniqueLinks.size);
  //   console.log(sortedArticles.length);
  return sortedArticles;
}

module.exports = { getNews };
