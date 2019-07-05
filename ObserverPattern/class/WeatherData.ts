import { Subject } from "../interface/Subect";
import { Observer } from "../interface/Observer";

export class WeatherData implements Subject{
    private observers:Observer[] = [];
    private temperature:number;
    private humidity:number;
    private pressure:number;

    constructor(){

    }

    public registerObserver(o:Observer){
        this.observers.push(o);
    }

    public removeObserver(o:Observer){
        let i = this.observers.indexOf(o);
        if(i >= 0){
            this.observers.slice(i,1)
        }
    }

    public notifyObserver(){
        for(var observer of this.observers){
            observer.update(this.temperature,this.humidity,this.pressure);
        }
    }

    public measurementChanged(){
        this.notifyObserver();
    }

    public setMeasurments(temp:number, humidity:number, pressure:number){
        this.temperature = temp;
        this.humidity = humidity;
        this.pressure = pressure;
        this.measurementChanged();
    }
}