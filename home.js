//---------------------LESSON 5 HW-------------------

//https://www.codewars.com/kata/571effabb625ed9b0600107a/train/javascript

//----------------------- Task 1.-------------------------
// const animals = ['pig', 'goat', 'sheep'];
// const newanimals = ['cow',...animals];
// console.log(newanimals);
// 1. Add a new element to on zero index in the array

// const animals = ['pig', 'goat', 'sheep'];
// console.log(animals.unshift('cow'));
// console.log(animals);



// 2. Add a new element to end of the array

// const animals = ['pig', 'goat', 'sheep'];
// console.log(animals.push('cow'));
// console.log(animals);
//                            or:

// const animals = ['pig', 'goat', 'sheep'];
// const newanimals = [...animals,'cow'];
// console.log(newanimals);



// 3. Remove last element of the arrey

// const animals = ['pig', 'goat', 'sheep'];
// console.log(animals.length);
// console.log(animals.indexOf('sheep'));
// animals[2] = 'cow';
// console.log(animals);


// 4. Remove the first el of the arrey

// const animals = ['pig', 'goat', 'sheep'];
// console.log(animals.indexOf('pig'));
// animals[0] = 'cow';
// console.log(animals);


//--------------------------------- Task 2.--------------------
//1. Create an array from an existing one 
//   without mutating the first one arr

// const animals = ['pig', 'goat', 'sheep'];
// const arr2 = new Array(animals);
// arr2.push('cow');
// console.log(animals);
// console.log(arr2);

// const animals = ['pig', 'goat', 'sheep'];
// let arr2 = [...animals];
// arr2.pop()
// console.log(animals);
// console.log(arr2);




//--------------------------------- Task 3.--------------------
// 1. Creates a new array with values from 0 to 10
// using as much ways as you can

// let arr = [1,2,3,4,5,6,7,8,9,10];
// console.log(arr);

// let arr2 = new Array(1,2,3,4,5,6,7,8,9,10);
// console.log(arr2);

// let arr = Array.of(1,2,3,4,5,6,7,8,9,10);
// console.log(arr);



//--------------------------------- Task 4.--------------------

//1. Create an array with any values
//  const arr = [1,2,3,4,7,9,'e,',1, '{1,2}'];
//  console.log(arr);



//2. Create a second array and 
//asigne to this second arrey a value of a first array without changing the first one
//print both arrays to the console

// const arr2 = [...arr];
// console.log(arr2);















