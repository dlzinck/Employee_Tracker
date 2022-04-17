const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');

// MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3500,
    user: 'root',
    password: 'password',
    database: 'employees_db'
});

connection.connect(function (err){
    if(err) throw err;
    console.log('connected as id' + connection.threadId);
    console.log('Welcome to the Employee Tracker!');
});
