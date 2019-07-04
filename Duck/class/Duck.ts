import { FlyBehavior } from "../interfaces/FlyBehaviour";
import { QuackBehavior } from "../interfaces/QuackBehaviour";

export abstract class Duck{
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