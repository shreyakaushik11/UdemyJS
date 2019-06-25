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





   

 
