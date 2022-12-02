const users = require("../controllers/usersController.js");
const db = require("../config/dbConfig.js");

const getAllUsers = async () => {
    try {
        const getAllUsers = await db.any("SELECT * FROM users");
        return getAllUsers;
    } catch (err) {
        return err;
    }
};

const getUser = async (id) => {
    try {
        const oneUser = await db.one("SELECT * FROM users WHERE id=$1", id);
        return oneUser;
    } catch (err) {
        return err;
    }
};

const deleteUser = async (id) => {
    try {
        const deletedUser = await db.one(
            "DELETE FROM users WHERE id = $1 RETURNING *",
            id
        );
        return deletedUser;
    } catch (err) {
        return err;
    }
};

const createUser = async (user) => {
    try {
        const { uid, firstname, lastname, email, img, roles, bio } = user;
        const newUser = await db.one(
            "INSERT INTO users (uid, firstname, lastname, email, img, roles, bio) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
            [uid, firstname, lastname, email, img, roles, bio]
        );
        return newUser;
    } catch (err) {
        return err;
    }
};
const updateUser = async (user, id) => {
    try {
        const { username,
            firstname,
            lastname,
            img,
            email,
            address,
            city,
            country,
            zipCode,
            occupation,
            bio,
            status,
            roles   } = user;
        const updatedUser = await db.one(
            "UPDATE users SET username = $1, firstname = $2, lastname = $3, email = $4, img = $5, roles = $6, bio = $7  WHERE id = $8 RETURNING *",
            [username,
                firstname,
                lastname,
                img,
                email,
                address,
                city,
                country,
                zipCode,
                occupation,
                bio,
                status,
                roles, id]
        );
        return updatedUser;
    } catch (error) {
        return error;
    }
};
module.exports = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
};
