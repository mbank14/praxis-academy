class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
  // Your code here.
  try{
    console.log("aw aw ", Number(primitiveMultiply(a,b)));
  }catch(e){
	console.log("ada yang error " + e);
}
}

console.log(reliableMultiply(8, 8));
// → 64