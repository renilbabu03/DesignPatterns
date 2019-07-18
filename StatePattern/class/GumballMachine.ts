import { State } from "../interface/State";
import { SoldOutState, NoQuarterState, HasQuarterState, SoldState, WinnerState } from "./State";

export class GumballMachine{
    // SOLDOUT:number = 0;
    // NO_QUARTER:number = 1;
    // HAS_QAARTER = 2;
    // SOLD:number = 3;

    soldOutState:State;
    noQuarterState:State;
    hasQuarterState:State;
    soldState:State;
    winnerState:State;

    state:State;
    count:number = 0;

    constructor(numberGumballs:number){
        this.soldOutState = new SoldOutState(this);
        this.noQuarterState = new NoQuarterState(this);
        this.hasQuarterState = new HasQuarterState(this);
        this.soldState = new SoldState(this);   
        this.winnerState = new WinnerState(this);

        this.count = numberGumballs;

        if(numberGumballs > 0){
            this.state = this.noQuarterState;
        }else{
            this.state = this.soldOutState
        }
    }

    public insertQuarter():void{
        this.state.insertQuarter();
    }

    public ejectQuarter():void{
        this.state.ejectQuarter();
    }


    public turnCrank():void{
        this.state.turnCrank();
        this.state.dispense();
    }

    public setState(state:State):void{
        this.state = state;
    }

    public releaseBall(){
        console.log("A gumball comes rolling out the slot...");
        if(this.count != 0){
            this.count--;
        }
        
    }

    public getNoQuarterState():State{
        return this.noQuarterState;
    }
    public getSoldOutState():State{
        return this.soldOutState;
    }
    public getHasQuarterState():State{
        return this.hasQuarterState;
    }
    public getSoldState():State{
        return this.soldState;
    }
    public getWinnerState():State{
        return this.winnerState;
    }
    public getCount():number{
        return this.count;
    }


}