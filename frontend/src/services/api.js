async function getNews(category) {
  const response = await fetch(
    `https://newspulse-backend.onrender.com/news/${category}`,
  );
  console.log(response.status);
  if (!response.ok) {
    throw new Error("⚠️ Couldn't load news. Try Again");
  }
  const articles = await response.json();
  return articles;
}

export { getNews };
