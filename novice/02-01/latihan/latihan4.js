console.log("=====================Object Assign=================")

const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };

const obj = Object.assign(o1, o2, o3);
console.log(obj); 
console.log(o1); 
//jika menggunakan tipe data primitive seperti string,number dll
//maka akan terbungkus, bungkuss gannss

const v1 = 'kesemek';
const v2 = {animal: new String('Lion')};
const v3 = 10;
const v4 = 'vanilla';

const obj = Object.assign({}, v2, null, v1, undefined, v3, v4); 

console.log(obj); 