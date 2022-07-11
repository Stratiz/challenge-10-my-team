const inquirer = import("inquirer");
const Employee = require("./Employee");

class Manager extends Employee {
    constructor() {
        super();
        this.officeNumber = "1";
    }

    async collectInput() {
        await this.collectGlobalInput();
        var prompt = (await inquirer).createPromptModule();
        let answers = await prompt([
            {
                name: 'name',
                message: 'What is the Office Number?',
                type: 'input'
            },
        ]);
        this.officeNumber = answers.officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;