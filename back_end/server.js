const express = require("express");
const App = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 3000;
const emailRouter = require("./Routes/email.route");

App.use(express.urlencoded({ extended: true, limit: "50mb" }));
App.use(express.json({ limit: "50mb" }));
// App.use(cors());
App.use("/contact-us", emailRouter);
App.use(express.static("./build"));
App.get("/*", (req, res) => {
  res.sendFile(__dirname + "./build/index.html");
});

App.listen(port, () => {
  console.log("Server is running on port " + port);
});
