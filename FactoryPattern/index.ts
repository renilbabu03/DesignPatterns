import { PizzaStore, NYPizzaStore } from "./class/PizzaStore";
import { Pizza } from "./interface/Pizza";

var nyPizzaStore:PizzaStore = new NYPizzaStore();
var pizza:Pizza = nyPizzaStore.orderPizza("cheese")
console.log(pizza.getName());