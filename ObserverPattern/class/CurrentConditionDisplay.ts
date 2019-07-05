import { Observer } from "../interface/Observer";
import { DisplayElement } from "../interface/Display";
import { Subject } from "../interface/Subect";

export class CurrentConditionsDisplay implements Observer, DisplayElement{
    private temperature:number;
    private humidity:number;
    private weatherData:Subject;

    constructor(weatherData:Subject){
        this.weatherData = weatherData;
        this.weatherData.registerObserver(this)
    }

    public update(temperature:number,humidity:number,pressure:number){
        this.temperature = temperature;
        this.humidity = humidity;
        this.display()
    }

    public display(){
        console.log("current conditions "+ this.temperature + "F degrees and Humidity:" + this.humidity)
    }
}