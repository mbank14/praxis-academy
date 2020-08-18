let myHeading = document.querySelector("h1");
myHeading.textContent = "halo duna";


//learn variabel and comments
let myVar;
myVar = 'bobo';
myVar = 'dono' ;

console.log(myVar);


//learn data types
const myNumber = 23;
let myArray = ['bobo',1,4,false];

console.log(myNumber,myArray);



//learn operators
console.log(6+9,`hello`+` bobo`, 9/3, 3 === 9/3, 4*4 === 2+4+1+3+3 )


//learn condition 
// let iceCream = 'Vanilla';
// if (iceCream === 'Vanilla') {
//     alert('Fav Gue nih');
// }else{
//     alert('iyywwwhhh');
// }




//learn Function
function perkalian(n1, n2){
    let result = n1*n2;
    return result;
}

perkalian(3,3);



//learn event
// let myOnClick =  document.querySelector('html');
// myOnClick.onclick = function () {
//     alert("aww");
// }




//img click
let myImg =  document.querySelector('img');

myImg.onclick = function () {
    let mySrc = myImg.getAttribute('src');
    if (mySrc === 'images/img1.jpg'){
        myImg.setAttribute('src','images/img2.jpg');
    }else{
        myImg.setAttribute('src','images/img1.jpg');
    }
}



//btn
let myBtn = document.querySelector('button');


function setUsername() {
    let myName = prompt('Masukan nama anda :');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'godzilla is cool, ' + myName;

    if(!localStorage.getItem('name')) {
        setUserName();
      } else {
        let storedName = localStorage.getItem('name');
        myHeading.textContent = 'Mozilla is cool, ' + storedName;
      }
}
function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
  }
myBtn.onclick = function() {
    setUserName();
  }
  