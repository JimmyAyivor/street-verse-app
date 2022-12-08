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
        const { uid,       
            wallet_id,   
            username,    
            firstname,   
            lastname,    
            img,         
            email,       
            address,  
            city,        
            country,     
            postalcode,  
            occupation,  
            bio,         
            facebook,    
            twitter,     
            instagram,   
            google,      
            website,     
            status,    
            roles } = user;
        const newUser = await db.one(
            `INSERT INTO users (uid,       
                wallet_id,   
                username,    
                firstname,   
                lastname,    
                img,         
                email,       
                address,  
                city,        
                country,     
                postalcode,  
                occupation,  
                bio,         
                facebook,    
                twitter,     
                instagram,   
                google,      
                website,     
                status,    
                roles) VALUES ($1, $2, $3, $4, $5, $6, $7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20) RETURNING *`,
            [uid,
                wallet_id,
                username,
                firstname,
                lastname,
                img,
                email,
                address,
                city,
                country,
                postalcode,
                occupation,
                bio,
                facebook,
                twitter,
                instagram,
                google,
                website,
                status,
                roles]
        );
        return newUser;
    } catch (err) {
        return err;
    }
};
const updateUser = async (user, id) => {
    try {
        const { uid,
            wallet_id,
            username,
            firstname,
            lastname,
            img,
            email,
            address,
            city,
            country,
            postalcode,
            occupation,
            bio,
            facebook,
            twitter,
            instagram,
            google,
            website,
            status,
            roles } = user;
        const updatedUser = await db.one(
            `UPDATE users SET uid=$1, wallet_id=$2,   
            username=$3,    
            firstname=$4,   
            lastname=$5,    
            img=$6,         
            email=$7,       
            address=$8,  
            city=$9,        
            country=$10,     
            postalcode=$11,  
            occupation=$12,  
            bio=$13,         
            facebook=$14,    
            twitter=$15,     
            instagram=$16,   
            google=$17,      
            website=$18,     
            status=$19,    
            roles=$20  WHERE id = $21 RETURNING *`,
            [uid,
                wallet_id,
                username,
                firstname,
                lastname,
                img,
                email,
                address,
                city,
                country,
                postalcode,
                occupation,
                bio,
                facebook,
                twitter,
                instagram,
                google,
                website,
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
