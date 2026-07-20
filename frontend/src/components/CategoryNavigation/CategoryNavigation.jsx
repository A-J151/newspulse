import { Chip, Stack, Paper, Typography } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import MemoryIcon from "@mui/icons-material/Memory";
import FlagIcon from "@mui/icons-material/Flag";
import RefreshIcon from "@mui/icons-material/Refresh";

const categories = [
  {
    value: "world",
    label: "World",
    icon: <PublicIcon />,
  },
  {
    value: "technology",
    label: "Technology",
    icon: <MemoryIcon />,
  },
  { value: "india", label: "India", icon: <FlagIcon /> },
];

function CategoryNavigation({ category, setCategory, refreshNews }) {
  return (
    <Paper
      elevation={1}
      sx={{
        p: 3,
        mb: 1,
        pb: 0,
        borderRadius: 4,
        bgcolor: "background.paper",
        border: "1px solid #e5e7eb",
      }}
    >
      <Typography
        variant="subtitle2"
        color="text.secondary"
        sx={{
          mb: 2,
          fontSize: 15,
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: 1,
        }}
      >
        Browse by Category
      </Typography>

      <Stack
        direction="row"
        spacing={2}
        sx={{ mb: 5, flexWrap: "wrap", alignItems: "center", gap: 1.5 }}
      >
        {categories.map((cat) => (
          <Chip
            key={cat.value}
            icon={cat.icon}
            label={cat.value}
            clickable
            color={category === cat.value ? "primary" : "default"}
            variant={category === cat.value ? "filled" : "outlined"}
            onClick={() => setCategory(cat.value)}
            sx={{
              px: {
                xs: 1,
                sm: 2,
              },
              py: {
                xs: 1.8,
                sm: 2.5,
              },
              fontWeight: 700,
              fontSize: {
                xs: "0.85rem",
                sm: "0.95rem",
              },
              transistion: ".25s",
              "&:hover": {
                transform: "translateY(-2px)",
              },
            }}
          />
        ))}{" "}
        <Chip
          icon={<RefreshIcon />}
          label="Refresh"
          clickable
          variant="outlined"
          onClick={refreshNews}
          sx={{
            px: 1,
            py: 2.6,
            fontWeight: 600,
          }}
        />
      </Stack>
    </Paper>
  );
}
export default CategoryNavigation;
