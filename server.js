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

// View employees
function viewEmployees(){
    console.log('Now viewing employees\n');
    let query =
    `SELECT e.id, e.first_name, e.last_name, r.title, d.name AS department, r.salary, CONCAT(m.first_name, ' ', m.last_name) AS manager
    FROM employee e
    LEFT JOIN role r
      ON e.role_id = r.id
    LEFT JOIN department d
    ON d.id = r.department_id
    LEFT JOIN employee m
      ON m.id = e.manager_id`

      connection.query(query, function (err, res){
          if (err) throw err;
          console.table(res);
          console.log('Viewing Employees!\n')
      });
      startApp();
}

// View employees by department
function viewByDepartment(){
    console.log('Now viewing employees by department\n');
    let query =
    `SELECT d.id, d.name, r.salary AS budget
    FROM employee e
    LEFT JOIN role r
      ON e.role_id = r.id
    LEFT JOIN department d
    ON d.id = r.department_id
    GROUP BY d.id, d.name`

    connection.query(query, function (err, res){
        if (err) throw err;
        const departmentChoices = res.map(data => ({
            value: data.id, name: data.name
        }));
        console.table(res);
        console.log('Viewing Departments\n');
        startDepartment(departmentChoices);
    }); 
}

// Choosing department to view employees
function startDepartment(departmentChoices){
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'departmentId',
            message: 'Which department?',
            choices: departmentChoices
        }
    ])
    .then(function (answer){
        console.log('answer', answer.departmentId);
        let query =
        `SELECT e.id, e.first_name, e.last_name, r.title, d.name AS department 
        FROM employee e
        JOIN role r
	    ON e.role_id = r.id
        JOIN department d
        ON d.id = r.department_id
        WHERE d.id = ?`

        connection.query(query, answer.departmentId, function (err, res){
            if (err) throw err;

            console.table('response', res);
            console.log(res.affectedRows + 'Employees being viewed\n')
            startApp();
        });
    });
}

// Creates an employee array
function addEmployee(){
    console.log("Adding employee")
    let query =
      `SELECT r.id, r.title, r.salary 
        FROM role r`
    connection.query(query, function (err, res){
      if (err) throw err;
      const roleChoices = res.map(({ id, title, salary }) => ({ value: id, title: `${title}`, salary: `${salary}` }));
      console.table(res);
      console.log("RoleToInsert");
      addPrompts(roleChoices);
    });
}

// Takes user input to add employee through a prompt
function addPrompts(roleChoices){
    inquirer
    .prompt([
        {
          type: "input",
          name: "first_name",
          message: "What is the employee's first name?"
        },
        {
          type: "input",
          name: "last_name",
          message: "What is the employee's last name?"
        },
        {
          type: "list",
          name: "roleId",
          message: "What is the employee's role?",
          choices: roleChoices
        },
    ])
    .then(function (answer) {
        console.log(answer);
        let query = `INSERT INTO employee SET ?`
        connection.query(query,
        {
            first_name: answer.first_name,
            last_name: answer.last_name,
            role_id: answer.roleId,
             manager_id: answer.managerId,
        },
        function (err, res) {
            if (err) throw err;
            console.table(res);
            console.log(res.insertedRows + "Inserted successfully!\n");
            startApp();
        });
    });
}

// Removes employee by making an employee array
function removeEmployee(){
    console.log("Deleting employee");
  let query =
    `SELECT e.id, e.first_name, e.last_name
    FROM employee e`
  connection.query(query, function (err, res) {
      if (err) throw err;
      const deleteEmployeeChoice = res.map(({ id, first_name, last_name }) => ({
          value: id, name: `${id} ${first_name} ${last_name}`
        })
    );
    console.table(res);
    console.log("ArrayToDelete\n");
    deletePrompts(deleteEmployeeChoice);
  });
}

// User chooses employee on list, then employee will be deleted
function deletePrompts(deleteEmployeeChoice) {
    inquirer
    .prompt([
        {
            type: "list",
            name: "employeeId",
            message: "Which employee do you want to remove?",
            choices: deleteEmployeeChoice
        }
    ])
    .then(function (answer) {
        let query = `DELETE FROM employee WHERE ?`;
        connection.query(query, { id: answer.employeeId }, function (err, res) {
            if (err) throw err;
            console.table(res);
            console.log(res.affectedRows + "Deleted\n");
            startApp();
        });
    });
}

function changeRole(){}
function addRole(){}
