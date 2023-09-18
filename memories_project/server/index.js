const express = require("express");
const cors = require("cors");
const bd = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const postRoutes = require("./routes/posts");
const userRoutes = require("./routes/users");
const app = express();
dotenv.config();

app.use(bd.json({ limit: "30mb", extended: true }));
app.use(bd.urlencoded({ limit: "30mb", extended: true }));
app.use(
  cors({
    origin: "*",
  })
);

app.use("/posts", postRoutes);
app.use("/user", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello to memories api");
});
const CONNECTION_URL =
  process.env.CONNECTION_URL ||
  "mongodb+srv://AreebHusain:mongodbaReeb128@cluster0.ymorhs7.mongodb.net/Memories?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port:${PORT} `);
    });
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
