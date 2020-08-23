const lolo = new String('foo');
console.log(lolo);
console.log(typeof(lolo));

console.log("=======================================================");

const pertama = '2 + 2';
const kedua = new String('2 + 2');
console.log(eval(pertama) + '    ' +eval(kedua))


console.log("==========================================================");


const hello = 'hello , world';
const panjangHello  = hello.length;
console.log(panjangHello + "\\ " + hello[0])

console.log(`string text line 1
string text line 2`);


console.log("=============================================================")
const five = 5;
const ten = 10;
console.log(`Fifteen is ${five + ten} and not ${ 2 * five + ten} `);

const msPerDay = 24 * 60 * 60 * 1000;
 
// July 17, 2014 00:00:00 UTC.
const july172014 = new Date(msPerDay * (44 * 365 + 11 + 197));

const options = { year: '2-digit', month: '2-digit', day: '2-digit',
                hour: '2-digit', minute: '2-digit', timeZoneName: 'short' };
const americanDateTime = new Intl.DateTimeFormat('en-US', options).format;
 
console.log(americanDateTime(july172014));

console.log("============================NUMBER FORMATING============================")
const gasPrice = new Intl.NumberFormat('en-US',
                        { style: 'currency', currency: 'IDN',
                          minimumFractionDigits: 3 });
 
console.log(gasPrice.format(5.259)); // $5.259

const hanDecimalRMBInChina = new Intl.NumberFormat('zh-CN-u-nu-hanidec',
                        { style: 'currency', currency: 'CNY' });
 
console.log(hanDecimalRMBInChina.format(1314.25));


console.log("===============================================================");

const germanDictionary = new Intl.Collator('de-DE-u-co-dict');
 
// as if sorting ["Hochberg", "Honigswald", "Holzman"]:
console.log(names.sort(germanDictionary.compare).join(', '));
// logs "Hochberg, Holzman, Hönigswald"