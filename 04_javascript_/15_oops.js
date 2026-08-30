'use strict'


// // creating classes

// const Person = function (firstName, birthYear) {
//     // instance properties
//     // console.log(this);
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//     // never do this to make function
//     // this.calcAge= function(){
//     //    console.log(2037- this.birthYear);
//     // }
// }

// const ASR = new Person('Anshul', 2006);
// const jou = 1;
// console.log(ASR);

// // we can check is instance of 
// console.log(jou instanceof Person);
// console.log(ASR instanceof Person);

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // 1. New {} is created
// // 2. function is called, this = {}
// // 3. {} linked to prototype
// // 4. function automatically return {}
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// console.log(Person.prototype);

// // prototype
// Person.prototype.calcAge = function () {
//     console.log(2037 - this.birthYear);
// }

// console.log(Person.prototype);
// console.log(ASR);
// ASR.calcAge();
// console.log(ASR.__proto__);

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // Person and its objects both have same prototype
// console.log(ASR.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(ASR));

// // we can create new properties
// Person.prototype.species = ('Homo sapiens');

// console.log(ASR.hasOwnProperty('firstName'));
// console.log(ASR.hasOwnProperty('species'));

// console.log(ASR);
// console.log(ASR.__proto__);
// //  objects.prototype
// console.log(ASR.__proto__.__proto__);
// console.log(ASR.__proto__.__proto__.__proto__);

// console.log(Person.prototype.constructor);
// console.dir(Person.prototype.constructor);

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // prototype and prototypal inheritance on arrays

// // const arr=[3,4,56,777,];
// // console.log(arr.__proto__);
// // console.log(arr.__proto__===Array.prototype);

// // // we can add custom methods on prototype  //do not use this 
// // Array.prototype. unique = function () {
// // return [ ... new Set(this)];
// // }
// // console.log(arr.unique());

// // const h1 = document.querySelector('h1');
// // console.dir(h1);

// // console.dir(x=>x+1);
// // console.log(x=>x+1);

// // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// // Coding Challenge #1

// /*
// 1. Use a constructor function to implement a Car. A
// car has a make and a speed property. The speed
// property is the current speed of the car in km/h;
// 2. Implement an 'accelerate' method that will
// increase the car's speed by 10, and log the new speed
// to the console;
// 3. Implement a 'brake' method that will decrease the
// car's speed by 5, and log the new speed to the
// console;
// 4. Create 2 car objects and experiment with calling
// 'accelerate' and 'brake' multiple times on each of
// them.

// DATA.CAR.1: 'BMW' .going .at .120 .km/h
// DATA CAR 2: 'Mercedes' going at 95 km/h

// GOOD LUCK

// */

// const Car = function (name, speed) {
//     this.carName = name;
//     this.speed = speed;
// }

// Car.prototype.accelerate = function () {
//     this.speed += 10;
//     console.log(this.speed);
// }

// Car.prototype.brake = function () {
//     this.speed -= 5;
//     console.log(this.speed);
// }

// const BMW = new Car('BMW', 120);
// const Mercedes = new Car('Mercedes', 95);

// Mercedes.accelerate();
// Mercedes.brake();
// BMW.accelerate();
// BMW.brake();

// // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // classes using ES6 classess

// // const Personcl = class{
// //     constructor(name,age){
// //         this.name=name;
// //         this.age = age;
// //     }
// //     calcAge(){
// //         return 2034- this.age;
// //     }
// // }


// // class PersonCl {
// //     constructor(name,age){
// //         this.fullName=name;
// //         this.age = age;
// //     }
// //     // methods will folow prototypal inheritance
// //     calcAge(){
// //         return 2034- this.age;
// //     }
// //     // Set a property that already exists
// //     set fullName(name) {
// //         console.log(name) ;
// //     if (name.includes(' ')) this._fullName = name;
// //     else alert('${name} is not a full name!');
// //     }
// //     get fullName() {
// //     return this ._fullName;
// //     }
// // }

