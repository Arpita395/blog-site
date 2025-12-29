import mysql from "mysql2"

export const db= mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "arpita2005",
    database: "blog"
})