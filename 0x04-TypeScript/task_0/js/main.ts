interface Student{
    firstName:string;
    lastName:string;
    age:number;
    location:string;
}

const student1: Student={
    firstName:"peter",
    lastName:"smith",
    age:30,
    location:"berlin",
};
const student2: Student={
    firstName:"paul",
    lastName:"rudd",
    age:27,
    location:"hamburg",
};
const studentsList: Student[] = [student1, student2];

//create table
const table =document.createElement("table");
const tbody =document.createElement("tbody");

studentsList.forEach((student)=>{
    const row =document.createElement("tr");

    const firstNameCell =document.createElement("td");
    firstNameCell.textContent =student.firstName;

    const locationCell =document.createElement("td");
    locationCell.textContent =student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
})

table.appendChild(tbody);
document.body.appendChild(table)

