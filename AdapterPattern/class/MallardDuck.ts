import { Duck } from "../interface/Duck";

export class MallardDuck implements Duck{
    public quack(){
        console.log("Quack");
        
    }

    public fly(){
        console.log("i'm flying");
        
    }
}