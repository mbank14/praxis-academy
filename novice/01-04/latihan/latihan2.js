var myRe = new RegExp('d(b+)d', 'g');
var myArray = myRe.exec('cdbbdbsbz');

console.log(myArray);


console.log('=========================================================');

var re = new RegExp('\\w+\\s', 'g');
var str = 'fee fi fo fum';
var myArray = str.match(re);
var xArray; while(xArray = re.exec(str)) console.log(xArray);
console.log(myArray);