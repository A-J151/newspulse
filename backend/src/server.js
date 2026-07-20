const path = require("path");
require("dotenv").config({
  path: path.resolve(__dirname, "../.env"),
});
const express = require("express");
const newsRoutes = require("./routes/newsRoutes.js");

const cors = require("cors");
const aiRoutes = require("./routes/aiRoutes.js");
const app = express();

app.use(cors({ origin: ["https://newspulse-cyan.vercel.app"] }));
app.get("/", (req, res) => {
  res.send("NewsPulse Running");
});
app.use("/news", newsRoutes);
app.use(express.json());
app.use("/ai", aiRoutes);
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server Started on ${PORT}`);
});
