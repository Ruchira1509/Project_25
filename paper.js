class Paper{
    constructor(x,y,r){
        var options = {
            'restitution':0.8,
            'friction':0,
            'density':0.8
    
        }
    
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r, options)
        this.image=loadImage("paper.png");
		World.add(world, this.body);

    }
    display(){
        var pos=this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
		image(this.image, 0, 0, this.r);
        //ellipse(0,0,this.r, this.r);
        pop();
			
    }
    };

    