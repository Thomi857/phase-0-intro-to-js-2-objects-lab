// Write your solution in this file!
let employee = {
    name: "Sam",
      streetAddress: "11 Broadway"
      };

function updateEmployeeWithKeyAndValue(employee, key ,value){
    return {...employee, [key]: value};
        return;
    };

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key ,value){
    employee[key] = value;  // Directly mutate the original object
    return employee;
}
function deleteFromEmployeeByKey(employee, key){
    const newEmployee = { ...employee };  // Correctly create a copy of the object
    delete newEmployee[key];  // Delete the key from the copied object
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];  // Directly mutate the original object
    return employee;
}