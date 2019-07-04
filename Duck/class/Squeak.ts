import { QuackBehavior } from "../interfaces/QuackBehaviour";

export class Squeak implements QuackBehavior{
    quack(){
        console.log("Squeak ");
    }
}