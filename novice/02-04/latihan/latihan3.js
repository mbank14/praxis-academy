//CONTOH CALLBACK SEDERHANA
//CALLBACK BISA DISEBUT JUGA HIGH-ORDER-FUNC

function main(param1,param2,callBack){ 
    console.log(param1, param2) 
    callBack()  
  }
  
  function myCallback(){ 
    console.log ('hello callback')
  }
  
  main(1,2,myCallback)