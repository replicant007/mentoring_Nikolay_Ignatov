import { Company } from './Company';
import { Frontend } from './Frontend';
import { Backend } from './Backend';

let disney = new Company('Nestle');

let emp1 = new Frontend('John Connor', 'chocolate biscuits');
let emp2 = new Frontend('Anna Lee', 'Sponge cake');

let emp3 = new Backend('Donald Sutherland', 'Cereals');
let emp4 = new Backend('Ken Watanabe', 'Waffles');

disney.addEmployee(emp1);
disney.addEmployee(emp2);
disney.addEmployee(emp3);
disney.addEmployee(emp4);

console.log(disney.getNameList());
console.log(disney.getProjectList());