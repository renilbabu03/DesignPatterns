import { SimpleRemoteControl } from "./class/RemoteControl";
import { Light, Garage } from "./class/Device";
import { LightOnCommand, GarageDoorOpenCommand } from "./class/Commands";

var remote:SimpleRemoteControl = new SimpleRemoteControl();
var light:Light = new Light();
var lighton:LightOnCommand = new LightOnCommand(light);

remote.setCommand(lighton);
remote.buttonWasPressed();

var garage:Garage = new Garage();
var garageopen:GarageDoorOpenCommand = new GarageDoorOpenCommand(garage);
remote.setCommand(garageopen);
remote.buttonWasPressed();