import { GumballMachine } from "./class/GumballMachine";

var gumballMachine:GumballMachine = new GumballMachine(5);

gumballMachine.insertQuarter();
gumballMachine.turnCrank();

console.log(gumballMachine);


gumballMachine.insertQuarter();
gumballMachine.turnCrank();
gumballMachine.insertQuarter();
gumballMachine.turnCrank();

console.log(gumballMachine);
