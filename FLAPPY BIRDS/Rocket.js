class Rocket{
    constructor(x,y){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x,y,40,100,options);
        this.width = 40;
        this.height = 100;
        this.image = loadImage("./images/Rocket.png");
        //World.add(world,this.body);
    } 
   
    
    display(){
        var pos = this.body.position;
        
        imageMode(CENTER);
        image(this.image,200,200,this.width,this.height);
       
        
        
    }

    
};