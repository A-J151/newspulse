import {
  Box,
  Container,
  Typography,
  Stack,
  TextField,
  Snackbar,
  Alert,
  Button,
  IconButton,
  Divider,
} from "@mui/material";

import NewspaperIcon from "@mui/icons-material/Newspaper";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useState } from "react";

function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleSubscribe = async () => {
    if (!email.trim()) {
      setSnackbar({
        open: true,
        message: "Please enter your email.",
        severity: "error",
      });
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSnackbar({
        open: true,
        message: "Please enter a valid email.",
        severity: "error",
      });
      return;
    }
    setSnackbar({
      open: true,
      severity: "success",
      message:
        "Thanks for subscribing! This is a demo application, so no emails will actually be sent.",
    });

    setEmail("");
  };
  return (
    <Box
      component="footer"
      sx={{
        mt: 10,
        py: 5,
        px: 3,
        borderTop: "4px solid",
        borderImage: "linear-gradient(90deg,#1976d2,#42a5f5,#90caf9) 1",
        background: "linear-gradient(180deg,#ffffff,#f8fbff)",
        borderRadius: 3,
      }}
    >
      <Box
        sx={{
          background: "linear-gradient(135deg,#1976d2,#42a5f5)",
          color: "white",
          borderRadius: 4,
          p: 5,
          mb: 6,
          textAlign: "center",
        }}
      >
        <Typography variant="h4" fontWeight={700} gutterBottom>
          📬 Stay Updated
        </Typography>

        <Typography
          sx={{
            opacity: 0.9,
            mb: 4,
            fontSize: "1.1rem",
          }}
        >
          Get the latest headlines delivered straight to your inbox.
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            variant="outlined"
            sx={{
              width: 350,
              bgcolor: "white",
              borderRadius: 2,
            }}
          />

          <Button
            variant="contained"
            color="secondary"
            onClick={handleSubscribe}
            sx={{
              px: 4,
              fontWeight: 700,
              borderRadius: 2,
            }}
          >
            Join Newsletter
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 6,
          mb: 5,
        }}
      >
        {/* Left */}

        <Box sx={{ maxWidth: 450 }}>
          <Box display="flex" gap={1} sx={{ alignItems: "center" }}>
            <NewspaperIcon
              sx={{
                color: "#1976d2",
                fontSize: 59,
              }}
            />

            <Typography variant="h3" fontWeight={800}>
              NewsPulse
            </Typography>
          </Box>

          <Typography
            sx={{
              mt: 2,
              color: "text.secondary",
              lineHeight: 1.8,
            }}
          >
            Stay informed with trusted news from around the world. Fresh
            headlines, clean design, and a seamless reading experience.
          </Typography>

          <Box sx={{ mt: 3 }}>
            <IconButton
              sx={{
                color: "#666",
                transition: ".3s",

                "&:hover": {
                  color: "#1976d2",
                  transform: "translateY(-5px)",
                  backgroundColor: "#E3F2FD",
                },
              }}
            >
              <GitHubIcon />
            </IconButton>

            <IconButton
              sx={{
                color: "#666",
                transition: ".3s",

                "&:hover": {
                  color: "#1976d2",
                  transform: "translateY(-5px)",
                  backgroundColor: "#E3F2FD",
                },
              }}
            >
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Box>

        {/* Right */}

        <Box>
          <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>
            Quick Links
          </Typography>

          <Stack spacing={1.5}>
            <Typography>🌍 World</Typography>
            <Typography>💻 Technology</Typography>
            <Typography>🇮🇳 India</Typography>
            <Typography>🔄 Refresh</Typography>
          </Stack>
        </Box>
      </Box>
      <Divider sx={{ my: 4 }} />

      <Typography
        align="center"
        color="text.secondary"
        sx={{
          fontSize: ".95rem",
        }}
      >
        © 2026 NewsPulse • Built with React • Express • Material UI
      </Typography>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() =>
          setSnackbar((prev) => ({
            ...prev,
            open: false,
          }))
        }
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <Alert
          severity={snackbar.severity}
          variant="filled"
          onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
export default Footer;
