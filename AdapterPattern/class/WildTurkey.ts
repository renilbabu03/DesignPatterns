import { Turkey } from "../interface/Turkey";

export class WildTurkey implements Turkey{
    public gobble(){
        console.log("gooble gobble");
        
    }

    fly(){
        console.log("I am flying a short distance");
        
    }
}