import { Component, Entity, Vector2 } from "../GameEngine.js";
import AsteroidsPrefab from "../Prefabs/asteroidsPrefab.js";


export default class AsteroidSpawnerController extends Component{
    constructor(){
        super();
        this.asteroids = [];
        this.sprite = null;
        this.collider = null;
        this.timer = 0;
    }

    onStart(){
        // this.sprite = this.parent._getComponentByName("primitive");//
        // this.collider = this.parent._getComponentByName('boxCollider');
        this.createAsteroids();
        //this.getAsteroids();
    }

    update(delta){
        this.timer += delta;
        if (this.timer >= 100){
            this.getAsteroids();
        }
    }

    createAsteroids(){
        for (let i = 0; i< 100; i++){
            const a = new AsteroidsPrefab(this.transform.position.x, this.transform.position.y, 10, 10);
            this.parent.engine._addEntity(a);
            this.asteroids.push(a);
        }
    }
//////////////////////////////////
    getAsteroids(){
        let currentAsteroid = this.asteroids.pop();
        console.log(currentAsteroid);
        const sprite = currentAsteroid._getComponentByName("primitive");
        let pos = currentAsteroid.transform.position;
        pos = new Vector2(100, 100);
        console.log(sprite);
        sprite.enabled = true;
    }
}