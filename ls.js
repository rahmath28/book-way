// set , get , remove , clear : in local storage we can do this 4 .
// local storage la set panna mudiyum with key and value as only string , 
// set panna data va "key name" : use panni get panna mudiyum,
// remove panna mudiyum and clear panna mudiyum..

// local storage la set pandrathu key value pairs ah than irukkanum.., and must local storage la  set pandra appo json stringify ah than data va store pannanum,
// store pannanum reason, we can store data in localstorage only as string..


// console.log(localStorage); // will get : Storage {length: 0} , that has prototype of setItems, getItems,removeItems and clear.



const arr =[1,2,3,4,5]
console.log(arr);  // cannot store array into ls, so we can convert into json string to set into ls.

// conversion of array to string , reason i  cant store datas as array..

//stringify >> to convert array into string.
// parse >> to retrieve string into original array.

let arrToString = JSON.stringify(arr);

console.log(arrToString); // got as  string : length kamikkathu matha padi square bracket la than irukky , type check panna string nu display agum..

let stringToArray = JSON.parse(arrToString); // retrieving to original array..
console.log(stringToArray);


// ipdithan local storage la setItem method use panni , localstorage la set pannanum

//This means that both the key and the value used in localStorage.setItem(key, value) must be strings.
// first one is key , second one my value..

// localStorage.setItem("tasks", "helo" ); //: tasks >> key , arrToString : na json string ah convert panna array..
// tasks dra keyla : enakku "helo " string irukkum..


// ****** , local storage la ennoda keyname match agalana , get pannumpothu by keyname.., i will get :  "null".. ***

// console.log(localStorage.getItem("tasks1")) // get pannupothu , "key name (tasks1)" :  use panni  than get pannanum.. ,  // ***
// antha key name la value illana i will get :  "null" >> intha null ah base panni than condition build panni local storage la store panna porom..