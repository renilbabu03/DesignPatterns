import { Quackable } from "../interface/Quackable";
import { MallardDuck, RedHeadDuck, DuckCall, RubberDuck } from "./Duck";
import { GooseAdapter } from "./GooseAdapter";
import { Goose } from "./Geese";
import { QuackCounter } from "./QuackCounterDecorator";
import { AbstractDuckFactory } from "./DuckFactory";

export class DuckSimulator{
    duckFactory:AbstractDuckFactory;
    constructor(
        duckFactory:AbstractDuckFactory
    ){
        this.duckFactory = duckFactory
    }

    public simulate():void{
        // var mallardDuck:Quackable = new MallardDuck();
        // var redheadDuck:Quackable = new RedHeadDuck();
        // var duckCall:Quackable = new DuckCall();
        // var rubberDuck:Quackable = new RubberDuck();
        // var goose  = new Goose();
        // var gooseDuck:Quackable = new GooseAdapter(goose);

        /** Using decorator pattern to count no of quacks */
        // var mallardDuck:Quackable = new QuackCounter(new MallardDuck());
        // var redheadDuck:Quackable = new QuackCounter(new RedHeadDuck());
        // var duckCall:Quackable =  new QuackCounter(new DuckCall());
        // var rubberDuck:Quackable =  new QuackCounter(new RubberDuck());
        // var goose  = new Goose();
        // var gooseDuck:Quackable = new QuackCounter(new GooseAdapter(goose));
        var mallardDuck:Quackable = this.duckFactory.createMallardDuck();
        var redheadDuck:Quackable = this.duckFactory.createRedheadDuck();
        var duckCall:Quackable =  this.duckFactory.createDuckCall();
        var rubberDuck:Quackable =  this.duckFactory.createRubberDuck();
        var goose  = new Goose();
        var gooseDuck:Quackable = new QuackCounter(new GooseAdapter(goose));
        console.log("Duck Simulator");
        
        this.simulateDuck(mallardDuck);
        this.simulateDuck(redheadDuck);
        this.simulateDuck(duckCall);
        this.simulateDuck(rubberDuck);
        this.simulateDuck(gooseDuck);
        console.log(QuackCounter.getQuacks());
        

    }

    private simulateDuck(duck:Quackable){
        duck.quack()
    }
}