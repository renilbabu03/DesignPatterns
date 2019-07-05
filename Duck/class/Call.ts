import { CallBehaviour } from "../interfaces/CallBehaviour";

export class CallWistle implements CallBehaviour{
    call(){
        console.log("fweee fweee");
    }
}

export class CallSmallDuck implements CallBehaviour{
    call(){
        console.log("smallduck pro");
    }
}