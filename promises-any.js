const p1 = new Promise((resolve, reject)=>{
    const part = 8;
    setTimeout(() => resolve(part), 500)
})

const p2 = new Promise((resolve, reject)=>{
    const movie = 'Harry Potter';
    setTimeout(() => resolve(movie), 200)
})

const p3 = new Promise((resolve, reject)=>{
    const progress = 'Under Creation';
    setTimeout(() => resolve(progress), 1000)
})

// Promise.any([p2, p1, p3]).then(p => console.log(p));
// Promise.race([p2, p1, p3]).then(p => console.log(p));
Promise.allSettled([p2, p1, p3]).then(list => list.forEach(p=> console.log(p.value)));
// Promise.race([p3, p2, p1]).then(p => console.log(p));
