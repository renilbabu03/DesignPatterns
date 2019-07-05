import { FlyBehavior } from "../interfaces/FlyBehaviour";

export class FlyNoWay implements FlyBehavior{
    fly(){
        console.log("I can't fly");
    }
}

export class FlyWithWings implements FlyBehavior{
    fly(){
        console.log("I'am flying")
    }
}

export class FlyRocketPowered implements FlyBehavior{
    fly(){
        console.log("I am flywing with rocker")
    }
}