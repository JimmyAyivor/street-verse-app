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
        const {title,short_desc,thumbnail,image,long_desc,date,event_location} = event;
        const newEvent = await db.one(
            "INSERT INTO events (title,short_desc,thumbnail,image,long_desc,date,event_location) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
            [title,short_desc,thumbnail,image,long_desc,date,event_location]
        );
        return newEvent;
    } catch (err) {
        return err;
    }
};
const updateEvent = async (event, id) => {
    try {
        const {title,short_desc,thumbnail,image,long_desc,date,event_location } = event;
        const updatedEvent = await db.one(
            "UPDATE events SET title = $1,short_desc =$2,thumbnail =$3,image =$4,long_desc = $5,date =$6,event_location = $7  WHERE id = $8 RETURNING *",
            [title,short_desc,thumbnail,image,long_desc,date,event_location, id]
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
