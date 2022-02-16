import { Component, Vector2 } from "../GameEngine.js";

export default class AsteroidMouseFollow extends Component{
    constructor(view){
        super();
        this.name = "mouseFollow";
        this.view = view;
    }

    trackMousePosition(){
        document.addEventListener("mousemove", e=>{
            console.log(e.clientX - this.view.x);
        });
    }

    update(delta){
        this.trackMousePosition();
    }
}