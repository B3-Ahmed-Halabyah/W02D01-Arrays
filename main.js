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
  
