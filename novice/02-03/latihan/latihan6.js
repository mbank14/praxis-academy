let counter = 1;
let counter2 = 1;

function increaseCounter(value) {
  counter = value + 1;
}
const increaseCounter2 = (value) => value + 1;


increaseCounter(counter);
console.log(counter); // 2
increaseCounter2(counter2);
console.log(counter2); 