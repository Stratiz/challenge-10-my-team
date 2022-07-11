//@ts-check
const express = require('express');
const cors = require('cors')

const Manager = require('./classes/Manager');
const Intern = require('./classes/Intern.js');
const Engineer = require('./classes/Engineer.js');
const inquirer = import('inquirer');

let teamMembers = [];

let MainManager = undefined;
async function DoNext() {
    if (!MainManager) {
        MainManager = new Manager();
        await MainManager.collectInput();
        teamMembers.push(MainManager);
    }
    var prompt = (await inquirer).createPromptModule();
    let answers = await prompt([
        {
            name: 'next',
            message: 'Would you like to add another member or exit?',
            type: 'list',
            choices: ["Engineer", "Intern", "Exit"]
        },
    ])
    
    if (answers.next === "Engineer") {
        let NewEngineer = new Engineer();
        await NewEngineer.collectInput();
        teamMembers.push(NewEngineer);
        DoNext();
    } else if (answers.next === "Intern") {
        let NewIntern = new Intern();
        await NewIntern.collectInput();
        teamMembers.push(NewIntern);
        DoNext();
    } else {
        console.log("Done!");
    }
}
DoNext();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/team", (req, res) => {
    let membersToReturn = [];
    for (let member of teamMembers) {
        membersToReturn.push({
            name: member.getName(),
            role : member.getRole()
        });
    }
    res.send(membersToReturn);
});

app.listen(3001, () => {
    console.log("Server is running on port 3000");
});
