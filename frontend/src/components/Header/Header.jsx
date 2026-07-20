import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Box,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NewspaperIcon from "@mui/icons-material/Newspaper";

function Header({ searchTerm, setSearchTerm }) {
  return (
    <AppBar
      position="static"
      elevation={0}
      color="inherit"
      sx={{ mb: 3, borderBottom: "1px solid #eee", backgroundColor: "#fff" }}
    >
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          alignItems: {
            xs: "center",
            md: "center",
          },
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <Box>
          <Box display="flex" gap={1} sx={{ alignItems: "center" }}>
            <NewspaperIcon sx={{ fontSize: 34, color: "primary.main" }} />
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                fontSize: {
                  xs: "2rem",
                  md: "2.125rem",
                },
              }}
            >
              NewsPulse
            </Typography>
          </Box>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              mt: 0.5,
              textAlign: {
                xs: "center",
                md: "left",
              },
            }}
          >
            latest headlines from trusted news sources
          </Typography>
        </Box>
        <TextField
          size="medium"
          placeholder="Search News..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{
            width: {
              xs: "100%",
              md: 320,
            },

            "& .MuiOutlinedInput-root": {
              borderRadius: 3,
              backgroundColor: "#fafafa",
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
          }}
        ></TextField>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
