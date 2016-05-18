
// Creates the standard setup, including setting the gameport and creating the renderer
var gameport = document.getElementById("gameport"); 
var renderer = PIXI.autoDetectRenderer(1800, 600, {backgroundColor: 0x3344ee});
gameport.appendChild(renderer.view);

var stage = new PIXI.Container();

// Creates the winning screen and hides it
var texture2 = PIXI.Texture.fromImage("youwin.png");
var winscreen = new PIXI.Sprite(texture2);
stage.addChild(winscreen);
winscreen.renderable = false; 

winscreen.position.x = 900;
winscreen.position.y = 300;
winscreen.anchor.x = .5;
winscreen.anchor.y = .5;

// Imports the texture and sets it to all of the targets
var texture = PIXI.Texture.fromImage("target.png");
var t1 = new PIXI.Sprite(texture);
var t2 = new PIXI.Sprite(texture);
var t3 = new PIXI.Sprite(texture);
var t4 = new PIXI.Sprite(texture);

var numdown = 0; // A counter for how many targets have been clicked


//var target = new PIXI.Sprite(texture);
//Adds a container for all the targets
var targets = new PIXI.Container();
stage.addChild(targets);


//Creates each individual target
// Adds the first target
targets.addChild(t1);
t1.position.x = 200;
t1.position.y = 250;
t1.anchor.x = 0.8;
t1.anchor.y = 0.7;
t1.interactive = true;

t1.on('mousedown', clear_sprite.bind(null, t1));


// Adds the second target
targets.addChild(t2);
t2.position.x = 1050;
t2.position.y = 300;
t2.anchor.x = 0.5;
t2.anchor.y = 0.5;
t2.interactive = true;

t2.on('mousedown', clear_sprite.bind(null, t2));


// Adds the third target
targets.addChild(t3);
t3.position.x = 500;
t3.position.y = 450;
t3.anchor.x = 0.9;
t3.anchor.y = 0.9;
t3.interactive = true;

t3.on('mousedown', clear_sprite.bind(null, t3));









// This function changes any sprite to no longer be renderable
function clear_sprite(sp_name){

	//sp_name.renderable = false;
	targets.removeChild(sp_name)
	numdown += 1; // Increments targets succesfully clicked
}



var togglet1x = 1; // Saves a state change for whether targets are moving right or left, up or down
var togglet1y = 1;
var togglet2x = 1;
var togglet2y = 1;
var togglet3x = 1;
var togglet3y = 1;


function animate() {
	requestAnimationFrame(animate);

	// Creates the movement pattern for the first target
	// t1 x movement
	if(togglet1x == 1){
		
		t1.position.x += 10;

		if(t1.position.x == 1700){
			togglet1x = 0;
		}
	}

	else{
		t1.position.x -= 100;
		if(t1.position.x == 100){
			togglet1x = 1;
		}
	}

	// t1 y movement 
	if(togglet1y == 1){
		
		t1.position.y += 20;

		if(t1.position.y == 550){
			togglet1y = 0;
		}
	}

	else{
		t1.position.y -= 10;
		if(t1.position.y == 50){
			togglet1y = 1;
		}
	}

	t1.rotation += .05;



	// Creates the movement patterns for the second target
	// Adds x movement
	if(togglet2x == 1){
		
		t2.position.x += 100;

		if(t2.position.x == 1750){
			togglet2x = 0;
		}
	}

	else{
		t2.position.x -= 10;
		if(t2.position.x == 50){
			togglet2x = 1;
		}
	}

	// t2 y movement 

	if(togglet2y == 1){
		
		t2.position.y += 25;

		if(t2.position.y == 550){
			togglet2y = 0;
		}
	}

	else{
		t2.position.y -= 25;
		if(t2.position.y == 50){
			togglet2y = 1;
		}
	}
	
	t2.rotation += 1.7

	// Creates the movement patterns for the third target
	// Adds x movement
	if(togglet3x == 1){
		
		t3.position.x += 10;

		if(t3.position.x == 1700){
			togglet3x = 0;
		}
	}

	else{
		t3.position.x -= 20;
		if(t3.position.x == 100){
			togglet3x = 1;
		}
	}

	// t3 y movement 

	if(togglet3y == 1){
		
		t3.position.y += 25;

		if(t3.position.y == 500){
			togglet3y = 0;
		}
	}

	else{
		t3.position.y -= 10;
		if(t3.position.y == 100){
			togglet3y = 1;
		}
	}

	t3.rotation += .14;





	// Adds the victory condition, and causes the victory text to display
	if(numdown == 3){
		winscreen.renderable = true;
	}

	renderer.render(stage);

}





animate();
