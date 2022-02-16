/**
 * --square screen
 * find way to track mouse for shooting
 * no player movement
 * moving asteroids
 * firing bullets on mouse click
 * prefabs for player/astroids/bullets
 * --spawning asteroids
 * object pooling
 * --canvas check
 * 
 */

import AsteroidMove from "../Components/asteroidMove.js";
import AsteroidPlayerController from "../Components/asteroidPlayerController.js";
import AsteroidSpawnerController from "../Components/asteroidSpawnerController.js";
import AsteroidMouseFollow from "../Components/asteroidMouseFollow.js";
import * as GE from "../GameEngine.js";

class Game extends GE.GameEngine{
    constructor(canvas){
        super(canvas)

        
        // set up canvas
        const view = new GE.Vector2(600,600);
        const screenCenter = new GE.Vector2(window.innerWidth/2, window.innerHeight/2);
        this._camera = new GE.Camera(this, GE.Vector2.ZERO);
		this._addEntity(this._camera);
        this._camera.updateBaseResolution(view);
        this._camera.updateViewPort(view);
        this._camera.transform.position = GE.Vector2.ZERO;
        this._canvas.canvas.style.backgroundColor = "black";
        this._canvas.canvas.width = view.x;
        this._canvas.canvas.height = view.y;
        this._canvas.canvas.style.position = 'absolute';
        this._canvas.canvas.style.left = screenCenter.x - (view.x/2) + 'px';
        this._canvas.canvas.style.top = screenCenter.y - (view.y/2) + 'px';

        //add a player
        const player = new GE.Entity(this, GE.Vector2.ZERO);
        this._addEntity(player);
        player._addComponent(new GE.Primitive(new GE.Vector2(32,32), "white", false));
        player.name = "Player";

        //Test Mouse Tracking
        // document.addEventListener("mousemove", e=>{
        //     console.log(e);
        // });

        const cursor = new GE.Entity(this, GE.Vector2.ZERO);
        this._addEntity(cursor);
        cursor._addComponent(new GE.Primitive(new GE.Vector2(10,10), "white", false));
        cursor.name = "Cursor";
        cursor._addComponent(new AsteroidMouseFollow(screenCenter.subtract(view.scalar(0.5))));

       
        this._gameLoop()
    }
}
//////
const canvas = document.querySelector('canvas');
const game = new Game(canvas);