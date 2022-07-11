const inquirer = import("inquirer");


class Employee {
    constructor() {
        this.name = "";
        this.id = "";
        this.email = "";
        
    }
    async collectGlobalInput() {
        var prompt = (await inquirer).createPromptModule();
        let answers = await prompt([
            {
                name: 'name',
                message: 'What is the name?',
                type: 'input'
            },
            {
                name: 'id',
                message: 'What is the employee ID?',
                type: 'input'
            },
            {
                name: 'email',
                message: 'What is the email?',
                type: 'input'
            }
        ]);
        this.name = answers.name;
        this.id = answers.id;
        this.email = answers.email;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {     
        return this.email;
    }
    getRole() {
        return "Employee";
    }
}

module.exports = Employee;