import { useEffect, useState } from "react";
import { getNews } from "../../services/api";
import Loader from "../../components/Loader/Loader";
import CategoryNavigation from "../../components/CategoryNavigation/CategoryNavigation.jsx";
import Header from "../../components/Header/Header.jsx";
import "./Home.css";
import { Container, Typography } from "@mui/material";
import LatestNewsSection from "../../components/sections/LatestNewsSection/LatestNewssection.jsx";
import FeaturedSection from "../../components/sections/FeaturedSection/FeaturedSection.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import SkeletonGrid from "../../components/SkeletonGrid/SkeletonGrid";
import FeaturedSkeleton from "../../components/FeaturedSkeleton/FeaturedSkeleton";
function Home() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [category, setCategory] = useState("world");
  const [searchTerm, setSearchTerm] = useState("");
  const loadNews = async () => {
    setLoading(true);
    setError("");

    try {
      const news = await getNews(category);
      setArticles(news);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    loadNews();
  }, [category]);

  const search = searchTerm.toLowerCase();
  const filteredArticles = articles.filter((article) => {
    return (
      article.title.toLowerCase().includes(search) ||
      article.content.toLowerCase().includes(search)
    );
  });
  const featuredArticle = filteredArticles[0];
  const latestArticles = filteredArticles.slice(1);
  return (
    <Container maxWidth="xl">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <CategoryNavigation
        category={category}
        setCategory={setCategory}
        refreshNews={loadNews}
      />
      {loading ? (
        <>
          <FeaturedSkeleton />
          <SkeletonGrid />
        </>
      ) : error ? (
        <Typography
          variant="h6"
          color="error"
          sx={{ mt: 6, textAlign: "center" }}
        >
          {error}
        </Typography>
      ) : filteredArticles.length === 0 ? (
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ mt: 6, textAlign: "center", fontWeight: 700 }}
        >
          No article found...
        </Typography>
      ) : (
        <>
          <FeaturedSection article={featuredArticle} />
          <LatestNewsSection articles={latestArticles} />
        </>
      )}
      <Footer />
    </Container>
  );
}

export default Home;
