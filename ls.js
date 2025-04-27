// set , get , remove , clear

console.log(localStorage);

//JSON  >> to convert string and array.

const arr =[1,2,3,4,5]
console.log(arr);

// conversion of array to string.

//stringify >> to convert array into string.
// parse >> to convert string into array.

let arrToString = JSON.stringify(arr);

console.log(arrToString);

let stringToArray = JSON.parse(arrToString);
console.log(stringToArray);

localStorage.setItem("tasks", arrToString );
