import { QuackBehavior } from "../interfaces/QuackBehaviour";

export class Squeak implements QuackBehavior{
    quack(){
        console.log("Squeak ");
    }
}

export class MuteQuack implements QuackBehavior{
    quack(){
        console.log("Silence ");
    }
}
export class Quack implements QuackBehavior{
    quack(){
        console.log("I am quacking ");
    }
}