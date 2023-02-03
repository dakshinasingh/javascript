const zack={
    name:"Zack",
    age:28,
    displayInfo:function(){
        console.log(`i am ${this.name} and my age is ${this.age}`);
    }

}
zack.displayInfo();
console.log(zack.age);
zack.age=30;
console.log(zack.age);



const Person = function(name){
    if(!new.target){
        throw new Error('Not a Function')
    }
    this.me = this.name;
}

const jazz = new Person('Jazz');


//constructor
class Home{
    constructor(rooms, kitchens, flooring){
        this.kitchens = kitchens,
        this.rooms = rooms,
        this.implemnentedFlooring = flooring,
        this.bathrooms = 1
        this.floors = 1
    }

  #stores=3; //making the variable private
    get floor(){
        return this.implemnentedFlooring;
    }

    //setter
    set floor(floor){
        this.implemnentedFlooring = floor;
    }

    createRoom(){
        this.rooms = this.rooms + 1;
    }

    createFloor(){
        this.floors = this.floors + 1
        this.#createBathroom();
    }


    //private methods

    #createBathroom(){
        this.bathrooms = this.bathrooms + 1;
    }

}


const myHome = new Home(5, 2, 'Marble');
myHome.createRoom();
myHome.floor = 'Concrete'
console.log(myHome.rooms)
console.log(myHome.kitchens);
console.log("hhhhhhhhhhhhhhhhhhhh");
console.log(myHome.floor)
console.log(myHome.bathrooms)
myHome.createFloor();
console.log(myHome.bathrooms)
// console.log(createBathroom()); //it cannot be called because its private

