class PC {
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
	}

	//Defining display function
	display(){
		//Displaying the PCImage
		image(PCImage,this.x, this.y, 80, 160);
	}

	//Defining right function
	right(){
		//Incrementing it's x by 5
		this.x += 5;
	}

	//Defining left function
	left(){
		//Decrementing it's x by 5
		this.x -= 5;
	}
}

