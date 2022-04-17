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
    startApp();
});

function startApp(){
    inquirer
    .prompt({
        type: 'list',
        name: 'task',
        message: 'Please select what you would like to do!',
        choices: [
            'View Employees',
            'View Employees by Department',
            'Add Employee',
            'Remove Employee',
            'Change Employee Role',
            'Add Role',
            'END'
        ]
    })
    .then(function ({task}){
        switch (task){
            case 'View Employees':
                viewEmployees();
                break;
            case 'View Employees by Department':
                viewByDepartment();
                break;
            case 'Add Employee':
                addEmployee();
                break;
            case 'Remove Employee':
                removeEmployee();
                break;
            case 'Change Employee Role':
                changeRole();
                break;
            case 'Add Role':
                addRole();
                break;
            case 'END':
                connection.end();
                break;
        }
    })
}

function viewEmployees(){}
function viewByDepartment(){}
function addEmployee(){}
function removeEmployee(){}
function changeRole(){}
function addRole(){}
