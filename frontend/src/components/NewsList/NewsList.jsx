import NewsCard from "../NewsCard/NewsCard.jsx";
import { Box } from "@mui/material";
function NewsList({ articles }) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          md: "repeat(2,1fr)",
          lg: "repeat(3,1fr)",
        },
        gap: 3,
      }}
    >
      {articles.map((article) => (
        <NewsCard
          key={article.id || article.url || article.link}
          article={article}
        />
      ))}
    </Box>
  );
}
export default NewsList;
