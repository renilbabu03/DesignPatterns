export abstract class CaffeineBeverage{
    public prepareRecepe():void{
        this.boilWater();
        this.brew();
        this.pourInCup();
        if(this.customerWantsCondiments()){
            this.addCondiments();
        }
    }

    abstract brew():void;
    abstract addCondiments():void;

    boilWater():void{
        console.log("Boiling water");
        
    }

    pourInCup():void{
        console.log("Pouring in cup");

    }

    /** Hook: Can be overridden by the subclss */
    customerWantsCondiments(){
        return true;
    }
}

export class Tea extends CaffeineBeverage{
    constructor(){
        super();
    }

    brew(){
        console.log("steeping the tes");
        
    }

    addCondiments(){
        console.log("Adding lemon");
        
    }
}
export class Coffee extends CaffeineBeverage{
    constructor(){
        super();
    }

    brew(){
        console.log("Dripping coffee throgun filter");
        
    }

    addCondiments(){
        console.log("Adding sugar and milk");
        
    }
}
export class CoffeeWithoutCondiments extends CaffeineBeverage{
    constructor(){
        super();
    }

    brew(){
        console.log("Dripping coffee throgun filter");
        
    }

    addCondiments(){
        console.log("Adding sugar and milk");
        
    }

    customerWantsCondiments(){
        return false;
    }
}