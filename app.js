//example of hoisting
b();
console.log(a); //hoisting
var a='Hello';
console.log(a);
function b(){
console.log("helloooo");
}
//scope example
function bb(){
console.log(myVar);
}
function aa(){
var myVar=2;
bb();
}
var myVar=1;
aa();

//equality operator
var x=0;
var y=false;
if(x==y){
console.log("they are equal but their types are not");
} else if(x===y){
console.log("their types are also same");}
else console.log("they are not equal");

//way to define an object
var person = new Object();
person["firstName"]= "Alicia";
person["lastName"] = "Keys";
console.log(person);
console.log(person["lastName"]);
console.log(person.firstName);
person.address = new Object();
person.address.street = "111 Main St.";
person.address.city = "New Jersey";
person.address.state = "New York";
console.log(person.address);
console.log(person.address.city);
console.log(person["address"]["state"]);

//another way to define an object
var person2 = {
   firstname: "Ashley",
   lastname: "Frangipane",
   address: {
      street: "122 Main St.",
      city: "New York",
      state: "NY"
   }
}
console.log(person2.firstname);
console.log(person2.lastname);
console.log(person2.address.street);
console.log(person2);


function greet(person){
     console.log("Hi " + person.firstname);
}

greet(person2);

greet({firstname:"Kristy"});

//converting object literal into json and vice versa

var objectLiteral = { firstname: "aparna", lastname: "khichi"};
console.log(JSON.stringify(objectLiteral)); //to convert into json format, basically to string

var jsonValue = '{"firstname":"tom", "lastname":"cruise"}'; 
console.log(JSON.parse(jsonValue)); //to convert json into object literal

//attaching property to a function

function hello(){
  console.log("hello");
}

hello.language = "english";
console.log(hello.language);
console.log(hello);

//creating anonymous function

var anonymousGreet = function(){
  console.log("hi");
}

anonymousGreet();

function log(a){
  console.log(a);
  //a();
}

log(3);
log("Hello");
log({fn:"riya", ln:"malhotra"});
log(function(){
     console.log("Hi");
});


//by value(for primitive types)

var a = 2;
var b;
b=a;
a=3
console.log(a);
console.log(b);

//by reference(for all objects including functions)

var x = {greeting: 'hi'};
var y;
y = x;
x.greeting = 'hello';
console.log(x);
console.log(y);

//y.greeting = 'hola';

//by reference(even as parameters)

function changeGreeting(obj){
  obj.greeting='hola';
}

changeGreeting(y);
console.log(x);
console.log(y);

//equals operator sets up new memory space

x = {greeting:'how you doing'};
console.log(x);
console.log(y);

//this 

function abc(){
  console.log(this);
  this.newvariable = 'hello';
}

var b = function(){
  console.log(this);
}

abc();

console.log(newvariable);

b();

var c = {
    name: 'the c object',
    log: function() {
         var self = this;
         self.name = 'updated c object';
         console.log(self);
         var setname = function(newname){
            self.name = newname;
         }
         setname('Updated the c object again');
         console.log(self);
    }
}
c.log();

//array

var arr = [1, false, { name: 'Tony' , address: '111 Main St.'}, 
          function(name){
             var greeting = 'Hello ' + name;
             console.log(greeting);
           }, "hello"
];

console.log(arr);
//calling the function in array
arr[3](arr[2].name);

//using arguments

function letsgreet(firstname, lastname, language){

    if(arguments.length===0){
      console.log("Missing arguments");
    }
    language = language || 'es';
    console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log('arg[0]: '+arguments[0]); 
    console.log(arguments); //shows the parameters that i've passed
}

letsgreet(); //we can call function without args
letsgreet("John");
letsgreet("John", "Doe");
letsgreet("John", "Doe", "en");

//using function statement

function sayHi(name){
  console.log("Hi "+ name);
}

sayHi('Ashley');

//using function expression

var hiFunc = function(name){
  console.log("Hi "+ name);
}

hiFunc('Taylor');

//using Immediately Invoked Function Expression(IIFE)

var sayhi = function(name){
  console.log("Hi "+ name);
}('Zayn'); //calling immediately using parentheses
//console.log(sayhi())
//cannot call the function like above now because sayhi is now a string


//converting function statement into function expression


(function(name) {
   var greeting = 'Hello';
   console.log(greeting +' '+ name);
}('John')); //we can also invoke outside the parentheses like this })('John')


//closures

function saySomething(whattosay){
    return function(name){
       console.log(whattosay + ' ' + name);
     }
}

saySomething('Hello')('Tom');
var sayHola = saySomething('Hola');
sayHola('Tom');


function funcStatement(){
  var arr = [];
  for(var i=0; i<4; i++){
     arr.push(function(){
         console.log(i);
      });
   }
   return arr;
}
var fs = funcStatement();
fs[0]();
fs[1]();
fs[2]();
fs[3]();

//another way to write above code to get output as 0 1 2 3

function funcStatement2(){
  var arr = [];
  for(var i=0; i<4; i++){
     let j = i;
     arr.push(function(){
         console.log(j);
      });
   }
   return arr;
}

var fs2 = funcStatement2();
fs2[0]();
fs2[1]();
fs2[2]();
fs2[3]();
 
