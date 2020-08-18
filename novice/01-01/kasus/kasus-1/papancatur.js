for (let k = 0; k < 8; k++) {
    let hasil = '';
    for (let l = 0; l < 8; l++) {
        if ( k % 2 === 0) {
            if (l % 2 === 0) {
                hasil = hasil + '# ';
            }else{
                hasil = hasil + ' ';
            }
        }else{
            if (l % 2 === 1) {
                hasil = hasil+  '# ';
            }else{
                hasil = hasil + ' ';
            }
        }
        // console.log(hasil)
    }
    console.log(hasil)    
}