import mysql from "mysql"

export const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"chowan123",
  database:"last"
})

db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});