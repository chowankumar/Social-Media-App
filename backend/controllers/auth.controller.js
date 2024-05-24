import { db } from "../connect.js"
import bcrypt from "bcryptjs"

export const register = (res,req)=>{

   const q = "SELECT FROM users WHERE username = ?"

    db.query(q,[req.body.username],(err,data)=>{
        if(err) return res.status(500).json(err)
        if(data.length) return res.status(409).json("User already exists")
    })

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password,salt)


    const data = "INSERT INTO users (`username`,`email`,`password`,`name`) value(?)"

    const values = [req.body.username,req.body.email,req.body.hashedPassword,req.body.name]

    db.query(data,[values],(err,data)=>{
        if(err) return res.status(500).json(err)
        return res.status(200).json("user has been created ")
    })


    

}


export const login = (res,req)=>{

}
 

export const logout = (res,req)=>{

}