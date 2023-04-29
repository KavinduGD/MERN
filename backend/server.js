const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const router = require("./routes/goalRoutes");
const { errorHandler } = require("./middleware/errorMiddleware");
const app = express();

//express.json() is a middleware function that parses incoming requests with JSON payloads. It parses the JSON payload of the incoming request and attaches it to the req object as a body property.
//body eken ena json ewata access krnna puluwn karanawa
app.use(express.json());

//express.urlencoded() is a middleware function that parses incoming requests with urlencoded payloads. It parses the urlencoded payload of the incoming request and attaches it to the req object as a body property.
//body eken ena urlencoded ewata access krnna puluwn karanawa
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", router);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
