# Employee_Tracker

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Description

The goal of this project was to create an application called Employee Tracker that that allow non-developers to easily view and interact with information stored in databases. This is a command-line application from scratch to manage a "company's" employee database, using Node.js, Inquirer, and MySQL:

When I start the application I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role. When I choose to view all departments I am presented with a formatted table showing department names and department ids. When I choose to view all roles I am presented with the job title, role id, the department that role belongs to, and the salary for that role. When I choose to view all employees I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to. When I choose to add a department I am prompted to enter the name of the department and that department is added to the database. When I choose to add a role I am prompted to enter the name, salary, and department for the role and that role is added to the database. When I choose to add an employee I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database. When I choose to update an employee role I am prompted to select an employee to update and their new role and this information is updated in the database.


## Table of Contents

- [Technology Used](#technology-used)
- [Links](#links)
- [Screenshots](#screenshots)
- [Usage](#usage)
- [Questions](#questions)
- [License](#license)


## Technology Used

- [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js](https://nodejs.org/en/)
- [Nodemon package](https://www.npmjs.com/package/nodemon)
- [MySQL2](https://www.npmjs.com/package/mysql2)
- [Inquirer](https://www.npmjs.com/package/inquirer)
- [console.table](https://www.npmjs.com/package/console.table)
- [GitHub](https://www.github.com)


## Links

- [GitHub Repository](https://github.com/dlzinck/Employee_Tracker)
- [Live Demo](https://watch.screencastify.com/v/mOjcIzNPQcYadKUMKLPL)


## Screenshots


## Usage

1. Run 'npm i'

2. Run node server.js

3. Select an option

4. Follow prompts


## License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit).

Copyright (c) 2021 Drew Lane Zinck II

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.