const inquirer = import("inquirer");
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor() {
        super();
        this.github = "";
        
    }
    async collectInput() {
        await this.collectGlobalInput();
        var prompt = (await inquirer).createPromptModule();
        let answers = await prompt([
            {
                name: 'name',
                message: 'What is the GitHub Username?',
                type: 'input'
            },
        ]);
        this.github = answers.github;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;