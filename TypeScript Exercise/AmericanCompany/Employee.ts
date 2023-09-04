export class Employee {
  protected emplName: string;
  protected currentProject: string;

  constructor(name: string, project: string) {
      this.emplName = name;
      this.currentProject = project;
  }
}