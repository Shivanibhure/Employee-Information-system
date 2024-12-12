### Steps to Execute the Employee Management System Code:

1. **Install Node.js**  
   Ensure that Node.js is installed on your system. You can download it from [Node.js official website](https://nodejs.org/).

2. **Set Up MySQL Database**  
   - Install MySQL and start the MySQL server.
   - Create a database named `employee_management`.
   - Run the following SQL query to create the `employees` table:
     ```sql
     CREATE DATABASE employee_management;
     USE employee_management;

     CREATE TABLE employees (
       id INT AUTO_INCREMENT PRIMARY KEY,
       name VARCHAR(255) NOT NULL,
       email VARCHAR(255) NOT NULL,
       address VARCHAR(255),
       salary DECIMAL(10, 2),
       experience INT,
       position VARCHAR(100)
     );
     ```

3. **Download the Project**  
   - Place all project files (`app.js`, `index.html`, `styles.css`) in a single directory.
   - Ensure your directory structure looks like this:
     ```
     employee-management/
     ├── app.js
     ├── package.json
     ├── public/
     │   ├── index.html
     │   └── styles.css
     ```

4. **Initialize the Project**  
   - Open the terminal and navigate to the project folder:
     ```bash
     cd /path/to/employee-management
     ```
   - Install the required dependencies:
     ```bash
     npm init -y
     npm install express mysql2 body-parser path
     ```

5. **Run the Application**  
   - Start the server:
     ```bash
     node app.js
     ```
   - The server will run on `http://localhost:8080`.

6. **Access the Application**  
   - Open your web browser and go to `http://localhost:8080`.
   - Use the "Add Employee" form to add employee data.
   - View the employee list displayed in the table format below the form.

7. **Verify Data in MySQL**  
   - Open your MySQL client or MySQL Workbench.
   - Run the query `SELECT * FROM employees;` to confirm that the data has been stored.

8. **Debugging (If Required)**  
   - Ensure MySQL credentials in the `app.js` file match your local setup.
   - If the application doesn't start, check for missing dependencies using:
     ```bash
     npm install
     ```
   - Fix any syntax errors or warnings displayed in the terminal.

Your Employee Management System should now be running successfully!
