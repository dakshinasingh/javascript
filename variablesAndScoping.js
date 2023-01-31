'use strict'
var a=16;
var b;
b=1;
console.log(a+b);
//we don't use "var" beacuse var is not a block scope variable;
//"let" is a block scope variable which cannot be accessed outside the block;
//e.g.-
//for var
for(var i=0;i<5;i++){
    console.log(i);
}
console.log(i); //i can be accessed here also
console.log("let");
//for let
for(let j=0;j<5;j++){
    console.log(j);
}
// console.log(j); //j cannot be accessed here

//const--cannot be changed
{
    const n="jack";
    console.log(n);
}
//const object can't be changed but value of objects can be changed
{
    const s=["you","always"];
    s.pop("always");
    s.push("never");
    console.log(s);
}

//globalThis
let h=40;
function demo(){
    let h=20;
    console.log(h);
    console.log(globalThis.h);
}
demo();
console.log(h);

