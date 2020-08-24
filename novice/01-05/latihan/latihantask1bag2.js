let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
  function sumSalaries(salaries) {
  
    let sum = 0;
    for (let salary of Object.values(salaries)) {
      sum += salary;
    }
  
    console.log( sum); 
  }
  
  sumSalaries(salaries);
  console.log("=====================================");
  function count(obj) {
    return Object.keys(obj).length;
  }