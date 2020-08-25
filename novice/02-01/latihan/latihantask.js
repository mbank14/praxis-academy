function Shape(){
	this.a = 0;
 	this.b = 0;
  	this.c = 0;
  	this.getType = function(){
    	console.log("triangle ");
    };
};


function Triangle(a,b,c){
    Shape.call(this);
    this.a = a;
    this.b = b;
    this.c =c; 
}

Triangle.prototype = Object.create(Shape);
Triangle.prototype.constructor = Triangle;

Triangle.prototype.getParem = function(){
    
    return   this.a + this.b + this.c;
    
}

let t = new Triangle(1, 2, 3);
t.constructor === Triangle;
console.log(t.constructor === Triangle);
console.log(Shape.isPrototypeOf(t));
console.log(t.getParem());
console.log(t.getType());

[1,2,3,4,5,6].sort(function() {
    console.log([Math.floor(Math.random().length*3)]);
  });