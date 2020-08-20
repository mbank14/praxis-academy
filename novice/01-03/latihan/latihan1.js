function myFunc(namaObj){
    namaObj.brand = "toyota";
}

let myCar = {
    brand: "Honda",
    model: "Acord",
    year: 1998
}

console.log(myCar.brand);

myFunc(myCar);

console.log(myCar.brand);

console.log("========================================================");

let p = 5;
function myFunc1() {
    let p = 9;

    function decl() {
        console.log(p);
    }
    let expr = function() {
        console.log(p);
    };
    let cons = new Function('\t console.log(p);');

    decl();
    expr();
    cons();
}
myFunc1();