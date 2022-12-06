const express = require("express");
const events = express.Router();
const {
  getAllEvents,
  getEvent,
  deleteEvent,
  createEvent,
  updateEvent,
} = require("../queries/events.js");


events.get("/", async (req, res) => {
  const allEvents = await getAllEvents();
  if (allEvents[0]) {
    res.status(200).json({ payload: allEvents, success: true });
  } else {
    res.status(500).json({ payload: "server error!", success: false });
  }
});

events.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await getEvent(id);
  if (user.id) {
    res.json({ payload: user, success: true });
  } else {
    const error = "not found";
    res.status(404).json({ payload: error, success: false });
  }
});

events.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedEvent = await deleteEvent(id);

  if (deletedEvent.id) {
    res.status(200).json({ payload: deletedEvent, success: true });
  } else {
    res.status(404).json({ payload: "user not found", success: false });
  }
});

events.post("/",  async (req, res) => {
  try {
    const user = await createEvent(req.body);
    res.status(200).json({ payload: user, success: true });
  } catch (error) {
    return error;
  }
});
events.put("/:id",  async (req, res) => {
  const { id } = req.params;

  try {
    const updatedEvent = await updateEvent(req.body, id);
    res.status(200).json({ payload: updatedEvent, success: true });
  } catch (error) {
    res.status(404).json({ payload: "user not updated", success: false });
  }
});

module.exports = events;
