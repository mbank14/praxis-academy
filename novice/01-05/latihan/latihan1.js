let baris = "=======================";
console.log(`${baris}ARRAY${baris}`);
let listNumber = [2,3,1,4,1,4,7,5];
console.log(listNumber[0]);

// array.pop digunakan untuk menghilangkan value index yang berada diakhir
listNumber.pop();
console.log(listNumber);
console.log(`${baris}POPandShif${baris}`);


//array.shift digunakan untuk menghilangkan nilai pada index pertama;
listNumber.shift();
console.log(listNumber);

//array.unshift digunakan untuk menambah data array diawal index;

listNumber.unshift(1,34);
console.log(listNumber);

console.log(`${baris}${baris}\n`);
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  //nilai pertama menunjukan index matriks
  //nilai kedua menunjukan index didalam nested matriks
  console.log( matrix[0][2] );

  console.log(baris.repeat(3));
  let arr = [1, 2, 3];

console.log( arr ); // 1,2,3
console.log( String(arr) === '1,2,3' ); // true