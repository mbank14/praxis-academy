let a = 9;
let b = 5;
let c = 6;

if (a > b && a > c) {
    console.log(a)
} else if(b > a && b > c){
    console.log(b);
}else{
    console.log(c);
}
console.log('=========================================================')
//=======================================++-


//fungsi nilai terbesar 


function NilaiTerbesar(...nilai){
    nilai.sort(function(a, b){return a - b});
    nilai.reverse();
    console.log(nilai[0]);
}


NilaiTerbesar(45,234,5,34);
