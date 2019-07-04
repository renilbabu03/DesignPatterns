import { QuackBehavior } from "../interfaces/QuackBehaviour";

export class MuteQuack implements QuackBehavior{
    quack(){
        console.log("Silence ");
    }
}