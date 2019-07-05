import { Duck } from "./class/Duck";
import { Quack } from "./class/Quack";
import { FlyWithWings, FlyNoWay, FlyRocketPowered } from "./class/Fly";
import { CallSmallDuck, CallWistle } from "./class/Call";

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

class ModelDuck extends Duck{
    constructor(){
      super();
      this.flybehaviour = new FlyNoWay();
      this.quackBehaviour = new Quack();   
      this.callbehaviour = new CallSmallDuck();
    }
}

var pro = new ModelDuck();
pro.performFly();
pro.setFlyBehaviour(new FlyRocketPowered());
pro.performFly();
pro.performCall();
pro.setCallBehaviour(new CallWistle())
pro.performCall();