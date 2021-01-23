//Declaring global variables
var road;
var PC1;
var NPC1 =[];

var score = 0;
var userLives = 5;

//Declaring image variables
var NPCImage,PCImage,heartImg,roadImg

//Declaring sound variables
var ouch,gameOver,win;

function preload(){
	//Loading images
	NPCImage = loadImage("orange.png");
	PCImage = loadImage("red.png");
	heartImg = loadImage("heart.png");
	roadImg = loadImage("road4.png")
}

function setup(){
	//Creating canvas of width-800 and height-670
	createCanvas(800, 670);

	//Creating road sprite
	road = createSprite(400,300,600,600);
	road.addImage("road",roadImg);
	road.scale = 4;
	road.velocityY = 6;
	road.y = road.height/2;

	//Loading sounds
	ouch = loadSound("ouch1.mp3");
	gameOver = loadSound("gameOver.mp3");
	win = loadSound("win1.mp3");

	//Creating a PC1 object from PC class 
	PC1 = new PC(260,500);
}

function draw(){
	//Giving backround color
	background(0,0,0);

	//Resetting the road
	if(road.y>450){
		road.y = road.height/2;
	}

	//Drawing the sprites
	drawSprites();

	//Displaying score
	textSize(33);
	fill(rgb(64, 250, 18));
	text("Score: " + score, 645, 60);

	//Calling the display function of PC class
	PC1.display();

	//Moving the car by arrows (Left and Right)
	if (keyIsDown(RIGHT_ARROW)){
		PC1.right();
	}

	if (keyIsDown(LEFT_ARROW)){
		PC1.left();
	}

	//Spawing NPCs
	if (World.frameCount % 200 === 0)	NPC1.push(new NPC(random(0, width-80),-20));

	//For loop
	for (var i = 0;i < NPC1.length ;i++){
		//Calling the display and move function of NPC class
		NPC1[i].display();
		NPC1[i].move();

		//Increasing score when NPC1 crosses the road
		if (NPC1[i].isLeftBehindBy(PC1) && NPC1[i].isLeftBehind === false){
			score += 5;
			NPC1[i].isLeftBehind = true;
		}
		
		//If NPC1 collides with PC1,
		if (NPC1[i].collide(PC1)){
			//Playing ouch sound
			ouch.play();

			//Popping the element of NPC1 array
			NPC1.pop();

			//Decreasing score
			score+= -5;

			//Decreasing userLives
			userLives+=-1;
		}

		//If NPC1 continues after crossing the road, pop the element of NPC1 array
		else if (NPC1[i].continue()) NPC1.pop();
	}
	
	//Displaying 5 userLives
	for (var i = 0; i < userLives; i++)	image(heartImg, 10 + (i * 60),620,50,50);

	//If score crosses 50,
	if (score > 50){
		//Stop the looping
		noLoop();

		//Displaying greetings
		textSize(33);
		fill("violet");
		text("Congrats, you did it!", 260,300);

		//Playing the win sound
		win.play();
	}

	//If userLives are over,
	if (userLives === 0){
		//Stop the looping
		noLoop();

		//Displaying game over message
		textSize(50);
		fill("red");
		text('GAME OVER!', 260,300);

		//Playing the gameOver sound
		gameOver.play();
	}
}
