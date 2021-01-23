class NPC {
    //Constructor has x and y as it's arguments
	constructor(x,y){
		//it's x is x
		this.x = x;

		//it's y is y
		this.y = y;

		//it's width is 70px
		this.w = 70;

		//it's height is 154px
		this.h = 154;

		//it is not leftBehind
		this.isLeftBehind = false;		
	}

	//Defining display function
	display(){
		//Displaying the NPCImage
		image(NPCImage,this.x, this.y, 80, 160);
	}

	//Defining move function
	move (){
		//Incrementing it's y by 4.2
		// you can make this number higher or lower based on skill
		this.y += 6;
	}

	//Defining collide function that has PC1 as it's argument
	collide(PC1){
		//Declaring variables
		var NPC1LeftEdge = this.x + this.w;
		var PC1LeftEdge = PC1.x + PC1.w;
		var NPC1TopEdge = this.y + this.h;
		var PC1TopEdge = PC1.y + PC1.h;

		var PC1RightEdge = PC1.x;
		var NPC1RightEdge = this.x;
		var PC1BottomEdge = PC1.y;
		var NPC1BottomEdge = this.y;

		//Writing the collision algorithm
			//If the NPC1 collides with PC1,
		if(PC1RightEdge < NPC1LeftEdge && PC1LeftEdge > NPC1RightEdge)
			if(PC1BottomEdge < NPC1TopEdge && PC1TopEdge > NPC1BottomEdge) /*Return true*/ return true;		
	}

	//Defining continue function
	continue(){
		//If the NPC crosses the road ,it returns from starting
		return (this.y > 600);
	}

	//Defining isLeftBehindBy function that has PC1 as it's argument
	isLeftBehindBy(PC1){
		//If NPC crosses the PC1 ,return true
		if (PC1.y < this.y)  return true;
	}
}
