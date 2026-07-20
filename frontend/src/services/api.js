async function getNews(category) {
  const response = await fetch(`http://localhost:3000/news/${category}`);
  console.log(response.status);
  if (!response.ok) {
    throw new Error("⚠️ Couldn't load news. Try Again");
  }
  const articles = await response.json();
  return articles;
}

export { getNews };
