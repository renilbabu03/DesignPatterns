import { SimplePizzaFactory } from "./SimplePizzaFactory";
import { Pizza } from "../interface/Pizza";
import { NYStyleCheesePizza, NYStylePepparoniPizza, NYStyleClamPizza, NYStyleVeggiePizza, CHStyleCheesePizza, CHStylePepparoniPizza, CHStyleClamPizza, CHStyleVeggiePizza, CaliforniaStyleCheesePizza, CaliforniaStylePepparoniPizza, CaliforniaStyleClamPizza, CaliforniaStyleVeggiePizza, CheesePizza, ClamPizza } from "./Pizza";
import { PizzaIngredientFactory, NYPizzaIngredientFactory } from "./PizzaIngredientFactory";

export abstract class PizzaStore {
    // factory:SimplePizzaFactory;

    // constructor(factory:SimplePizzaFactory){
    //     this.factory = factory;
    // }
    constructor() {
    }

    public orderPizza(type: string): Pizza {
        var pizza: Pizza;

        pizza = this.createPizza(type);

        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();
        return pizza;
    }

    protected abstract createPizza(type: string): Pizza
}


export class NYPizzaStore extends PizzaStore {
    constructor() {
        super();
    }
    pro = ''

    public createPizza(type: String): Pizza {

        var pizza: Pizza = null;
        var ingredientFactory:PizzaIngredientFactory = new NYPizzaIngredientFactory();
        if (type == "cheese") {
            pizza = new CheesePizza(ingredientFactory)
        } else if (type == "pepperoni") {
            pizza = new NYStylePepparoniPizza();
        } else if (type == "clam") {
            pizza = new ClamPizza(ingredientFactory)
        } else if (type == "veggie") {
            pizza = new NYStyleVeggiePizza();
        }
        return pizza
    }
}

export class ChicagoPizzaStore extends PizzaStore {
    constructor() {
        super();
    }

  
    public createPizza(type: string): Pizza {
        var pizza: Pizza = null;
        if (type == "cheese") {
            pizza = new CHStyleCheesePizza();
        } else if (type == "pepperoni") {
            pizza = new CHStylePepparoniPizza();
        } else if (type == "clam") {
            pizza = new CHStyleClamPizza();
        } else if (type == "veggie") {
            pizza = new CHStyleVeggiePizza();
        }

        return pizza;
    }
}

export class CaliforniaPizzaStore extends PizzaStore {
    constructor() {
        super();
    }

    public createPizza(type: string): Pizza {
        var pizza: Pizza = null;
        if (type == "cheese") {
            pizza = new CaliforniaStyleCheesePizza();
        } else if (type == "pepperoni") {
            pizza = new CaliforniaStylePepparoniPizza();
        } else if (type == "clam") {
            pizza = new CaliforniaStyleClamPizza();
        } else if (type == "veggie") {
            pizza = new CaliforniaStyleVeggiePizza();
        }


        return pizza;
    }
}