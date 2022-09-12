// // This is my first javascript code
// console.log('Hello World');

// let name = 'Krishna';
// console.log(name);
// // Variables cannot be a reserved keyword
// // Variables should be meaningful
// // Variables cannot start with a name(1name)
// // Variables cannot contain a space or a hyphen(-)
// // Variables are case-sensitive
// // Better to use camel notation ( first letter in the first word is small, first letter in the
// //                                  remaining words as capital ex. firstName)

// // let interestRate = 0.3;
// // interestRate = 1;
// // console.log(interestRate);
// const interestRate = 0.3;
// interestRate = 1;
// console.log(interestRate);

// // Primitive Data Types - String, Number, Boolean, Undefined, Null
// let name = 'Krishna'; // String Literal
// let age = 30; // Number Literal
// let isApproved = true; // Boolean Literal
// let firstName; // this can also be written as let firstName = undefined
// let lastName = null;

// Reference Data Types - Object, Arrays, Functions

//Object Literal - {key: value}; - a collection of key value pairs
// let person = {
//     name: 'Radha',
//     age: 32
// };
// // console.log(person);
// // // Accessing object property using Dot Notation
// // person.name = 'Krishna';
// // console.log(person.name);
// // Accessing object property using Bracket Notation
// // person['name'] = 'Rama';
// // console.log(person['name']);
// let selection = 'name';
// person[selection] = 'Sudama';
// console.log(person['name']);

// let selectedColors = ['red','blue'];
// // console.log(selectedColors);
// // console.log(selectedColors[0]);
// selectedColors[2] = 56;
// console.log(selectedColors);
// console.log(selectedColors.length);

//Function that performs a task
// function greet() {
// console.log('Hello World');
// }
// greet();
// function greet(name) {
//     console.log('Hello '+name);
//     }
//     greet('Pranavi');
// function greet(name, lastName) {
//     console.log('Hello '+name + ' '+lastName);
//     }
//     greet('Pranavi');
//     greet('Pranavi', 'Kolipaka');
//Function that calculates a value
// function square(number){
//     return number*number;
// }
// let sqaureNumber = square(2);
// console.log(sqaureNumber);
// console.log(square(3));


// // Factory function
// function createCircle(radius) {
//     return {
//         radius,
//         draw: function() {
//             console.log('draw');
//         }
//     };
// }
// const circle = createCircle(1);
// circle.draw();

// // Constructor function
// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }
// const another = new Circle(1);
// console.log(another);

// // Constructors
// new String(); //instead we use  '', "", ``
// new Boolean(); //instead we use  true, false
// new Number(); //instead we use  1, 2, 3, ...

// Every object has a constructor property that referencesthe function that we used to create the object

// const Circle1 = new Function('radius', `
//     this.radius = radius;
//     this.draw = function() {
//     console.log('draw');
//     }
// `);
// const circle = new Circle1(1);

// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }
// Circle.call({}, 1); // similar to const another = new Circle(1);
// Circle.apply({}, [1, 2, 3]); // similar to call method , used when arrays need to be passed as arguments

// let x = 10; // -- 10 is stored in the variable x
// let y = x;
// x = 20;

// let x = {value: 10}; // this is an object , it will not be stored in the variable, but somewhere in the memory, addredd of that memory is stored inside the variable
// let y = x;
// x.value = 20;

// **** Primitives are copied by their value
// **** Objects are copied by their reference

// let number = 10;
// function increase(number) {
//     number++;
// }
// increase(number);
// console.log(number);

// let obj ={ value: 10 };
// function increase(obj) {
//     obj.value++;
// }
// increase(obj);
// console.log(obj);

// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }
// const circle = new Circle(10);
// circle.location = { x:1 }; // similar to circle['location'] = { x: 1 };
// delete circle.location // similarly circle['location']
// // [] notation can be used for dynamic accessing of properties or when there are special character between the property names like hyphens, spaces ex.center-location

// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }
// const circle = new Circle(10);
// // to ennumerate all the members in an object use for loop
// for (let key in circle) {
//     if ( typeof circle[key] !== 'function')
//     console.log(key, circle[key]);
// }
// // to get all the keys in an object use Object.keys()
// const keys = Object.keys(circle);
// console.log(keys);
// // t check for the existence of a property or a method use in operator
// if ('radius' in circle)
//     console.log('Circle has a radius');

// function Circle(radius) {
//     this.radius = radius; // this can be accessed outside this Circle function 
//     let defaultLocation = { x:0, y:0 }; // this is a local variable, accessed only inside the Circle function
//     let computeOptimumLocation = function(factor) {
//         //...   
//     }
//     this.draw = function() {
//         // let x,y // these variables are local to draw function, once after the function execution completes, these variables die, this means they are in 'SCOPE'
//         //  defaultLocation , computeOptimumLocation are in 'CLOSURE', their values continue to exist even after the execution of draw function completes
//         computeOptimumLocation(0.1);
//         // defaultLocation;
//         // this.radius;
//         console.log('draw');
//     }
// }
// const circle = new Circle(10);
// circle.draw();

// function Circle(radius) {
//     this.radius = radius; 
//     let defaultLocation = { x:0, y:0 };
    
//     this.getDefaultLocation = function() {
//         return defaultLocation;
//     };

//     this.draw = function() {
//         console.log('draw');
//     };
//     Object.defineProperty(this, 'defaultLocation', {
//     get: function() {
//         return defaultLocation;
//     },
//     set: function(value) {
//         if(!value.x || !value.y )
//             throw new Error('Invalid Location');
//         defaultLocation = value;
//     }
//     });
// }
// const circle = new Circle(10);
// circle.defaultLocation = 1;
// circle.draw();





// Stopwatch Implementation
function Stopwatch() {
    let startTime, endTime, running, duration = 0;

    this.start = function() {
        if(running)
            throw new Error('Stopwatch has already started!!!');
        running = true;
        startTime = new Date();
    };

    this.stop = function() {
        if(!running)
            throw new Error('Stopwatch is not started!!!');
        running = false;
        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    };

    this.reset = function() {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };

    Object.defineProperty(this, 'duration', {
        get: function() { return duration;}
    });
}
