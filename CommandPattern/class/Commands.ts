import { Command } from "../interface/command";
import { Light, Garage } from "./Device";

export class LightOnCommand implements Command{
    light:Light
    constructor(light:Light){
        this.light = light;
    }

    public execute():void{
        this.light.on();
    }
}

export  class GarageDoorOpenCommand implements Command{
    garage:Garage;

    constructor(garage:Garage){
        this.garage = garage;
    }

    public execute():void{
        this.garage.up()
    }
}