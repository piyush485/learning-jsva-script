var a = 7;
var b = a;
var c;
console.log(a)
console.log(b)
console.log(c)

var myName = "Piyush";
console.log(myName.length);         //for length
console.log(myName.charAt(3));      //for character at the particular index
var myArray = ['hello', 'hii'];
myArray.push('kem cho');            //push the element in the array
console.log(myArray);
myArray.pop();                      //pop the last element from the array
console.log(myArray);

myArray.shift();                    //removes the first element from the array
console.log(myArray);

myArray.unshift('happy');
console.log(myArray);




//functions

function myFunction(a, b){
    console.log("Function called and then the sum is printed");
    console.log(a+b);
}
myFunction(10, 10);

/*
if the 'var' keyword is not used then the 
variable becomes the global variable and can be used anywhere in the program
*/

var myGlobal = 10;

function f1(a){
    console.log(myGlobal+a);
}
function f2(b){
    myGlobal2 = b;                  //if the 'var' keyword is used then myGlobal will be "Local" else "Global".
    console.log(myGlobal+b);
}
function f3(c){
    c += myGlobal2;
    console.log(myGlobal+c);
}

f1(10);
f2(10);
f3(10);




//we can use same names of the global and local variable,
//but the local variable takes the priority when inside the function

var myGlobal = 10;
function f(){
    var myGlobal = 5;
    return myGlobal;
}
console.log(f());
console.log(myGlobal);



//push the element in the array and remove the first element from the array and return it.

function f1(myArray, item){
    myArray.push(item);
    return myArray.shift();
}

var myArray = [1,2,3,4,5];
console.log("Before: ", myArray);
console.log("First element removed is: ", f1(myArray, 6));
console.log("Before: ", myArray);

// if else 

function f1(trueOrFalse){
    if(trueOrFalse) return true;
    else return false;
}
console.log(f1(true));



// strict equal sign 

if(2 === '2')   console.log('false\n');
if(2 == '2')   console.log('true\n');
if(2 == 2)   console.log('true\n');


// Objects: 
// objects are like the map in the c++
var myObject = {
    'hat': 'hello',
    'cap': 'nike',
    'tie': 1
};

myObject.pant = 'Black';        //this can be done to add the new property in the object 
delete myObject.tie;            //this will delete the property from the object
// and to access that we use the dot operator 
var newObj1 = myObject.cap;
var newObj2 = myObject.tie;

console.log(newObj1);
console.log(newObj2);

// hasOwnObject(property_name) is the function that checks for wheter that property is available in the object or not 
console.log(myObject.hasOwnProperty('hat'));

console.log(Math.floor(Math.random() * 20));

// create the random Number between Two limits: 

let n1 = 100, n2 = 5;
console.log(Math.floor(Math.random() * (n2-n1+1)) + n1);

// we can also convert String to Integer 

var str = "1000";
console.log(parseInt(str));         //this will simply convert the string to the integer

// if we want to convert the string to integer but the number
//  present is in the binary format then use the following rule: 

console.log(parseInt(str, 2));


// difference between the "let" and "var" keywords 
/*
the var allows us to declare the variable twice but the let doesn't it throws error

e.g.: 
var variable1 = 1;
var variable1 = 2;              //this works fine

let variable1 = 1;
let variable2 = 2;              //there is an error(duplicate declaration error)
*/

"use strict";                   // this allow us to strictly write the code in better way without
                                // using any undeclared variables.


//below is the demo for the difference of let and var

//if we use the following format than the var will be changed even if it declared globally

var i = "Hii";
if(true){
    var i = "Hello";
    console.log(i);
}
console.log(i);

//and if the same format is done with let, it won't be changed

let i = "Hii";
if(true){
    let i = "hello";                //this hello will be use in the below line 
    console.log(i);
}
console.log(i);                     //hii will be used in this code line



// even the constants can be changed

const s = [1,2,3];
s[0] = 2;
s[1] = 3;
s[2] = 4;
console.log(s);             //this shows that constant array is being changed



// same can be done to the objects...myObject.

const PI_VAL = {pi: 3.14};

Object.freeze(PI_VAL);          //this will freeze the value of the oblect to constant and further can not be changed
try{
    PI_VAL.pi = 99;             //this shows that even the constant objects can be changed
}
catch(ex){
    console.log(ex);
}   
console.log(PI_VAL.pi);



/*Arrow functions */

const magic = () => new Date();                     //this is the defination of the arrow function
console.log(magic());                               //this is the calling of the magic() function
var concatinate = (arr1, arr2) => arr1.concat(arr2);    //this is the parameterised arrow function
console.log(concatinate([1,2,3], [4,5]));               //this is the calling of the parameterised function



//spread operator

const arr1 = ['jan', 'feb', 'mar', 'apr', 'may'];
let arr2;
(function() {
    arr2 = [...arr1];           //this does not copy the arr1 in arr2 rather it provides the values of arr1 to arr2
    arr1[0] = 'dec';
})();
console.log(arr1);
console.log(arr2);



// destruction operator

// old fashion of assigning the values of objects 
var voxel = {x:1, y:2, z:3};
var a = x;
var b = y;
var c = z;

// new fashion to assign values
const {x:a, y:b, z:c} = voxel;
const LOCAL_FORECAST = {
    today: {min: 10, max: 20},
    tomorrow: {min: 15, max: 25}
};

function getMaxOfTmr(forecast){
    "use strict";
    const {tomorrow: {max: maxOfTommorow}} = forecast;
    return maxOfTommorow;
}

console.log(getMaxOfTmr(LOCAL_FORECAST));

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list){
    const [ , , ...arr] = list;                 //this will remove the first two elements from the array as there are two blank spaces before the separate operator 
    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);


//class

function makeClass(){
    class Thermostat{
        constructor(temp){                      //constructor
            this._temp = 5/9 * (temp-32);
        }
        // getter
        get temperature(){
            return this._temp;
        }
        // setter 
        set temperature(updatedValue){
            this._temp = updatedValue;
        }
    }
    return Thermostat;
}

const Thermostat = makeClass();             //this will return the object of the class through function
const thermos = new Thermostat(76);         //this is to make the object of the class
let temp = thermos.temperature;             //calling of the getter function which doen't require '()'
thermos.temperature = 26;                   // setter function call, which also doesn't require '()'
temp = thermos.temperature;