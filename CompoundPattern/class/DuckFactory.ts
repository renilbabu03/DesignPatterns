import { Quackable } from "../interface/Quackable";
import { RedHeadDuck, RubberDuck, MallardDuck, DuckCall } from "./Duck";
import { QuackCounter } from "./QuackCounterDecorator";

export abstract class AbstractDuckFactory{
    abstract createMallardDuck():Quackable;
    abstract createRedheadDuck():Quackable;
    abstract createDuckCall():Quackable;
    abstract createRubberDuck():Quackable
}

export class DuckFactory extends AbstractDuckFactory{
    public createRedheadDuck(): Quackable {
        return new RedHeadDuck();
    }
    public createDuckCall(): Quackable {
        return new RedHeadDuck();
    }
    public createRubberDuck(): Quackable {
        return new RubberDuck();
    }
    public createMallardDuck():Quackable{
        return new RedHeadDuck();
    }


}

export class CountingDuckFactory extends AbstractDuckFactory{
    createMallardDuck(): Quackable {
        return new QuackCounter(new MallardDuck())
    }    
    createRedheadDuck(): Quackable {
        return new QuackCounter(new RedHeadDuck())
    }
    createDuckCall(): Quackable {
        return new QuackCounter(new DuckCall())
    }
    createRubberDuck(): Quackable {
        return new QuackCounter(new RubberDuck())
    }


}