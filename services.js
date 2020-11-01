const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(cors());

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "",
});

db.connect((err) => {
  if (err) console.log("cannot connect to db");
  else console.log("connected to db");
});

//create database
app.get("/createdb", (req, res) => {
  let sql = "CREATE DATABASE studentinfo";
  db.query(sql, (err, result) => {
    if (err) throw err;
    else {
      console.log("database created");
      res.send("database created");
    }
  });
});

db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "studentinfo",
});

//create table
app.get("/createtable/:branch", (req, res) => {
  let sql = `CREATE TABLE ${req.params.branch} (roll VARCHAR(255), name VARCHAR(255), cls VARCHAR(255), birthdate DATE, email VARCHAR(255), contact INT, PRIMARY KEY (roll))`;
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    console.log(`${req.params.branch} table created`);
    res.send("table created");
  });
});

//to view data

app.get("/data/:branch", (req, res) => {
  let sql = `SELECT * FROM ${req.params.branch}`;
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    } else {
      console.log("data displayed");
      return res.json({
        data: result,
      });
    }
  });
});

//to view data of single student
app.get("/data/:branch/single", (req, res) => {
  let sql = `SELECT * FROM ${req.params.branch} WHERE roll=${req.query.roll}`;
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    } else {
      console.log("data displayed");
      return res.json({
        data: result,
      });
    }
  });
});

//for student to view
app.get("/data/:branch/singlestudent", (req, res) => {
  let sql = `SELECT * FROM ${req.params.branch} WHERE roll=${req.query.roll} AND email="${req.query.email}"`;
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    } else {
      console.log("data displayed");
      return res.json({
        data: result,
      });
    }
  });
});

//insert data
//roll=149&name=raju&cls=12&birthday=1999-12-10&email=raju@gmail.com&contact=12345

app.get("/data/:branch/add", (req, res) => {
  const { roll, name, cls, birthday, email, contact } = req.query;
  let sql = `INSERT INTO ${req.params.branch} (roll, name, cls, birthdate, email, contact) VALUES ('${roll}','${name}','${cls}','${birthday}','${email}',${contact})`;

  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    console.log(result);
    res.send("data inserted");
  });
});

//update data
app.get("/data/:branch/update", (req, res) => {
  const { roll, name, cls, birthday, email, contact } = req.query;
  let sql = `UPDATE ${req.params.branch} SET name='${name}', cls='${cls}', birthdate='${birthday}', email='${email}',contact=${contact} WHERE roll='${roll}'`;

  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    console.log(result);
    res.send("data updated");
  });
});

//delete data
app.get("/data/:branch/delete", (req, res) => {
  let sql = `DELETE FROM ${req.params.branch} WHERE roll=${req.query.roll}`;

  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    console.log(result);
    res.send(`${req.query.roll} is deleted`);
  });
});

app.listen(4000, (req, res) => {
  console.log("server started on port 4000");
});
