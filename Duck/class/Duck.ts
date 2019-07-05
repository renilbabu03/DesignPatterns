import { FlyBehavior } from "../interfaces/FlyBehaviour";
import { QuackBehavior } from "../interfaces/QuackBehaviour";
import { CallBehaviour } from "../interfaces/CallBehaviour";

export abstract class Duck {
    flybehaviour: FlyBehavior;
    quackBehaviour: QuackBehavior;
    callbehaviour:CallBehaviour;

    constructor() {
    }

    public performFly() {
        this.flybehaviour.fly();
    }

    public performQuack() {
        this.quackBehaviour.quack();
    }

    public performCall(){
        this.callbehaviour.call();
    }

    public setFlyBehaviour(fb: FlyBehavior) {
        this.flybehaviour = fb;
    }

    public setQuackBehaviour(qb: QuackBehavior) {
        this.quackBehaviour = qb;
    }

    public setCallBehaviour(cb:CallBehaviour){
        this.callbehaviour = cb;
    }


}