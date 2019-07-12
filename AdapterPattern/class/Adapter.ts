import { Duck } from "../interface/Duck";
import { Turkey } from "../interface/Turkey";

export class TurkeyAdapter implements Duck{
    turkey:Turkey;

    constructor(turkey:Turkey){
        this.turkey = turkey;
    }

    quack(){
      this.turkey.gobble();
    }

    fly(){
        this.turkey.fly()
    }
}


export class DuckToTurkeyAdaptor implements Turkey{
    duck:Duck;

    constructor(duck:Duck){
        this.duck = duck
    }

    gobble(){
        this.duck.quack();
        
    }

    fly(){
        this.duck.fly();
    }
}