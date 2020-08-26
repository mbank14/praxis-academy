// tamagochi
class Cat{
    constructor(tiredness, hunger, lonliness, happiness){
        this.tiredness =  tiredness;
        this.hunger = hunger;
        this.lonliness = lonliness;
        this.happiness = happiness;
      
      return `malas: ${this.tiredness}, lapar: ${this.hunger}, kesepian: ${this.lonliness}, senang: ${this.happiness}`
    }
  feed(value){
    this.hunger += value;
    this.tiredness = this.tiredness + Math.floor( value * 2  / 5) ;
  	return `menambah nilai ${this.hunger} dan nilai kelelahan ${this.tiredness}`;
  }
  
  pet(value){
  	this.happiness += value/150;
    this.lonliness += value/100;
  }
  
    sleep (value){
  	this.tiredness -= value/150;
    this.lonliness -= value/100;
  }
}

let koko =new Cat(50, 50, 50, 50);
console.log(koko.feed(50))
console.log(koko.feed(10))
console.log(koko)


