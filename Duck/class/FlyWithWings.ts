import { FlyBehavior } from "../interfaces/FlyBehaviour";

export class FlyWithWings implements FlyBehavior{
    fly(){
        console.log("I'am flying")
    }
}