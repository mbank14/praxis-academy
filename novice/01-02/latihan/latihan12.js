const arr = [3, 5, 7];
arr.foo = 'adadaa';

for (let i in arr) {
   console.log(i); 
}

for (let i of arr) {
   console.log(i); 
}