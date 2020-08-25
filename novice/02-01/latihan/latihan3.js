console.log("=====================Object Create========================");

const Manusia ={
    isHuman: false,
    printIntro: function () {
        console.log(`Namaku ${this.name} apakah saya manusia? ${this.isHuman}`)
    }
}

const aku = Object.create(Manusia);

aku.name = "Thur";
aku.isHuman = true;
if(aku.isHuman == true){
    aku.isHuman = new String("Yaps Manusia");
    aku.printIntro();
}else{
    aku.isHuman = new String("Bukan, Aku adalah putra Odin");
    aku.printIntro();
}

console.log("============================Bag2=====================");
function Shape(){
	this.x = 0;
  	this.y = 0 ;
  
};

Shape.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
  console.log('Shape moved.');
};


function Triangle(){
	Shape.call(this);
  	this.z = 0;
};

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

Triangle.prototype.jumlah = function(x, y,z){
	this.hasil = 0;
  	hasil = x + y + z;
   console.log("jumlah  "+hasil);
}

let tri = new Triangle();

tri.jumlah(1,1,2);