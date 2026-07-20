import {
  Box,
  Chip,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";

function FeaturedSection({ article }) {
  if (!article) return null;
  const publishedDate = new Date(article.publishedAt || article.pubDate);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box sx={{ mb: 6 }}>
        <Chip
          label="BREAKING"
          color="error"
          size="small"
          sx={{
            mb: 2,
            fontWeight: 700,
            letterSpacing: 1,
          }}
        />
        <Typography variant="h4" fontWeight={700} sx={{ mb: 0.5 }}>
          🔥 Top Story
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 3 }}>
          Today's biggest story from around the world
        </Typography>
        <Card
          sx={{
            borderRadius: 5,
            overflow: "hidden",
            boxShadow: "0 20px 45px rgba(0,0,0,.12)",
            transition: ".35s",
            "&:hover": {
              transform: "translateY(-6px)",
            },
          }}
        >
          <CardMedia
            component="img"
            image={article.image || newsPlaceholder}
            onError={(e) => {
              e.target.src = newsPlaceholder;
            }}
            alt={article.title}
            sx={{
              height: {
                xs: 180,
                md: 320,
              },
              objectFit: "cover",
              transition: "0.4s",

              "&:hover": {
                transform: "scale(1.03)",
              },
            }}
          />
          <CardContent sx={{ p: 4 }}>
            <Typography
              variant="overline"
              sx={{
                fontWeight: 700,
                letterSpacing: 1,
                color: "primary.main",
              }}
            >
              {article.source.toUpperCase()} •{" "}
              {publishedDate.toLocaleDateString()}
            </Typography>
            {/* </Box> */}
            <Typography
              variant="h4"
              fontWeight={650}
              sx={{ mb: 0.5, lineHeight: 1 }}
            >
              {article.title}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: 2, lineHeight: 1.8 }}
            >
              {article.contentSnippet}
            </Typography>
            <Button
              href={article.link}
              target="_blank"
              variant="text"
              size="large"
              sx={{
                fontWeight: 700,
                fontSize: "1rem",
                px: 0,
              }}
            >
              Continue Reading →
            </Button>
          </CardContent>
        </Card>
      </Box>
    </motion.div>
  );
}

export default FeaturedSection;
