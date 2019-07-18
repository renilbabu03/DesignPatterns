import { Honkable } from "../interface/Honkable";

export class Goose implements Honkable{
    public honk():void{
        console.log("honk");
        
    }
}