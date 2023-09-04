import { IEmployee } from "./IEmployee";
import { Backend } from "./Backend";
import { Frontend } from "./Frontend";

// I've experimented with list of IEmployee and list of type Employee
// type Employee = Frontend | Backend;

export class Company {
    
    compName: string;
    employees: IEmployee[];

    constructor(compName: string) {
        this.compName = compName;
        this.employees = [];
    }

    addEmployee(employee: IEmployee) {
        this.employees.push(employee);
    }

    getProjectList(): string[] {
        let projects: string[] = [];
        for (const emp of this.employees) {
            projects.push(emp.getCurrentProject());
        }
        return projects;
    }

    getNameList(): string[] {
        let names: string[] = [];
        this.employees.forEach(emp => names.push(emp.getName()));
        return names;
    }
}