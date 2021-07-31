class paperr{
    constructor(x,y)
	{
		var options ={
			isStatic : false,
			restitution : 0.3,
			friction : 0,
			density : 1.2
		}
		this.x=x;
		this.y=y;
		this.Width=50;
		this.Height=50;
		this.body=Bodies.rectangle(x, y, 50,50, options);
		this.image=loadImage("paper.png")

		World.add(world, this.body)
	}
	display()
	{
		var paperrPos=this.body.position;
		push()
		translate(paperrPos.x, paperrPos.y);
		imageMode(CENTER)
		image(this.image,0,0,this.Width,this.Height)
		pop()
	}
}