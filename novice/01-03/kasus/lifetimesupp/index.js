function hitungAja(){
    const umur = document.getElementById("inputUmur").value;
    const numperday = document.getElementById("inputNumperday").value;
    const result = document.getElementById("hasil");
    intUmur = parseInt(result, umur);
    intNumperday = parseInt(numperday)
    let maksUmur = 100;
    let totalNeeded = (numperday * 365)* (maksUmur - umur);    
    result.innerHTML = totalNeeded;
    
}