// // const anshul = new PersonCl ('anshul ', 1996) ;
// // const ASR = new PersonCl ('anshul singh', 1996) ;
// // console.log(anshul);
// // console.log(anshul.calcAge());
// // console.log(anshul.__proto__=== PersonCl.prototype) ;

// // // 
// // PersonCl.prototype.greet=function(){
// //     console.log(`hey ${this.name}`);
// // }
// // anshul.greet();
// // // console.log(anshul.fullName);
// // console.log(ASR.fullName);


// // // 1. Classes are NOT hoisted
// // // 2. Classes are first-class citizes
// // // 3. Classes are executed in strict mode

// // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // // getter and setters in javascript

// // const account ={
// //     owner:'Anshul',
// //     moments:[20,40],
// //     get latest(){
// //         return this.moments[0];
// //     },
// //     set latest(mov){
// //     this.moments.unshift(mov);
// //     console.log(this.moments);
// //     }

// // }

// // // using getter
// //  console.log(account.latest);
// //  account.latest=60;

// // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // //  static keyword use to assign elements to the class not to its objects and can be callled using class

// // class Personnew {
// //     constructor(name,age){
// //         this.fullName=name;
// //         this.age = age;
// //     }
// //     // methods will folow prototypal inheritance
// //     calcAge(){
// //         return 2034- this.age;
// //     }
// //     // Set a property that already exists
// //     set fullName(name) {
// //         console.log(name) ;
// //     if (name.includes(' ')) this._fullName = name;
// //     else alert('${name} is not a full name!');
// //     }
// //     get fullName() {
// //     return this ._fullName;
// //     }
// //     // static method
// //     static hey(){
// //         console.log("hello there whatsup");
// //     }
// // }

// // const ans = new Personnew ('anshul ', 1996) ;
// // // ans.hey()//invalid
// // Personnew.hey()//static

// // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// // // least used way to create objects  and prototypal inheritance


// // // declare  class as a object 
// // const PersonProto = {
// // calcAge() {
// // console. log(2037- this.birthYear);
// // },
// // init(firstName, birthYear) {
// // this.firstName = firstName;
// // this.birthYear = birthYear;
// // }
// // } 
// // // create  object of the class
// // const steven = Object. create(PersonProto) ;

// // console. log(steven) ;
// // // we can add properties
// // steven. name = 'Steven';
// // steven.birthYear = 2002;
// // steven. calcAge();

// // console. log(steven .__proto__);

// // const sarah = Object.create(PersonProto);
// // sarah.init('sarah',2006);
// // console.log(sarah);
// // sarah.calcAge();

// // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // Coding Challenge #2

// /*
// 1. Re-create challenge 1, but this time using an ES6
// class;|
// 2. Add a getter called 'speedUS' which returns the
// current speed in mi/h (divide by 1.6);
// 3. Add a setter called 'speedUS' which sets the
// current speed in mi/h (but converts it to km/h before
// storing the value, by multiplying the input by 1.6);
// 4. Create a new car and experiment with the
// accelerate and brake methods, and with the getter and
// setter.

// DATA CAR 1: 'Ford' going at 120 km/h

// GOOD LUCK
// */


// // class Car  {
// //     constructor (name , speed){
// //     this.carName = name;
// //     this.speed = speed;
// //         }

// // accelerate(){
// //     this.speed+=10;
// //     console.log(this.speed);
// //     }

// // brake(){
// //     this.speed-=5;
// //     console.log(this.speed);
// // }
// // get speedUS(){
// //     return this.speed/1.6;
// // }

// // set speedUS(speed){
// //     this.speed= speed/1.6;
// // }
// // }

// // const ford = new Car('Ford',120);
// // console.log(ford.speedUS);
// // ford.accelerate();
// // ford.accelerate();
// // ford.accelerate();
// // ford.brake();
// // console.log(ford);
// // ford.speedUS=80;
// // console.log(ford);

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

