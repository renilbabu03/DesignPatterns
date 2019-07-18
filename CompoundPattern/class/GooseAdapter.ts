import { Quackable } from "../interface/Quackable";
import { Honkable } from "../interface/Honkable";

export class GooseAdapter implements Quackable{
    goose:Honkable;
    constructor(goose:Honkable){
        this.goose = goose;
    }
    quack(){
        this.goose.honk()
    }
}