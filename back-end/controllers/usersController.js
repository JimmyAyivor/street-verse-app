const express = require("express");
const users = express.Router();
const {
  getAllUsers,
  getUser,
  deleteUser,
  createUser,
  updateUser,
} = require("../queries/users.js");


users.get("/", async (req, res) => {
  const allUsers = await getAllUsers();
  if (allUsers[0]) {
    res.status(200).json({ payload: allUsers, success: true });
  } else {
    res.status(500).json({ payload: "server error!", success: false });
  }
});

users.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await getUser(id);
  if (user.id) {
    res.json({ payload: user, success: true });
  } else {
    const error = "not found";
    res.status(404).json({ payload: error, success: false });
  }
});

users.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedUser = await deleteUser(id);

  if (deletedUser.id) {
    res.status(200).json({ payload: deletedUser, success: true });
  } else {
    res.status(404).json({ payload: "user not found", success: false });
  }
});

users.post("/",  async (req, res) => {
  try {
    const user = await createUser(req.body);
    res.status(200).json({ payload: user, success: true });
  } catch (error) {
    return error;
  }
});
users.put("/:id",  async (req, res) => {
  const { id } = req.params;

  try {
    const updatedUser = await updateUser(req.body, id);
    res.status(200).json({ payload: updatedUser, success: true });
  } catch (error) {
    res.status(404).json({ payload: "user not updated", success: false });
  }
});

module.exports = users;