// // Inheritance Between "Classes": Constructor Functions

// // const Person = function (firstName, birthYear) {
// // this.firstName = firstName;
// // this.birthYear = birthYear;
// // }

// // Person.prototype. calcAge = function () {
// // console. log(2037 - this.birthYear);
// // }

// // const Student = function(firstName,birthYear , course){
// //     Person.call(this,firstName,birthYear);
// //     this.course=course;
// // }
// // // linking prototypes or inheritance of classes
// // Student.prototype=Object.create(Person.prototype); 

// // Student.prototype.introduce = function(){
// //     console.log(`My name is ${this.firstName} and i am in ${this.course}`);
// // }

// // const anshul = new Student ('Anshul',2026,'Computer');
// // anshul.introduce();
// // anshul.calcAge();

// // console.log(anshul.__proto__);
// // console.log(anshul.__proto__.__proto__);
// // console.dir(Student.prototype.constructor);

// // console.log(anshul instanceof Student);
// // console.log(anshul instanceof Person);
// // console.log(anshul instanceof Object);
// // Student.prototype.constructor = Student;
// // console.dir(Student.prototype.constructor);


// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

// // Coding Challenge #3

// /*
// 1. Use a constructor function to implement an
// Electric Car (called EV) as a CHILD "class" of Car.
// Besides a make and current speed, the EV also has the
// current battery charge in % ('charge' property) ;
// 2. Implement a 'chargeBattery' method which takes an
// argument 'chargeTo' and sets the battery charge to
// 'chargeTo' ;
// 3. Implement an 'accelerate' method that witl
// increase the car's speed by 20, and decrease the
// charge by 1%. Then log a message like this: 'Tesla
// going at 140 km/h, with a charge of 22%';
// 4. Create an electric car object and experiment with
// calling 'accelerate', 'brake' and 'chargeBattery'
// (charge to 90%). Notice what happens when you
// 'accelerate'! HINT: Review the definiton of
// polymorphism

// DATA CAR 1: 'Tesla' going at 120 km/h, with a charge
// of 23%

// GOOD LUCK
// */
// // const Car = function(name , speed){
// //     this.name = name;
// //     this.speed = speed;
// // }
// // Car.prototype.accelerate = function(){
// //     this.speed += 20;
// //     console.log(`${this.name}going at ${this.speed} km/h`);
// // }
// // Car.prototype.brake = function(){
// //     this.speed-=5;
// //     console.log(`${this.name}is going at ${this.speed} km/h with charge ${this.charge}`);
// // }
// // const EV= function(name,speed,charge){
// //     Car.call(this,name,speed);
// //     this.charge=charge;
// // }
// // EV.prototype=Object.create(Car.prototype);
// // EV.prototype.chargeBattery=function(chargeTo){
// //     this.charge=chargeTo;
// // }
// // EV.prototype.accelerate= function(){
// //      this.speed += 20;
// //      this.charge--;
// //     console.log(`${this.name}going at ${this.speed} km/h, with a charge of ${this.charge}`);
// // }
// // const tesla = new EV('Tesla',120,23);
// // console.log(tesla);
// // tesla.chargeBattery(90);
// // console.log(tesla);

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
// // // implement inheritance using es6 classes

// // class PersonCl {
// //     constructor(name,age){
// //         this.fullName=name;
// //         this.age = age;
// //     }
// //     // methods will folow prototypal inheritance
// //     calcAge(){
// //         return 2034- this.age;
// //     }
// //     // Set a property that already exists
// //     set fullName(name) {
// //         console.log(name) ;
// //     if (name.includes(' ')) this._fullName = name;
// //     else alert('${name} is not a full name!');
// //     }
// //     get fullName() {
// //     return this ._fullName;
// //     }
// // }

