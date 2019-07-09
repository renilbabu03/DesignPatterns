import { Command } from "../interface/command";

export class SimpleRemoteControl{
    slot:Command;

    constructor(){}

    public setCommand(slot:Command){
        this.slot = slot
    }

    public buttonWasPressed(){
        this.slot.execute();
    }
}