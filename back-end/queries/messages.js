const messages = require("../controllers/messagesController.js");
const db = require("../config/dbConfig.js");

const getAllMessages = async () => {
    try {
        const getAllMessages = await db.any("SELECT * FROM messages");
        return getAllMessages;
    } catch (err) {
        return err;
    }
};

const getMessage = async (id) => {
    try {
        const oneMessage = await db.one("SELECT * FROM messages WHERE id=$1", id);
        return oneMessage;
    } catch (err) {
        return err;
    }
};

const deleteMessage = async (id) => {
    try {
        const deletedMessage = await db.one(
            "DELETE FROM messages WHERE id = $1 RETURNING *",
            id
        );
        return deletedMessage;
    } catch (err) {
        return err;
    }
};

const createMessage = async (Message) => {
    try {
        const { fullname, email, message } = Message;
        const newMessage = await db.one(
            "INSERT INTO messages (fullname, email, message) VALUES ($1, $2, $3) RETURNING *",
            [fullname, email, message]
        );
        return newMessage;
    } catch (err) {
        return err;
    }
};
const updateMessage = async (Message, id) => {
    try {
        const { fullname, email, message } = Message;
        const updatedMessage = await db.one(
            "UPDATE messages SET fullname = $1, email = $2, message = $3  WHERE id = $4 RETURNING *",
            [fullname, email, message, id]
        );
        return updatedMessage;
    } catch (error) {
        return error;
    }
};
module.exports = {
    getAllMessages,
    getMessage,
    createMessage,
    updateMessage,
    deleteMessage,
};
