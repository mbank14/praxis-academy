function cariMinus(...arr){

    let hasil = [];

    for (i of arr) {
        if(i<0){
            hasil.push(i);
            // console.log(hasil);
        }
       
    }

    if(hasil.length % 2 == 0){
        console.log("positif");
    }else{
        console.log("negatif");
    }
    
}


cariMinus(2,-3,-7,-3)


