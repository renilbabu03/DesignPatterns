import { HomeTheaterFacade } from "./class/HomeTheaterFacade";
import { Amplifier, Tuner, DvdPlayer, CdPlayer, Projector, TheaterLights, PopcornPopper } from "./class/Devices";

var amp = new Amplifier();
var tuner = new Tuner();
var dvd = new DvdPlayer();
var cd = new CdPlayer();
var projector = new Projector();
var screen = new Screen();
var lights = new TheaterLights();
var popper = new PopcornPopper();

var HomeTeater:HomeTheaterFacade = new HomeTheaterFacade(amp,tuner,dvd,cd, projector, screen,lights,popper)
HomeTeater.watchMovie("Avengers")