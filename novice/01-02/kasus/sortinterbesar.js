

//fungsi sortir

function sortingTerbesar(...nilai){
    nilai.sort(function(a, b){return a - b});
    nilai.reverse();
    console.log(nilai)
}


sortingTerbesar(45,234,5,34);
