import { Amplifier, Tuner, DvdPlayer, CdPlayer, Projector, TheaterLights, PopcornPopper } from "./Devices";

export class HomeTheaterFacade{
    amp:Amplifier;
    tuner:Tuner;
    dvd:DvdPlayer;
    cd:CdPlayer;
    projector:Projector;
    lights:TheaterLights;
    screen:Screen;
    popper:PopcornPopper;


    constructor(
        amp:Amplifier,
        tuner:Tuner,
        dvd:DvdPlayer,
        cd:CdPlayer,
        projector:Projector,
        screen:Screen,
        lights:TheaterLights,
        popper:PopcornPopper
    ){
        this.amp = amp;
        this.dvd = dvd;
        this.cd = cd;
        this.projector = projector;
        this.screen = screen;
        this.lights = lights;
        this.popper = popper;
    }

    public watchMovie(movie:string){
        this.popper.on();
        this.lights.on();
        this.dvd.on();
        this.projector.on();
        this.amp.on();
    }
    public endMovie(){
        this.popper.off();
        this.lights.off();
        this.dvd.off();
        this.projector.off();
        this.amp.off();
    }
}