/**************************************************************
🏢 Advanced TypeScript Practice: Working with Employees

You are working with a company's internal system to manage employees.

Each employee has:
- id (number)
- name (string)
- department (string)
- salary (number)

Your goal is to write functions that analyze and transform this data.
**************************************************************/

// ✅ Do not change this interface
interface Employee {
  id: number;
  name: string;
  department: string;
  salary: number;
}

// ✅ Sample data
const employees: Employee[] = [
  { id: 101, name: "Alice", department: "Engineering", salary: 7000 },
  { id: 102, name: "Bob", department: "Marketing", salary: 5000 },
  { id: 103, name: "Charlie", department: "Engineering", salary: 7200 },
  { id: 104, name: "Diana", department: "HR", salary: 4800 },
  { id: 105, name: "Ethan", department: "Marketing", salary: 5300 },
  { id: 106, name: "Fay", department: "Engineering", salary: 6900 },
  { id: 107, name: "George", department: "HR", salary: 5100 },
];

/**************************************************************
✅ Q1) getSortedEmployeesBySalary(department: string):
- Accepts a department name (string)
- Returns an array of employees from that department,
  sorted by salary in descending order
**************************************************************/

function getSortedEmployeesBySalary(
  inputEmployees: Employee[],
  inputDepartment: string
): Employee[] {
  return inputEmployees
    .filter((employee) => {
      return employee.department === inputDepartment;
    })
    .sort((a, b) => b.salary - a.salary); //descending
}
// console.log(getSortedEmployeesBySalary("Engineering"));
console.log(getSortedEmployeesBySalary(employees, "Engineering")); //tested awesome!

/**************************************************************
✅ Q2) promoteEmployee(employeeId: number, amount: number):
- Accepts an employee ID and a raise amount
- Returns a new version of the employee with the updated salary
- If no employee is found, return undefined
**************************************************************/
function promoteEmployee(
  inputEmployees: Employee[],
  inputId: number,
  inputRaise: number
): Employee | undefined {
  const employee = inputEmployees.find((employee) => employee.id === inputId);
  if (!employee) return undefined;

  return {
    ...employee, //spread operator
    salary: employee.salary + inputRaise,
  };
}
console.log(employees[1]);
console.log(promoteEmployee(employees, 102, 500)); //confirmed 5500
// console.log(promoteEmployee(102, 500));

/**************************************************************
✅ Question 3: 🌶️
Create a function `getHighestPaidEmployee` that:
- Accepts an array of employees
- Returns the employee with the highest salary
**************************************************************/

// console.log(getHighestPaidEmployee(employees)); // Charlie

/**************************************************************
✅ Q4) filterBySalaryRange(min: number, max: number):
- Returns employees whose salaries are within the given range (inclusive)
- Sorted in ascending order of salary
**************************************************************/

// console.log(filterBySalaryRange(5000, 7100));

/**************************************************************
✅ Question 5: 🌶️🌶️🌶️
Create a function `groupEmployeesByDepartment` that:
- Accepts an array of employees
- Returns an object where each key is a department name,
  and the value is an array of employee names in that department

Example output:
{
  Engineering: ["Alice", "Charlie"],
  Marketing: ["Bob", "Ethan"],
  HR: ["Diana"]
}
**************************************************************/

// console.log(groupEmployeesByDepartment(employees));
