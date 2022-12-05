const events = require("../controllers/eventsController.js");
const db = require("../config/dbConfig.js");

const getAllEvents = async () => {
    try {
        const getAllEvents = await db.any("SELECT * FROM events");
        return getAllEvents;
    } catch (err) {
        return err;
    }
};

const getEvent = async (id) => {
    try {
        const oneEvent = await db.one("SELECT * FROM events WHERE id=$1", id);
        return oneEvent;
    } catch (err) {
        return err;
    }
};

const deleteEvent = async (id) => {
    try {
        const deletedEvent = await db.one(
            "DELETE FROM events WHERE id = $1 RETURNING *",
            id
        );
        return deletedEvent;
    } catch (err) {
        return err;
    }
};

const createEvent = async (event) => {
    try {
        const {title,short_desc,thumbnail,image,long_desc,date,location,membership } = event;
        const newEvent = await db.one(
            "INSERT INTO events (title,short_desc,thumbnail,image,long_desc,date,location,membership) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
            [title,short_desc,thumbnail,image,long_desc,date,location,membership]
        );
        return newEvent;
    } catch (err) {
        return err;
    }
};
const updateEvent = async (user, id) => {
    try {
        const { uid, firstname, lastname, email, img, roles } = user;
        const updatedEvent = await db.one(
            "UPDATE events SET uid = $1, firstname = $2, lastname = $3, email = $4, img = $5, roles = $6  WHERE id = $7 RETURNING *",
            [uid, firstname, lastname, email, img, roles, id]
        );
        return updatedEvent;
    } catch (error) {
        return error;
    }
};
module.exports = {
    getAllEvents,
    getEvent,
    createEvent,
    updateEvent,
    deleteEvent,
};
