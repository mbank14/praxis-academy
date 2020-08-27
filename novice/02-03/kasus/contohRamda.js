let hasil = document.getElementById("consoleLog");

const {identity} = R;
R.map(identity, [1, 2, 3]);

console.log(R);
hasil.innerHTML = `${R}`;