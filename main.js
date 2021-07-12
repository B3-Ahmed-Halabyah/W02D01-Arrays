console.log(arrowTitle)
/* START CODE UNDER THIS LINE */

//<-------pulse Check--------------->
// step_1
const arraycolors = ["red", "blue", "yellow", "black"];

console.log(arraycolors);


//step_2

 const negativeNumbers = [-1, -2,-3,-4 ,-5];

 console.log(negativeNumbers);

 //step_3

 const arrayfood = ['borger', 'pasta', 'beef'];
 
 console.log(arrayfood);


  //step_4

  const arraynumbers = [
       [1, 3, 5,],
       [4, 6, 8]
  ];
  console.log(arraynumbers);


  //Q_2 


  const orderedPlanets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter"]; //answer "Mars" = 3 
 console.log(orderedPlanets);

 const unorderedPlanets = ["Mars", "Earth", "Mercury", "Jupiter", "Venus"];// answer "mars" = 0
   console.log(unorderedPlanets);

 //step_2

 const animals = ["Cat", "Dog", "Dolphin", "Squirrel", "Koala"];
 console.log( "Koala".length);


 //Q_3

// a- use the `length` property
const orderedPlanets_2 = ["Mercury", "Venus", "Earth", "Jupiter", "mars"];
console.log(orderedPlanets_2);
console.log( "mars".length);
//step_1

// b- don't use the `length` property (use the index)
const unorderedPlanets_3 = ["Mars", "Earth", "Mercury"];
 console.log(unorderedPlanets_3);
unorderedPlanets_3.shift("mars");

unorderedPlanets_3.push("mars");
//step_2

const animals_1 = ["koala", "Dog", "Dolphin", "Squirrel"]; // answer koala = 0 in array 

console.log(animals_1); 

//Q_4   
//Add the value (Dinosaur) to the end of the array using the correct array method.

const reptiles = ["Snake", "Lizard", "Turtle", "Dinosaur"];
reptiles.shift("Snake")
console.log(reptiles);

//step_2 

const fish = ["Goldfish ","Swordfish ", "Clownfish ", "Shark "];
 fish.pop("Shark");
console.log(fish);

//Q_5 

//step_1 

const number= [1, 9, 9, 3];

console.log(number);

 const arraynum = [
    [1, 6, 8, 3]
 ]
console.log(arraynum);

//step_2
const arraystr = ["John", "Doe", "The Third"];

console.log(arraystr);

//step_3

const string = ["hello", "world"];
console.log(string);

//step_4
const nums = [1, 2, 3, 4];

 nums.reverse(nums);
 console.log(nums);








//           <----------------------Practice---------------------------->

//Q_1
/*
1 Write a function addToArray
 2 that accepts two arguments, 
 3 array and string,
  and returns the same array after adding the string element to the end of it
*/
const addToArray = function (array, string) {

    array.push(string);
    console.log(array);
    
  };
    

 addToArray(["Hello", "i", "am"], "John"); // => ["Hello", "i", "am", "John"]
 addToArray(["Hello", "John", "i", "am"], "Jane"); // => ["Hello", "John", "i", "am", "Jane"]
 
//Q_2
/*
Write a function convertToString
 that accepts an array of strings and
  returns a string made out of the array values.
*/

const convertToString = function (array) {
   
   let =  array.join("  ");
    console.log(let);

  };
  
  convertToString(["Hello", "i", "am", "John"]); // => "Hello i am John"
  convertToString(["Hello", "John", "i", "am", "Jane"]); // => "Hello John i am Jane"
  

  //Q_3

  /*Write a function accessElement
   that accepts two arguments,
    array and index, and
     returns the corresponding array element depending on the passed index.
*/
const accessElement = function (array, index) {
     if(array.length < index){
       console.log("No element at index " + index)
     }else{
         console.log(array[index])     
    
     }
  };
  
  accessElement([1, 2, 3, 4, 5], 0); // => 1 
  accessElement([1, 2, 3, 4, 5], 3); // => 4
  accessElement([1, 2, 3, 4, 5], 10); // => "No element at index 10"
  
//Q_4
/*
Write a function isInArray that accepts two arguments,array and string,
 and returns true or false depending
  on whether the string is an element in the array or not.
*/
const isInArray = function (array, string) {

  return  array.includes(string);
   
   
  };
     isInArray(["John", "Jane", "Mark"], "Jane"); // => true
     isInArray(["John", "Jane", "Mark"], "Mark"); // => true
     isInArray(["John", "Jane", "Mark"], "Smith"); // => false
     isInArray(["John", "Jane", "Mark"], "Smith");// => false

     console.log('----------------------------------------- ');
  
//Q_5
 // split: is a string method that is used to convert a string into an array and the values will be separated depending on the
// argument passed into the split method (opposite of join)
const word = "Hello";// if an empty string is passed as an argument then the string will be split on every character
word.split(" "); // => ["H", "e", "l", "l", "o"]
// if we pass the letter "e" as an argument, it will split the string on every "e" in that string. Since there is only one "e", the string has split into an array with two elements
word.split("e"); // => ["H", "llo"]
// if an empty space (" ") is passed as an argument, the string will be split on every empty space
const words = "This is a string that contains words";
words.split(" "); // => ["This", "is", "a", "string", "that", "contains", "words"]

const reverseWords = function (string) {

     
  var  R  =  word.split("   ");
    console.log(R);
};
reverseWords("Hello"); // => "Hello"
//reverseWords("Hello World"); // => "World Hello"

console.log('----------------------------------------- ');

//Q_6

// do not use `push` or array assignments, only `unshift`
const addToLast = function (array, value) {
    
      console.log(array.unshift(value));
      array.shift(value);
      array[array.length] =value 

       console.log(array);

    //console.log(array.unshift() =[4]);
};

addToLast([1, 2, 3], 4); // => [1, 2, 3, 4]
addToLast([10, 6], 1); // => [10, 6, 1]

console.log('----------------------------------------- ');

//Q_7

// write a function `getLength` that accepts an array and returns the
// length of the array without using the array's attribute `length`
const getLength = function (array) {
  // do not use array.length
  console.log(array.length);
      
};

getLength([1, 2, 3, 4]); // => 4
getLength([10, 22, 30]); // => 3

// write a function `getFirstVal` that accepts an array and returns the
// first value of the array without using the index to access the value
const getFirstVal = function (array) {
  // do not use array[0]
  // TODO: Your code here
};

getFirstVal([1, 2, 3, 4]); // => 1
getFirstVal([51, 3, 3, 4]); // => 51

console.log('----------------------------------------- ');

//Q_8

// the array values are unique, no duplicate values in the array
const updateOrCreate = function (array, value, index) {
   
   
   
  // array.shift();
  // console.log(array);

};

updateOrCreate([10, 20, 30], 50, 1); // => [10, 50, 30]
//updateOrCreate([10, 20, 30], 40, 3); // => [10, 20, 30, 40]
//updateOrCreate([10, 20, 30], 100, 10); // => [10, 20, 30, empty * 7, 100]








