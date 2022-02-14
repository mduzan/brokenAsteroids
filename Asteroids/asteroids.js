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
import * as GE from "../GameEngine.js";

class Game extends GE.GameEngine{
    constructor(canvas){
        super(canvas)

        
        // set up canvas
        const view = new GE.Vector2(600,600);
        const screenCenter = new GE.Vector2(window.innerWidth/2, window.innerHeight/2);
        this._camera.updateBaseResolution(view);
        this._camera.updateViewPort(view);
        this._camera.transform.position = GE.Vector2.ZERO;
        this._canvas.canvas.style.backgroundColor = "black";
        this._canvas.canvas.width = view.x;
        this._canvas.canvas.height = view.y;
        this._canvas.canvas.style.position = 'absolute';
        this._canvas.canvas.style.left = screenCenter.x - (view.x/2) + 'px';
        this._canvas.canvas.style.top = screenCenter.y - (view.y/2) + 'px';

        //add player
        const player = new GE.Entity(0, 0, 32, 32);
        this._addEntity(player);
        player.name = "Player";
        player._addComponent(new GE.Primitive(new GE.Vector2(32, 32), 'white', false));
        player._addComponent(new GE.BoxCollider(this._colliders));
        player._addComponent(new AsteroidPlayerController());

        //single asteroid
        const asteroid = new GE.Entity(200, 150, 100, 100);
        this._addEntity(asteroid);
        asteroid.name = "Asteroid";
        asteroid._addComponent(new GE.Primitive(new GE.Vector2(100, 100), 'green', false));
        asteroid._addComponent(new AsteroidMove());
        asteroid._addComponent(new GE.BoxCollider(this._colliders));

        //spawns android at random position, size(32 to 100), dir
        const astroidSpawner = new GE.Entity(1000,1000, 0, 0)
        this._addEntity(astroidSpawner);
        astroidSpawner._addComponent(new AsteroidSpawnerController());

        this._gameLoop()
    }
}
//////
const canvas = document.querySelector('canvas');
const game = new Game(canvas);