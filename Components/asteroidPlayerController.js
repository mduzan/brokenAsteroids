import { Component, Vector2 } from "../GameEngine.js";

export default class AsteroidPlayerController extends Component{
    constructor(){
        super();
        this.sprite = null;

    }

    onStart(){
        this.sprite = this.parent._getComponentByName("primitive");
    }

    onCollision(col){
        if (col.name == "Bullet"){return}
        this.sprite.color = "red";
        this.sprite.fill = true;
    }
}