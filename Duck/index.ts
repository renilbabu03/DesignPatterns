import { Duck } from "./class/Duck";
import { FlyWithWings } from "./class/FlyWithWings";
import { Quack } from "./class/Quack";

class MallardDuck extends Duck{
    
    constructor(){
      super();
      this.quackBehaviour = new Quack();
      this.flybehaviour = new FlyWithWings();
    }
}
class MiniDuckSimulator{
    mallardDuck:Duck;
    constructor(){
        this.mallardDuck = new MallardDuck();
        this.mallardDuck.performFly();
        this.mallardDuck.performQuack();
    }
}

var pro = new MiniDuckSimulator();