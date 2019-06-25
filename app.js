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


