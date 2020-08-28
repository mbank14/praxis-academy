//contoh simulasi callback untuk asynchronous

function satu(){
	console.log("fungsi pertama");
}

function dua(cb){
    //set delay
  setTimeout(
    function(){
         console.log("fungsi kedua");    
   }, 
   //nilai delay
   100);
}

function tiga(){
	console.log("fungsi ketiga");
}

satu();
dua(tiga);
