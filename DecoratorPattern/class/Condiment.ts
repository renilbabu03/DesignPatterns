import { CondimentDecorator } from "./CondimentDecorator";
import { Beverage } from "./Beverage";

export class Mocha extends CondimentDecorator{
    beverage:Beverage;

    constructor(beverage:Beverage){
        super();
        this.beverage = beverage
    }

    public getDescription():string{
        return this.beverage.getDescription() + ", Mocha";
    }

    public cost():number{
        return this.beverage.cost() + .20;
    }
}

export class Whip extends CondimentDecorator{
    beverage:Beverage;

    constructor(beverage:Beverage){
        super();
        this.beverage = beverage
    }

    public getDescription():string{
        return this.beverage.getDescription() + ", Whip"
    }

    public cost():number{
        return this.beverage.cost() + 0.99;
    }
}


export class Soy extends CondimentDecorator{
    beverage:Beverage;
    constructor(beverage:Beverage){
        super();
        this.beverage = beverage
    }

    public getDescription():string{
        return this.beverage.getDescription() + ", Soy" 
    }

    public cost():number{
        return this.beverage.cost() + 2.33;
    }
}