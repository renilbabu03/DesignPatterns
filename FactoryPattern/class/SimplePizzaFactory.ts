import { Pizza } from "../interface/Pizza";
import { CheesePizza, PepperoniPizza, ClamPizza, VeggiePizza } from "./Pizza";

export class SimplePizzaFactory{
    public createPizza(type:string):Pizza{
        var pizza:Pizza = null;
        if(type == "cheese"){
            pizza = new CheesePizza();
        }else if(type == "pepperoni"){
            pizza = new PepperoniPizza();
        }else if(type == "clam"){
            pizza = new ClamPizza();
        }else if(type == "veggie"){
            pizza = new VeggiePizza();
        }

        return pizza;

    }
}