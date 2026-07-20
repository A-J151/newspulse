import { Typography, Box } from "@mui/material";
import NewsList from "../../NewsList/NewsList.jsx";
import { motion } from "framer-motion";
function LatestNewsSection({ articles }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box sx={{ mt: 6 }}>
        <Typography variant="h4" sx={{ mb: 1, fontWeight: 800 }}>
          📰 Latest Headlines
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 4 }}>
          Stay updated with today's biggest stories
        </Typography>
        <NewsList articles={articles} />
      </Box>
    </motion.div>
  );
}

export default LatestNewsSection;
