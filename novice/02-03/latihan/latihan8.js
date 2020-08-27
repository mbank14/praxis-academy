const doubleMap = numbers => {
    const doubled = [];
    for (let i = 0; i < numbers.length; i++) {
      doubled.push(numbers[i] * 2);
    }
    return doubled;
  };

const doubleMap2 = numbers => numbers.map(n => n * 2);

console.log(doubleMap2([2, 3, 4]));
  
  console.log(doubleMap([2, 3, 4]));