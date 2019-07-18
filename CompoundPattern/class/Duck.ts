import { Quackable } from "../interface/Quackable";

export class MallardDuck implements Quackable{
    quack():void{
        console.log("Quaack");
        
    }
}

export class RedHeadDuck implements Quackable{
    quack():void{
        console.log("Quaack");
        
    }
}
export class DuckCall implements Quackable{
    quack():void{
        console.log("Kwak");
        
    }
}
export class RubberDuck implements Quackable{
    quack():void{
        console.log("Squeak");
        
    }
}