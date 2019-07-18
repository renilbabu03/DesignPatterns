import { State } from "../interface/State";
import { GumballMachine } from "./GumballMachine";

export class SoldState implements State {
    gumballMachine:GumballMachine;

    constructor(gumballMachine:GumballMachine){
        this.gumballMachine = gumballMachine
    }
    ejectQuarter() {
        console.log("inappropriate action");
        
    }
    turnCrank() {
        console.log("inappropriate action");

    }
    dispense() {
       this.gumballMachine.releaseBall();
       if(this.gumballMachine.getCount()> 0){
           this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
       }else{
           console.log("oops! Out of gumball");
           this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
       }

    }
    insertQuarter() {
        console.log("inappropriate action");

    }


}
export class SoldOutState implements State {
    gumballMachine:GumballMachine;

    constructor(gumballMachine:GumballMachine){
        this.gumballMachine = gumballMachine
    }
    ejectQuarter() {
        console.log("Take your quarter back");
        
    }
    turnCrank() {
        console.log("Not allowed");
        
    }
    dispense() {
        console.log("Not allowed");
    }
    insertQuarter() {
        console.log("Not allowed");
    }


}
export class NoQuarterState implements State {
    
    gumballMachine:GumballMachine;

    constructor(gumballMachine:GumballMachine){
        this.gumballMachine = gumballMachine
    }
    ejectQuarter() {
        console.log("You haven't inserted a quarter");
        
    }
    turnCrank() {
        console.log("you turned but there's no quarter");
        
    }
    dispense() {
        console.log("you need to pay first");
        
    }
    insertQuarter() {
        console.log("You inserted a quarter");
        // this.gumballMachine.setState(this.gumballMachine.getHasQuarterState())
        
    }


}
export class HasQuarterState implements State {
    gumballMachine:GumballMachine;

    constructor(gumballMachine:GumballMachine){
        this.gumballMachine = gumballMachine
    }
    ejectQuarter() {
        console.log("Quarter returned");
        this.gumballMachine.setState(this.gumballMachine.getNoQuarterState())
        
    }
    turnCrank() {
        console.log("You turned....");
        let winner = Math.floor(Math.random() * 10) + 1  ;
        if(winner == 10 && this.gumballMachine.getCount() > 1){
            this.gumballMachine.setState(this.gumballMachine.getWinnerState());
        }else{
            this.gumballMachine.setState(this.gumballMachine.getSoldState());
        }
    }
    dispense() {
        console.log("No gumballl dispensed");
        
    }
    insertQuarter() {
        console.log("You can't insert another quarter");
        
    }


}
export class WinnerState implements State {
    gumballMachine:GumballMachine;
    constructor(gumballMachine:GumballMachine){
        this.gumballMachine = gumballMachine;
    }
    ejectQuarter() {
        console.log("Take your quarter back");
        
    }
    turnCrank() {
        console.log("Not allowed");
        
    }

    insertQuarter() {
        console.log("Not allowed");
    }
    dispense() {
        this.gumballMachine.releaseBall();
        if(this.gumballMachine.getCount() == 0){
            this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
        }else{
            this.gumballMachine.releaseBall();
            console.log("You're winner! You got two gumballs for your quarter");
            if(this.gumballMachine.getCount() > 0){
                this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
            }else{
                console.log(("OOps , out of gumballs"));
                this.gumballMachine.setState(this.gumballMachine.getSoldOutState())
            }
            
        }
    }

}