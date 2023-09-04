import { Employee } from "./Employee";

export class Company {
    compName: string;
    employees: Employee[];

    constructor(compName: string) {
        this.compName = compName;
        this.employees = [];
    }

    addEmployee(employee: Employee) {
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