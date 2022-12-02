const express = require("express");
const messages = express.Router();
const {
  getAllMessages,
  getMessage,
  deleteMessage,
  createMessage,
  updateMessage,
} = require("../queries/messages.js");

// const {
//   checkName,
//   checkImage,
//   checkHealth,
// } = require("../validations/checkMessages.js");

messages.get("/", async (req, res) => {
  const allMessages = await getAllMessages();
  if (allMessages[0]) {
    res.status(200).json({ payload: allMessages, success: true });
  } else {
    res.status(500).json({ payload: "server error!", success: false });
  }
});

messages.get("/:id", async (req, res) => {
  const { id } = req.params;
  const message = await getMessage(id);
  if (message.id) {
    res.json({ payload: message, success: true });
  } else {
    const error = "not found";
    res.status(404).json({ payload: error, success: false });
  }
});

messages.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedMessage = await deleteMessage(id);

  if (deletedMessage.id) {
    res.status(200).json({ payload: deletedMessage, success: true });
  } else {
    res.status(404).json({ payload: "message not found", success: false });
  }
});

messages.post("/",  async (req, res) => {
  try {
    const message = await createMessage(req.body);
    res.status(200).json({ payload: message, success: true });
  } catch (error) {
    return error;
  }
});
messages.put("/:id",  async (req, res) => {
  const { id } = req.params;

  try {
    const updatedMessage = await updateMessage(req.body, id);
    res.status(200).json({ payload: updatedMessage, success: true });
  } catch (error) {
    res.status(404).json({ payload: "message not updated", success: false });
  }
});

module.exports = messages;
