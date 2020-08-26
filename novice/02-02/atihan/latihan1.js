function Vehicle(make, model, color, year) {
    this.make = make,
    this.model = model,
    this.color = color,
    this.year = year,
    this.getName = function () {
        return this.make + " " + this.model + " Tahun " + this.year;
    }
}

let car = new Vehicle("Toyota", "Corolla", "Black");
let car2 = new Vehicle("Honda", "Civic", "White");

car2.year = "2012"
console.log(car.getName());