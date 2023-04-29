const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const router = require("./routes/goalRoutes");

const app = express();

app.use("/api/goals", router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
