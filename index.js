#! /usr/bin/env node
import inquirer from "inquirer";
class student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new person();
const programStart = async (persons) => {
    do {
        console.log("Welcome");
        const ans = await inquirer.prompt({
            name: "select",
            type: "list",
            message: "Whom Would you like to interact with?",
            choices: ["staff", "student", "exit"]
        });
        if (ans.select == "staff") {
            console.log("You approach the staff room. Please feel  free to ask any question");
        }
        else if (ans.select == "student") {
            const ans = await inquirer.prompt({
                name: "student",
                type: "input",
                message: "Enters the student name you wish to engage with:"
            });
            const Student = persons.students.find(val => val.name == ans.student);
            if (!Student) {
                const name = new student(ans.student);
                persons.addStudent(name);
                console.log(`Hello i am ${name.name}. Nice to meet you!`);
                console.log("New student added");
                console.log("Current student list");
                console.log(persons.students);
            }
            else {
                console.log(`Hello i am ${Student.name}. Nice to see you again!`);
                console.log("Existing student list:");
                console.log(persons.students);
            }
        }
        else if (ans.select == "exit") {
            console.log("Existing the program...");
            process.exit();
        }
    } while (true);
};
programStart(persons);