// // class StudentCl extends PersonCl {
// //   constructor(fullName,birthYear,course){
// //     super(fullName,birthYear);
// //     this.course=course;  
// //   }
// // }

// // const martin = new StudentCl('martin',2012 , 'Computer science');
// // martin.calcAge();

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

// // parent class
// const PersonProto = {
//     calcAge() {
//         console.log(2037 - this.birthYear);
//     },
//     init(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }
// }
// // CHILD class
// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//     PersonProto.init.call(this, firstName, birthYear);
//     this.course = course;
// }

// // CHILD object
// const jay = Object.create(StudentProto);
// jay.init('Jay', 2006, 'CSE');

// console.log(jay);
// jay.calcAge();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 


// // Encapsulation: Private Class Fields and Methods I
// // 1) Public fields
// // 2) Private fields
// // 3) Public methods
// // 4) Private methods
// // STATIC version of these 4
// class Account {
//     // declare public feilds that are constants outside of constructor
//         locale = navigator.language;
//         bank= 'bankist';
//     // declare private fields with #
//     #movements=[];
//     #pin;
//     constructor(owner, currency, pin) {
//         this.owner = owner;
//         this.currency = currency;
//         this.#pin = pin;
//         // this.movements = [];
//         // this.locale = navigator.language;

//         console.log(`Thanks for opening an account, ${owner}`);
//     }
//     // Public interface (API)
//     deposit(val) {
//         this.#movements.push(val);
//         return this;
//     }
//     withdraw(val) {
//         this.deposit(-val);
//         return this;

//     }
//     // private methods
//     #approveLoan(val) {
//         return true;
//     }
//     requestLoan(val) {
//         if (this.#approveLoan(val)) {
//             this.deposit(val);
//             console.log(`Loan approved`);
//         }
//         return this;
//     }

//     static test(){
//         console.log("tested");
//     }
// }

// const acc1 = new Account('Jonas', 'EUR', 1111);
// acc1.deposit(300);
// acc1.withdraw(100);
// console. log(acc1);
// // cannot acess private class
// // console. log(acc1.#movement);
// acc1.requestLoan();
// Account.test();

// // acc1.withdraw(100);
// acc1
// .deposit(300)
// .withdraw(100)
// .withdraw(50)
// . requestLoan (25000)
// .withdraw(4000);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 


// Coding Challenge #4

/*
1. Re-create challenge #3, but this time using ES6
classes: create an 'EVCl' child class of the 'CarCl'
class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate'
and 'chargeBattery' methods of this class, and also
update the 'brake' method in the 'CarCl' class. They
experiment with chaining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge
of 23%

GOOD LUCK
*/

// class Carcl {
//     constructor(make, speed) {
//         this.make = make;
//         this.speed = speed;
//     }
//     accelerate() {
//         this.speed += 10;
//         console.log(`${this.make} is going at ${this.speed} km/h`);
//     }
//     brake() {
//         this.speed -= 5;
//         console.log(`${this.make} is going at ${this.speed} km/h`);
//         return this;
//     }
//     get speedUS() {
//         return this.speed / 1.6;
//     }
//     set speedUS(speed) {
//         this.speed = speed * 1.6;
//     }
// }

// class EVCl extends Carcl {
//     #charge;
//     constructor(make, speed, charge) {
//         super(make, speed);
//         this.#charge = charge;
//     }
//     chargeBattery(chargeTo) {
//         this.#charge = chargeTo;
//         return this;
//     }
//     accelerate() {
//         this.speed += 20;
//         this.#charge--;
//         console.log(`${this.make} is going at ${this.speed} km/h,with a charge of ${this.#charge}`);
//         return this;
//     }
// }

// const Rivian = new EVCl('Rivian',120,23);
// console.log(Rivian);

// Rivian.accelerate().brake().chargeBattery(50).accelerate().brake().accelerate();

// console.log(Rivian.speedUS);