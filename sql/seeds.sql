INSERT INTO department (name)
VALUES ("Finance");
INSERT INTO department (name)
VALUES ("Legal");
INSERT INTO department (name)
VALUES ("Sales");
INSERT INTO department (name)
VALUES ("Engineering");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 100000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Lead Engineer", 160000, 4);
INSERT INTO role (title, salary, department_id)
VALUES ("Software Engineer", 130000, 4);
INSERT INTO role (title, salary, department_id)
VALUES ("Accountant", 85000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Legal Team Lead", 250000, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jim", "Halpert", 1, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Michael", "Scott", 1, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Pam", "Beesly", 5, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Dwight", "Schrute", 4, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Andy", "Bernard", 5, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Oscar", "Martinez", 2, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Kevin", "Malone", 4, 7);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Angela", "Martin", 1, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Stanley", "Hudson", 1, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Darryl", "Philbin", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Ryan", "Howard", 3, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Creed", "Bratton", 1, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Robert", "California", 1, 3);