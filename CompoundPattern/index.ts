import { DuckSimulator } from "./class/DuckSimulator";
import { AbstractDuckFactory, CountingDuckFactory } from "./class/DuckFactory";

var duckFactory:AbstractDuckFactory = new CountingDuckFactory();
var simulator:DuckSimulator = new DuckSimulator(duckFactory);
simulator.simulate();