//nullish coalescing operator

const user={
    id:2,
    email:"user"
}

console.log(user.id ?? 3);
console.log(user.email ?? "user@gmail.com");

//optional chaining operator
const user2={
    id:4,
    email:'email address',
    info:{
        name:'zack',
        address:{
            state:'UP',
            city:'ggg'
        }
    }
}
if(user2!=null && user2.info!=null && user2.info.address!=null)
console.log(user2.info.address.state);
//this is equivalent to
console.log(user2 ?.info?.address?.state?.city)

//logical operators
a=10;
a+=10;
console.log(a);
a=0;
a||=30;
console.log(a);
a&&=20;
console.log(a);
a=0;
a??=40;
console.log(a);


//numeric seperator
amt=10_00_000;
console.log(amt);

//e.g.
a=null;
console.log(a);
document.write(a??"user@")