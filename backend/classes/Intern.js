const inquirer = import("inquirer");
const Employee = require("./Employee");

class Intern extends Employee {
    constructor() {
        super();
        this.school = "";
        
    }
    async collectInput() {
        await this.collectGlobalInput();
        var prompt = (await inquirer).createPromptModule();
        let answers = await prompt([
            {
                name: 'name',
                message: 'What is the School name?',
                type: 'input'
            },
        ]);
        this.school = answers.school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;