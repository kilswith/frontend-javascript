var student1 = {
    firstName: "peter",
    lastName: "smith",
    age: 30,
    location: "berlin",
};
var student2 = {
    firstName: "paul",
    lastName: "rudd",
    age: 27,
    location: "hamburg",
};
var studentsList = [student1, student2];
//create table
var table = document.createElement("table");
var tbody = document.createElement("tbody");
studentsList.forEach(function (student) {
    var row = document.createElement("tr");
    var firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    var locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});
table.appendChild(tbody);
document.body.appendChild(table);
