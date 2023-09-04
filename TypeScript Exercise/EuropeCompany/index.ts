// Import stylesheets
import './style.css';
import { Company } from './Company';
import { Frontend } from './Frontend';
import { Backend } from './Backend';

let disney = new Company('Walt Disney Co.');

let emp1 = new Frontend('John Doe', 'Encanto');
let emp2 = new Frontend('Stan Lee', 'Spiredman');
let emp3 = new Backend('Kevin Eastman', 'TMNT');
let emp4 = new Backend('Peter Laird', 'TMNT');
let emp5 = new Backend('John Musker', 'Little Mermaid');

disney.addEmployee(emp1);
disney.addEmployee(emp2);
disney.addEmployee(emp3);
disney.addEmployee(emp4);
disney.addEmployee(emp5);

console.log(disney.getNameList());
console.log(disney.getProjectList());
