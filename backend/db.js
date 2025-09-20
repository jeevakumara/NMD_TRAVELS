const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",       // default XAMPP user
  password: "",       // default is empty in XAMPP
  database: "travel_agency"
});

db.connect((err) => {
  if (err) {
    console.error("MySQL connection failed:", err);
    return;
  }
  console.log("MySQL connected successfully");
});

module.exports = db;
