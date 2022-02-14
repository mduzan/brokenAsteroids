import { Component, Vector2 } from "../GameEngine.js";

export default class AsteroidMove extends Component{
    constructor(){
        super();
        this.name = "asteroidMove";
        this.target = new Vector2(23, 17);
        this.dir = null;
        this.sprite = null;
        this.moveSpeed = 10;
        this.collider = null;
    }

    onStart(){
        this.dir = this.target.subtract(this.transform.position).normalize();
        this.sprite = this.parent._getComponentByName("primitive");
        this.collider = this.parent._getComponentByName("boxCollider");
    }

    update(delta){
        const moveDir = this.dir.scalar(this.moveSpeed * delta);
        this.transform.position = this.transform.position.add(moveDir);


    }
    disable(){
        this.sprite.enabled = false;
        this.parent.transform.position = new Vector2(1000, 1000);
    }

    onCollision(col){
        if (col.name == "Player"){
            this.disable();
        }
    }
}