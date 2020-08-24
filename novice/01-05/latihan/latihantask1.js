let fruits = ["Apples", "Pear", "Orange"];
let baris= "\n==================================================";
// push a new value into the "copy"
let shoppingCart = fruits;

//jika dideklarasikan seperti dibawah ini maka hasilnya 3
// let shoppingCart = new Array(fruits);

shoppingCart.push("Banana");

// what's in fruits?
console.log( fruits.length ); // jawabanya 4 karena tidak ada pewarisan 
console.log(baris.repeat(2));
let genreMusic = ['jazz','blues']
console.log(genreMusic);
genreMusic.push('rock-n-roll');
console.log(genreMusic);
genreMusic[1] = 'classic';
console.log(genreMusic);
genreMusic.shift();
genreMusic.unshift('rap','raggae');
console.log(genreMusic);
console.log(baris.repeat(2));
let arr = ["a", "b"];

arr.push(function() {
    console.log( this );
})

arr[2](); // ["a","b",null]
console.log(baris.repeat(2));


// function sumInput() {

//     const readline = require('readline');

//     const value = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout
//     });
//     //untuk menampung nomor
//     let numbers = [];
  
//     while (true) {
  
//       value.question("masukan nomor anda ?", () => {
        
//         if (value === "" || value === null || !isFinite(value)) ;
  
//         numbers.push(+value);
//       });
  
//       // should we cancel?
     
//     }
//     console.log(numbers)
//     let sum = 0;
//     for (let number of numbers) {
//       sum += number;
//     }
//     return sum;
//   }
  
//   console.log( sumInput() );
function sumInput() {

    let numbers = [];
  
    while (true) {
  
      let value = prompt("A number please?", 0);
  
      // should we cancel?
      if (value === "" || value === null || !isFinite(value)) break;
  
      numbers.push(+value);
    }
  
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
  }
  
  // alert( sumInput() );
  console.log("ini harus dijalankan di browser")
  console.log(baris.repeat(2));
  function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;
  
    for (let item of arr) {
      partialSum += item; 
      maxSum = Math.max(maxSum, partialSum); // remember the maximum
      if (partialSum < 0) partialSum = 0; // zero if negative
    }
  
    return maxSum;
  }

