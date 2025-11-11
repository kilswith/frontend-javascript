interface Teacher{
    readonly firstName: string;
    readonly lastName:string;
    fullTimeEmployee: boolean;
    yearsOfExperience?:number;
    location: string;
    [key: string]:any;
}
//directors interface
interface Directors extends Teacher{
    numberOfReports:number;
}
//interface for print teacher function
interface PrintTeacherFunction{
    (firstName:string, lastName:string): string;
}

const printTeacher: PrintTeacherFunction = (firstName, lastName) ={
    return `${firstName} ${lastName}`;
};    

console.log(printTeacher("John","Doe"));