import * as GE from "../GameEngine.js";
import AsteroidMove from "../Components/asteroidMove.js";

export default class AsteroidsPrefab extends GE.Entity{
    constructor(x,y,width,height){
        super(x,y,width,height);

    }

    onCreate(){
        this.name = "Asteroid";
        console.log("onCreate")
        this._addComponent(new GE.Primitive(new GE.Vector2(50, 20), 'green', false));
        this._addComponent(new AsteroidMove());
        this._addComponent(new GE.BoxCollider(this.engine._colliders));
    }
}