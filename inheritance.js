class eatables{
    a=3;
    b=22;
    show=function(){
        console.log(this.a);
    }
}
class fruits extends eatables{
    c=6;
    // super(b);
    show=function(){
        console.log(this.c);
    }
}
class summerFruits extends fruits{

}

let arr=new eatables();
arr.show();
let arr2=new fruits();
arr2.show();

class Car {
    constructor(brand) {
      this._carname = brand;
    }
    get carname() {
      return this._carname;
    }
    set carname(x) {
      this._carname = x;
    }
  }

  let myCar = new Car("Ford");
myCar.carname = "Volvo";
console.log(myCar.carname);


// const Bird = function(beak){
//     this.beak = beak;
    
//     function canEat(){
//         return "I can Eat";
//     }
// }

// const eagle = new Bird("Large");
// console.log(eagle.__proto__ === Object.prototype)

// //class -> prototype object
// const parrot = new Bird("small");
// console.log(parrot.__proto__ === eagle.__proto__)

// Bird.prototype.canFly = true;

// console.log(eagle.canFly)
// console.log(parrot.canFly)

// //parrot/eagle -> Bird.prototype -> Object.prototype

// const flightlessBird = Object.create(Bird.prototype);
// flightlessBird.canFly = false
// console.log(flightlessBird.canFly)
// console.log(flightlessBird.canEat())

class Bird{
  constructor(beak){
      this.beak = beak;
  }

  canEat(){
      console.log('I can Eat');
  }

  info(){
      return `I am a bird with ${this.beak} beak. `
  }
}

class FlyingBird extends Bird{
  constructor(wings, beak){
      super(beak);
      this.wings = wings;
  }

  // info(){
  //     return super.info() + `I possess ${this.wings} feathers.`
  // }
}

const flyingBird = new FlyingBird('fluffy', 'shrap');
flyingBird.canEat();
console.log(flyingBird.info())
console.log(FlyingBird.prototype.__proto__ === Bird.prototype)
//prototypal chain




