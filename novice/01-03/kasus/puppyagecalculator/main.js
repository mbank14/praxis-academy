function btnUmurAnjing(){
    const umur =  document.getElementById("inputUmur").value;
    const haisl = document.getElementById("hasil");
    const coba = parseInt(umur,haisl);
    
    const umurAnjing =  7 * coba;
    console.log(typeof(umurAnjing) + " umur anjing");
    console.log(typeof(coba) + "umur hasil");
    console.log(haisl)
    haisl.innerHTML = umurAnjing;
    
}