//callback

function sayHiLater(){
  var greeting = 'Hi';
  setTimeout(function(){
      console.log(greeting);
  }, 3000);
}

sayHiLater();

//bind()

var person = {
  firstname : 'John',
  lastname : 'Doe',
  getFullName : function(){
     var fullname = this.firstname + ' ' + this.lastname;
     return fullname;
   }
}

var logName = function(lang1, lang2){
  console.log("Logged: " + this.getFullName());
  console.log("Arguments: " + lang1 + " " + lang2);
}.bind(person);

//var logPersonName = logName.bind(person);

//logPersonName();
logName(); 

//call
logName.call(person, 'en', 'es');  

//apply
logName.apply(person, ['en', 'es']);  


function occurence(){

var arr = [0, 0, 0, 1, 2, 3, 0, 2, 3, 4];
var obj = {};
var count = 0;
for (var i=0; i<arr.length; i++){
  for(var j=1; j<arr.length; j++){
    if(arr[i]===arr[j]){
        count++;
   }
  //obj={arr[i] : count};
  obj[arr[i]]=count;
}
count = 0;
}
console.log(obj);
}

occurence();

//apply

(function(lang1, lang2){
  console.log("Logged: " + this.getFullName());
  console.log("Arguments: " + lang1 + " " + lang2);
}).apply(person, ['en', 'es']);


//function borrowing

var person2 = {
  firstname: 'Alicia',
  lastname: 'Keys'
};

console.log(person.getFullName.apply(person2));


//function currying

function multiply(a, b){
  return a*b;
}

var multipleOfTwo = multiply.bind(this, 2) //it sets value of a to 2
console.log(multipleOfTwo(4));
var multipleByTwo = multiply.bind(this, 2, 5) //it sets value of a to 2 and b to 5
console.log(multipleByTwo());
console.log(multipleByTwo(9)); //the result will still be 10 
var multiple = multiply.bind(this) //not setting any value for a and b
console.log(multiple(5, 6));

var obj = {};
var fun = function(){ };
var array = [];

//reflection and extend

var person = {
  firstname : 'Default',
  lastname : 'Default',
  getFullName : function(){
    return this.firstname + ' ' + this.lastname;
  }
}

var john = {
  firstname : 'John',
  lastname : 'Doe'
}

john.__proto__ = person;

for(var prop in john){
  if(john.hasOwnProperty(prop)){
    console.log(prop + ' : ' + john[prop]);
  }
}

var jane = {
  address : '111 Main St.',
  getFormalName : function(){
    return this.lastname + ', ' + this.firstname;
  }
}

var jim = {
  getFirstName : function(){
     return this.firstname;
  }
}

//use underscore.js for this
//_.extend(john, jane, jim);
//console.log(john);

//creating object using new keyword

//function constructor
function Someone(firstname, lastname){
  console.log(this);
  this.firstname = firstname; //this refers to the empty object
  this.lastname = lastname;
  console.log('this function is invoked');
  //return { hi : 'i got in the way'};
}
//Someone();

//prototype

Someone.prototype.getFullName = function(){
  return this.firstname + ' ' + this.lastname;
}

var doe = new Someone('John', 'Doe');
console.log(doe);

var ashley = new Someone('Ashley', 'Frangipane');
console.log(ashley);


//adding a function to a built-in function constructor using prototype

String.prototype.isLengthGreaterThan = function(limit){
   return this.length > limit;
}

console.log("Jim".isLengthGreaterThan(3));

Number.prototype.isPositive = function(){
  return this>0;
}

var x = new Number(3);
console.log(x.isPositive());

//use of for array and in for object
arr = [1, 2, 3];

for (var i of arr){
 console.log(i);
}

//object.create

var human = {
  firstname : 'Default',
  lastname : 'Default',
  greet: function (){
     console.log('Hi '+this.firstname);
  }
}

var kim = Object.create(human);
kim.firstname = 'Kim';
kim.lastname = 'Jonas';
console.log(kim);

//initialization of array of objects

var people = [
 { firstname : 'Sophie',
   lastname : 'Turner',
   addresses : [
       '111 Main St.',
       '222 Second St.'
    ]
 },
 { firstname : 'Maisie',
   lastname : 'Williams',
   address: '333 Third Street',
   greet : function(){
     console.log('Hello ' + this.firstname);
     }
  }
];

console.log(people[1].greet());

//strict mode

function logNewPerson(){
  "use strict"; //we can use it inside a function or at the top of file
  var person;
  person = {};
  console.log(person);
}

logNewPerson();
                

function mapForEach(arr, fn){
  var newArr = [];
  for( var i=0; i<arr.length; i++){
     newArr.push(
        fn(arr[i])
      )
    };

   return newArr;
}

var arr1 = [1,2,3];
console.log(arr1);

var arr2 = mapForEach(arr1, function(item){
  return item*2;
});

var arr3 = mapForEach(arr1, function(item){
  return item>2;
});

console.log(arr2);
console.log(arr3);

var checkPastLimit = function(limiter){
   return function(limiter, item){
      return item>limiter
   }.bind(this, limiter)
};

var arr4 = mapForEach(arr1, checkPastLimit(1));
console.log(arr4);
