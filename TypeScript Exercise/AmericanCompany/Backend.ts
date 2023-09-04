import { Employee } from "./Employee";
import { IEmployee } from "./IEmployee";

export class Backend extends Employee implements IEmployee {
    
    getCurrentProject(): string {
        return this.currentProject;
    }
    
    getName(): string {
        return this.emplName;
    }
}