let baris = "\n===================================================";

let range = {
    from: 1,
    to: 5,
  
    [Symbol.iterator]() {
      this.current = this.from;
      return this;
    },
  
    next() {
      if (this.current <= this.to) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
  };
  
  for (let num of range) {
    console.log(num); // 1, then 2, 3, 4, 5
  }

console.log(baris.repeat(2));

//contoh penggunaan iterator 
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function evenizingIterator() {
  let idx = 0;

  return {
    // menggunakan arrow function agar `this` terikat
    // ke konteks array yang disematkan
    next: () => {
      if (idx < this.length) {
        const value = this[idx] % 2 === 0 ? this[idx] : this[idx] * 2;
        idx = idx + 1;
        return { value: value, done: false };
      } else {
        return { done: true };
      }
    },
  };
}

arr[Symbol.iterator] = evenizingIterator;
for (v of arr) console.log(v);

console.log(baris.repeat(2));
let str = "Hello";

// does the same as
// for (let char of str) alert(char);

let iterator = str[Symbol.iterator]();

while (true) {
  let result = iterator.next();
  if (result.done) break;
  console.log(result.value); // outputs characters one by one
}


console.log(baris.repeat(2));
let str = '𝒳😂';

let chars = []; // Array.from internally does the same loop
for (let char of str) {
  chars.push(char);
}

console.log(chars);