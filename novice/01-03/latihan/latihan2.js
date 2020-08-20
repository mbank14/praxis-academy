(function() {
    console.log(myvar); // undefined
    var myvar = 'local value';
  })();



  console.log("=======================================================");
  foo(); 

function foo() {
  console.log('bar');
}