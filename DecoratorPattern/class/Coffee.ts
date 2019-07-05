import { Beverage } from "./Beverage";

export class DryRoast extends Beverage{
    constructor(){
        super();
        this.description = "Dry Roast";
    }

    public cost():number{
        return 1.11;
    }
}

export class Espresso extends Beverage{
    constructor(){
        super();
    }

    public cost():number{
        return 1.99;
    }
}

export class HouseBlend extends Beverage{
    constructor(){
        super();
        this.description = "House Blend coffee"
    }

    public cost():number{
        return 0.89;
    }
}


export class Decaf extends Beverage{
    constructor(){
        super();
        this.description = "Decaf coffee"
    }

    public cost():number{
        return 2;
    }
}