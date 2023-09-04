export class Employee {
  emplName: string;
  currentProject: string;

  constructor(name: string, project: string) {
    this.emplName = name;
    this.currentProject = project;
  }

  getCurrentProject(): string {
    return this.currentProject;
  }

  getName(): string {
    return this.emplName;
  }
}