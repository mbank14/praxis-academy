//contoh call back sebagai injeksi atau funct
function calculate(param1,param2,callback){
    //default operation
    result = param1 + param2
    
    // apakah dia callback funct?
    if (typeof callback == 'function'){
     result= callback(param1,param2)
    }
    
    return result
  }
  
  
  a=calculate(2000,4000, function(x,y){return "$ " + (x + y) }) 
  b=calculate(7000,2000, function(x,y){return "Rp " + (x * y) })
  c=calculate(7000,2000, ) 
  console.log(a) // $ 6000
  console.log(b) // Rp 14000
  console.log(c) // 9000 karena tidak memiliki parameter callback