// DEPENDENCIES
const cors = require("cors");

const express = require("express");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

const usersController = require("./controllers/usersController.js");
const messagesController = require("./controllers/messagesController.js");
const eventsController = require("./controllers/eventsController.js");

app.use("/users", usersController);
app.use("/events", eventsController);
app.use("/messages", messagesController);
app.get("*", (req, res) => {
  res.status(404).send("page not found");
});



module.exports = app;
