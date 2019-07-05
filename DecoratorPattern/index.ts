import { Beverage } from "./class/Beverage";
import { Espresso, DryRoast } from "./class/Coffee";
import { Mocha, Whip } from "./class/Condiment";

var beverage:Beverage = new Espresso();
console.log(beverage.getDescription() + " $"+beverage.cost());


var beverage2:Beverage = new DryRoast();
beverage2 = new Mocha(beverage2);
beverage2 = new Mocha(beverage2);
beverage2 = new Whip(beverage2);
console.log(beverage2.getDescription() + " $" + beverage2.cost())