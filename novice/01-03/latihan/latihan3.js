function f() {
    let value = Math.random();
  
    function g() {
      debugger; // in console: type alert(value); No such variable!
    }
  
    return g;
  }
  
  let g = f();
  g();

  
console.log("====================================================")
function sayHiBye(firstName, lastName) {

    // helper nested function to use below
    function getFullName() {
      return firstName + " " + lastName;
    }
  
    alert( "Hello, " + getFullName() );
    alert( "Bye, " + getFullName() );
  
  }


sayHiBye();

