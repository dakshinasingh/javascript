// let animals=['cat','dog','cow','horse'];
// let ani1=animals[0];
// let ani2=animals[1];
// let ani3=animals[2];
// let ani4=animals[3];
// console.log(ani2);

//destructering
// [ele1,ele2,elel3,ele4]= animals;
// console.log(ele4);

//destructering on arrays
// [ar,...others]=animals;
// console.log(ar);
// console.log(others);


//object destructering
animals ={ 
    arc1:'cat',
    arc2:'dog',
    arc3:'cow',
    arc4:'horse'
}


const{arc1:arr1, arc2:arr2, arc3:arr3, arc4:arr4 }=animals
console.log(arr1);


const empName="jogn";
const empAge=28;
const employee={
    empName,
    empAge
}
console.log(employee.empName)
console.log(employee.empAge)

for(let i = 0; i< 5; i++){

}

const items = [2, 2, 3]
for(const item of items){
    console.log(item)
}

for(const [index, value] of items.entries()){
    console.log(`value is ${value} at index ${index}`)
}

