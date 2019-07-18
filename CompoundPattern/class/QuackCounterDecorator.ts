import { Quackable } from "../interface/Quackable";

export class QuackCounter implements Quackable{
    duck:Quackable;

    static noOfQuacks:number = 0;
    constructor(duck:Quackable){
        this.duck = duck;
    }

    quack(){
        this.duck.quack();
        QuackCounter.noOfQuacks ++
    }

    public static getQuacks(){
        return this.noOfQuacks;
    }

}