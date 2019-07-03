interface FlyBehavior{
     fly():void;
}
interface QuackBehavior{
     quack():void;
}

class Quack implements QuackBehavior{
    quack(){
        console.log("Quack");
    }
}

class MuteQuack implements QuackBehavior{
    quack(){
        console.log("Silence ");
    }
}

class Squeak implements QuackBehavior{
    quack(){
        console.log("Squeak ");
    }
}

class FlyWithWings implements FlyBehavior{
    fly(){
        console.log("I'am flying")
    }
}

class FlyNoWay implements FlyBehavior{
    fly(){
        console.log("I can't fly");
    }
}

abstract class Duck{
 flybehaviour:FlyBehavior;
 quackBehaviour:QuackBehavior;

 constructor(){

 }

 public performFly(){
     this.flybehaviour.fly();
 }

 public performQuack(){
     this.quackBehaviour.quack();
 }


}

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