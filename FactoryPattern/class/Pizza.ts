export abstract class Pizza{
    name:string;
    dough:string;
    sauce:string;
    toppings:string[] = [];

    public prepare():void{
        console.log("Prepareing " + this.name);
        console.log("Tossing dough...");
        console.log("Adding sauce...");
        console.log("Adding toppings: ");
        for(var topping of this.toppings){
            console.log(" " + topping);
        }
    }

    public bake(){
        console.log("Bake for 25 minutes at 250");

    }
    public cut(){
        console.log("cutting the pizza into diagonal slices");
    }
    public box(){
        console.log("Place pizza in official Pizzastore box");
    }

    public getName():string{
        return this.name;
    }
}

export class CheesePizza extends Pizza {
    constructor(){
        super();
        this.name = "Chicago Style Sauce and Cheese Pizza"
        this.dough = "Thick crust dough";
        this.sauce = "Tomato Sauce";
        this.toppings.push("Mozarella cheese");
    }

}

export class PepperoniPizza extends Pizza {
    constructor(){
        super();
        this.name = "Chicago Style Sauce and Cheese Pizza"
        this.dough = "Thick crust dough";
        this.sauce = "Tomato Sauce";
        this.toppings.push("Mozarella cheese");
    }

}

export class ClamPizza extends Pizza {
    constructor(){
        super();
        this.name = "Chicago Style Sauce and Cheese Pizza"
        this.dough = "Thick crust dough";
        this.sauce = "Tomato Sauce";
        this.toppings.push("Mozarella cheese");
    }

}

export class VeggiePizza extends Pizza {
    constructor(){
        super();
        this.name = "Chicago Style Sauce and Cheese Pizza"
        this.dough = "Thick crust dough";
        this.sauce = "Tomato Sauce";
        this.toppings.push("Mozarella cheese");
    }

}

export class NYStyleCheesePizza extends Pizza {
    constructor(){
        super();
        this.name = "NY Style Sauce and Cheese Pizza"
        this.dough = "Thin crust dough";
        this.sauce = "Marinara Sauce";
        this.toppings.push("Grated Reggiano cheese");
    }


}
export class NYStyleVeggiePizza extends Pizza {
    constructor(){
        super();
        this.name = "Chicago Style Sauce and Cheese Pizza"
        this.dough = "Thick crust dough";
        this.sauce = "Tomato Sauce";
        this.toppings.push("Mozarella cheese");
    }

}
export class NYStyleClamPizza extends Pizza {
    constructor(){
        super();
        this.name = "Chicago Style Sauce and Cheese Pizza"
        this.dough = "Thick crust dough";
        this.sauce = "Tomato Sauce";
        this.toppings.push("Mozarella cheese");
    }

}
export class NYStylePepparoniPizza extends Pizza {
    constructor(){
        super();
        this.name = "Chicago Style Sauce and Cheese Pizza"
        this.dough = "Thick crust dough";
        this.sauce = "Tomato Sauce";
        this.toppings.push("Mozarella cheese");
    }

}
export class CHStyleCheesePizza extends Pizza {
    constructor(){
        super();
        this.name = "Chicago Style Sauce and Cheese Pizza"
        this.dough = "Thick crust dough";
        this.sauce = "Tomato Sauce";
        this.toppings.push("Mozarella cheese");
    }

}
export class CHStyleVeggiePizza extends Pizza {
    constructor(){
        super();
        this.name = "Chicago Style Sauce and Cheese Pizza"
        this.dough = "Thick crust dough";
        this.sauce = "Tomato Sauce";
        this.toppings.push("Mozarella cheese");
    }

}
export class CHStyleClamPizza extends Pizza {
    constructor(){
        super();
        this.name = "Chicago Style Sauce and Cheese Pizza"
        this.dough = "Thick crust dough";
        this.sauce = "Tomato Sauce";
        this.toppings.push("Mozarella cheese");
    }

}
export class CHStylePepparoniPizza extends Pizza {
    constructor(){
        super();
        this.name = "Chicago Style Sauce and Cheese Pizza"
        this.dough = "Thick crust dough";
        this.sauce = "Tomato Sauce";
        this.toppings.push("Mozarella cheese");
    }

}
export class CaliforniaStyleCheesePizza extends Pizza {
    constructor(){
        super();
        this.name = "Chicago Style Sauce and Cheese Pizza"
        this.dough = "Thick crust dough";
        this.sauce = "Tomato Sauce";
        this.toppings.push("Mozarella cheese");
    }

}
export class CaliforniaStyleVeggiePizza extends Pizza {
    constructor(){
        super();
        this.name = "Chicago Style Sauce and Cheese Pizza"
        this.dough = "Thick crust dough";
        this.sauce = "Tomato Sauce";
        this.toppings.push("Mozarella cheese");
    }

}
export class CaliforniaStyleClamPizza extends Pizza {
    constructor(){
        super();
        this.name = "Chicago Style Sauce and Cheese Pizza"
        this.dough = "Thick crust dough";
        this.sauce = "Tomato Sauce";
        this.toppings.push("Mozarella cheese");
    }

}
export class CaliforniaStylePepparoniPizza extends Pizza {
    constructor(){
        super();
        this.name = "Chicago Style Sauce and Cheese Pizza"
        this.dough = "Thick crust dough";
        this.sauce = "Tomato Sauce";
        this.toppings.push("Mozarella cheese");
    }

}