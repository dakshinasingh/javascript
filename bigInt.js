let a = 47896756845553n;
let b = BigInt(568586235426778899);

let num = BigInt(Number.MAX_SAFE_INTEGER);
num = num + 2n;
console.log(num);

//ES2020
//>>>

let result = num/7n;
console.log(Number.MAX_SAFE_INTEGER/7);
console.log(result);