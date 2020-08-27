let PI = 3.14;
let koko = 'koookook'
const calculateArea = (radius) => radius * radius * PI;
const calculateArea2 = (radius, pi) => radius * radius * pi;

const charactersCounter = (text) => `Character count: ${text.length}`;

function analyzeFile(filename) {
  let fileContent =  open(filename);
  return charactersCounter(fileContent);
}

console.log(charactersCounter('ada apa cinta'));
console.log(analyzeFile(koko.txt));
console.log(calculateArea(10));
console.log(calculateArea2(10, PI));