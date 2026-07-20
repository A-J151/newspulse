import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { useState } from "react";
import axios from "axios";
function NewsCard({ article }) {
  const [summary, setSummary] = useState("");
  const [loadingSummary, setLoadingSummary] = useState(false);
  const publishedDate = new Date(article.pubDate);
  const readTime = Math.max(2, Math.ceil(article.contentSnippet.length / 250));

  const hnadleGenerateSummary = async () => {
    try {
      if (summary) return;
      setLoadingSummary(true);
      const response = await axios.post(
        "https://newspulse-backend.onrender.com/ai/summary",
        {
          title: article.title,
          content: article.content,
        },
      );
      console.log(response.data);
      console.log(response.data);
      setSummary(response.data.summary);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingSummary(false);
    }
  };
  return (
    <Card
      elevation={2}
      sx={{
        borderRadius: 4,
        overflow: "hidden",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: ".35s ease",
        boxShadow: "0 8px 25px rgba(0,0,0,.08)",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 18px 40px rgba(0,0,0,.16)",
        },
        "&:hover img": {
          transform: "scale(1.05)",
        },
      }}
    >
      <Box sx={{ overflow: "hidden" }}>
        <CardMedia
          component="img"
          image={article.image || newsPlaceholder}
          onError={(e) => {
            e.target.src = newsPlaceholder;
          }}
          alt={article.title}
          sx={{ height: 220, objectFit: "cover", transition: ".4s" }}
        />
      </Box>
      <CardContent
        sx={{ flexGrow: 1, p: 3, display: "flex", flexDirection: "column" }}
      >
        <Typography
          variant="caption"
          sx={{ color: "primary.main", fontWeight: 700, letterSpacing: 1 }}
        >
          {article.source} • {publishedDate.toLocaleDateString()} • {readTime}{" "}
          min read
        </Typography>
        <Typography
          variant="h6"
          fontWeight={700}
          sx={{
            mt: 1,
            mb: 1.5,
            lineHeight: 1.35,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {article.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            flexGrow: 1,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {article.contentSnippet}
        </Typography>
        {summary && (
          <Box
            sx={{
              mt: 2,
              p: 2,
              borderRadius: 2,
              backgroundColor: "#f5f5f5",
              borderLeft: "4px solid",
              borderColor: "primary.main",
            }}
          >
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 700, mb: 1, color: "primary.main" }}
            >
              🧠 AI Summary
            </Typography>
            <Typography variant="body2">{summary}</Typography>
          </Box>
        )}
        <Button
          variant="outlined"
          onClick={hnadleGenerateSummary}
          disabled={loadingSummary || summary}
          sx={{ mt: 2, alignSelf: "flex-start", textTransform: "none" }}
        >
          {loadingSummary
            ? "Generating..."
            : summary
              ? "✓ Summary Generated"
              : "✨ AI Summary"}
        </Button>
        <Button
          href={article.link}
          target="_blank"
          sx={{
            mt: 2,
            alignSelf: "flex-start",
            textTransform: "none",
            fontWeight: 600,
          }}
        >
          Read Story →
        </Button>
      </CardContent>
    </Card>
  );
}

export default NewsCard;
