function inputdata(){
    const n=document.forms['frm1']['pekerjaan'].value;
    const e=document.forms['frm1']['negara'].value;
    const p=document.forms['frm1']['partner'].value;
    const a=document.forms['frm1']['anak'].value;        
                                            
    let hasil = document.getElementById("databel");
    let baris = hasil.insertRow(1);
    let kol1 = baris.insertCell(0);
    let kol2 = baris.insertCell(1);
    let kol3 = baris.insertCell(2);
    let kol4 = baris.insertCell(3);
    
    
    kol1.innerHTML = n;
    kol2.innerHTML = e;
    kol3.innerHTML = p;
    kol4.innerHTML = a;
            
   
   }