import { QuackBehavior } from "../interfaces/QuackBehaviour";

export class Quack implements QuackBehavior{
    quack(){
        console.log("Quack");
    }
}