const foo = function(a,b,...numbers){
    console.log(a);
    console.log(numbers[2]);
    // console.log(numbers instanceof Array);

    // for(let i = 0; i < numbers.length; i++){
    //     console.log(numbers[i]);
    // }

    // numbers.forEach(e => console.log(e));

    // console.log(numbers.pop())
    // numbers.find(e => e==19);
}

foo(1,34,5,6,7);