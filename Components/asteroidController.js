import { Component, Vector2 } from "../GameEngine.js";

export default class AsteroidController extends Component{
    constructor(){
        super();

    }

    onStart(){
        this.dir = this.target.subtract(this.transform.position).normalize();
        this.sprite = this.parent._getComponentByName("primitive");
        this.collider = this.parent._getComponentByName("boxCollider");
    }
    enable(pos, target, size, moveSpeed, sprite){

    }

    disable(){

    }
}