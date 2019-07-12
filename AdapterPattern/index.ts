import { MallardDuck } from "./class/MallardDuck";
import { WildTurkey } from "./class/WildTurkey";
import { Duck } from "./interface/Duck";
import { TurkeyAdapter, DuckToTurkeyAdaptor } from "./class/Adapter";

var duck:MallardDuck = new MallardDuck();

var turkey:WildTurkey = new WildTurkey();

var turkeyAdapter:Duck = new TurkeyAdapter(turkey);

turkey.gobble();
turkey.fly();


turkeyAdapter.quack();
turkeyAdapter.fly()

var ducktoTurkey:DuckToTurkeyAdaptor = new DuckToTurkeyAdaptor(duck)
ducktoTurkey.fly();
ducktoTurkey.gobble();