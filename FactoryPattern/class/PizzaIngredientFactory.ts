export interface PizzaIngredientFactory {
    createDough();
    createSauce();
    createCheese();
    createClam();
}


export class NYPizzaIngredientFactory implements PizzaIngredientFactory{
    createCheese(){

    }
    createClam(){

    }
    createDough(){

    }
    createSauce(){
        
    }
}