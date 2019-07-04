import { FlyBehavior } from "../interfaces/FlyBehaviour";

export class FlyNoWay implements FlyBehavior{
    fly(){
        console.log("I can't fly");
    }
}
