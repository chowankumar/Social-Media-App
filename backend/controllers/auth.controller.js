 import { db } from "../connect.js";
import bcrypt from "bcryptjs";

export const register = (req,res) => {
    
    const q = "SELECT * FROM users WHERE username = ?";

    db.query(q, [req.body.username], (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.length) return res.status(409).json("User already exists");

        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt);

        const insertQuery = "INSERT INTO users (`username`, `email`, `password`, `name`) VALUES (?)";
        const values = [req.body.username, req.body.email, hashedPassword, req.body.name];

        db.query(insertQuery, [values], (err, data) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json("User has been created");
        });
    });
};

export const login = (req, res) => {
    // Implementation of login functionality
};

export const logout = (req, res) => {
    // Implementation of logout functionality
};
