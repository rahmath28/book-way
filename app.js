// // Definine UI variables

// To DO APP KU IMPORTANT ONE IS FORM..

// // In form i   need input, then  after submission , i need the task to display in my ul collection, remove event to delete particular task, clear all to delete all rask and finally search ...

const form = document.querySelector("#task-form");// form.
const taskInput = document.querySelector("#task");// input of the task.
const taskList = document.querySelector(".collection"); //ul
const clearBtn = document.querySelector(".clear-tasks");// clear task btn
const  search = document.querySelector("#search") // for search.



loadEventListeners();//referencce ah irukka functions ah ellam   called a function , handling every function  events in the loadEventHandlers.

function loadEventListeners(){   // intha load event listener ah already call panniyachu, so ithukku ulla event listeners reference ah irukka functions ah call panna theva illa...


    // get task from local storage..
    document.addEventListener("DOMContentLoaded", getTask)
    // Add Task Event
    form.addEventListener("submit", addTask); 

     // Remove Task Event, task list is ul.
     taskList.addEventListener("click", removeTask)
     
    //clear task
    clearBtn.addEventListener("click", clearTask)

    // for search task
    search.addEventListener("keyup", searchTask) // event "keyup" ... type pandra ellam get pannalam....
   
}

// //  to display initially the ls stored task
function getTask() {
    let tasks; // key name , im gong to use for ls.
    if (localStorage.getItem("tasks") === null) { // "tasks" : keyname
        tasks = []; // 
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks")) // tasks dra variable la parse pandrom.. , antha original array of data kedaikum..
        tasks.forEach((task) => { // so i can use forEach method..

        // to display all each item  as li
        const li = document.createElement("li");
        li.className = "collection-item";
        li.innerText = task; // ls data as task
        const link = document.createElement("a");
        link.className = "delete-item secondary-content";
        link.innerHTML = `<i class="fa fa-remove"></i>`;
        li.appendChild(link);
        taskList.appendChild(li)


        })
    }
}




function addTask(e){

    // To stop browers refresh 
    e.preventDefault();

    if(taskInput.value === ""){ // empty string means empty space
        alert("Please fill the text field");
    }else {
 
        // na add pandratha oru li ah display panna poren.. with remove icon.

        // Create a Li Element
        const li = document.createElement("li");

        // Add Class
        li.className = "collection-item";

        // Create a text
        li.innerText = taskInput.value;  // na task input la type pandra value.

        // li creatted next  atha remove panna link teva , so we have to create a a tag..

        // Create a new link element >> a tag id for icon to perform remove task.
        const link = document.createElement("a");

        // Add class to link
        link.className = "delete-item secondary-content";

        // Add Icon HTML(icon) with bacticks. >> icons should always be in INNERHTML.
        link.innerHTML = `<i class="fa fa-remove"></i>`; 

        // Adding a tag  to li
        li.appendChild(link); 

        // Add li to ul, task list is ul.
        taskList.prepend(li);    // tasklist >> ul  // >> ul la prepend panniten..( appendchiild na end la add agum, prepend child naa front la add agum )

        storeInLocalStorage(taskInput.value)
        /*
          
        taskList.appendChild(li); >> apendchild na end la task add agum.

         taskList.prepend(li); >> prepend na front la task add agum.
        */
        //  console.log(taskInput.value )

        // just tried for understanding search , dont get confuse:
        // console.log(li.firstChild) // li oda content...

        // next new task submit ana odana , input fields ah empty pandren..


        // taskInput.value = "";
        


        form.reset() // these also works.(empty the space after task submit.), >> reset method after submission empty the input field.>> form dra variable la than form selected by dom , so form.reset().
    }

}

    // store in local storage.
    function storeInLocalStorage(task){ // task add pannumpothu , input la get pandra task ah  , local storage la update pandren..
        // console.log(task); // got the input value , task i add.

        let tasks; // this my key name im going to create to store my data in localstorage..

        // initially  na search pandra key name "tasks" illana null nu display agum atha base panni condition..
        if(localStorage.getItem("tasks") === null){  // this if loop runs only ones initially..
            // reason : initially entha datavum illana than if loop run agum , only once , next else loop runs..

            tasks = [] // tasks key get panni null ah iruntha , tasks ku empty array assign pandrom..

            // console.log(tasks) // got initial empty array..

            tasks.push(task); // pushed the task i got by input into empty array..

            // next  empty array la push panniyachu , atha set pannanum local storage la..
            localStorage.setItem("tasks", JSON.stringify(tasks)) // "tasks" : key name , next  set pandra data whichmeans my task i get and pushed into array : as stringify.
           
            console.log("step 1 is running..")
        } else{
            // already irukka existing data uhm venum na , original array va get panna than new values ah push panna mudiyum.. 
            tasks = JSON.parse(localStorage.getItem("tasks")) // getting existing original array value also in a variable tasks , so that i can get and push new inputs task.
            // get pannum pothu "keyname" vachuthan get panna mudiyum..

            // i will get oruginal array in tasks variable , so that i can now push new , input task..

            tasks.push(task) // pushing the new inputs into original  arrayy..

            // console.log(tasks) // got as array , next itha local storage la set pannanum.. as , string ah intha array va , so use json.stringify..

            // // now i have to set it in local storage..
            localStorage.setItem("tasks", JSON.stringify(tasks))

            // just tried for understanding : new keyname layum set panna mudiyum..
            // localStorage.setItem("task1", JSON.stringify(tasks)) // new keyname  : task1. , ls la store agum.

            console.log("step 2 is running..")
        }

        
        
    }

  function clearTask(){ 

    // document.querySelector(".collection").innerHTML=""; // use innerHtmml ="", for clearall task..

//    taskList.innerHTML="";// already stored  ul in taskList variable..

   // dont use .remove() >> to remove ul , because it deletes whole ul and cannot add new task..
 



   // dont use remove method >> for removing ul ..

   // // *** once we removed the UL  , then we cannot add new item. 

   if(confirm("Are you sure to delete all task ?")){

    taskList.innerHTML="";  // instead always use innerHTML = ""
    // to clear all in ls
    clearFromLocalStorrage()
    
   }
    

}

function clearFromLocalStorrage(){
    localStorage.clear() // simple way to clear ls data by clear method..
    // localStorage.removeItem("tasks") // alternate way to clear by keyname.. ,
    // some time multiles keyname irukkalam appo can use removeItem method by keyname.
}



function removeTask(e){   // event delegation used ( na click pandratha delete pannanum.)  so used e there..
    
    // [ e.target than na click pandrathu.])

    //i>a  ...>>i oda parent element a.

    // console.log(e.target) // na etho click pandreno athu kedaiku, clicked icon.
    // console.log(e.target.parentElement)  // a tag >> icon click panna nala icon oda parent a tag..
    // console.log(e.target.parentElement.parentElement) //li
    //next  i have to remove li.



    // ; >>where e is event, target display icon(i),parentElement displays a(anchor tag) and next parentElement displays li.and innerHTML ="" removes list.


    // DELTE USING DOMTOKEN LIST   ( by check with classlist) // *** BEST WAY.. ***


    // classlist >> has prototypes of contains, add, replace, remove, foreach and toggle.

    if(e.target.parentElement.classList.contains("delete-item")){ // a tag oda classname la delete-item iruntha intha condition kulla pogum..

        // classlist use paanndra nala athoda methhod contains use pannalam..

         // for understanding >> e.i.a.li.remove(); 

         if(confirm("Are you sure to delete item ?")){
     
            e.target.parentElement.parentElement.remove(); // e.target >> i > a> li.remove() // removed li..
            removeFromLocalSorage(e.target.parentElement.parentElement.innerText)
        }
    }
 
}

// remove task from local storage..
function removeFromLocalSorage(liText){ // li oda inneetext ah get pandrom..
// console.log(liText) // got the element i  delete.
    let tasks;
    if(localStorage.getItem("tasks") === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem("tasks"))
        tasks.forEach((task, index) =>{ // getting all task and its index
            if(liText === task){ // click panna inner text uhm loop panna tak uhm match ana , 
                tasks.splice(index, 1) // array la irunthu splice method use panni , remove pandra , first param is index selection , which means na loop panni get panna antha tak index a pass pandren ,
                // second param : how many characters to remove , passed 1 . to delete that task
            }
        })

        console.log(tasks) // got the remaining task , except deleted task.. 
        // next remove panna task ah local storage la , set pannanum.. appothan local storage la irunthu remove agum..
        // ippo ennoda tasks key la irukka ,  array la remove panna item illa so atha update pannanum ls la.
        localStorage.setItem("tasks", JSON.stringify(tasks)) 
        // "tasks", JSON.stringify(tasks) : "tasks" >> keyname ,  JSON.stringify(tasks) >> ennoda tasks ah string ah set pandrom ls la..
        // works perfectly..
    }


}

function searchTask(e) {

    // logic >> input field la na type pandratha analyse panni ul la match aguratha display pannanum.., sarch input ahyum lower case ah mathuren and ul la irukka each task ahyum lowr case ah mathuren to work properly.., next match aguratha display pandren..

    // search fild la type pandratha text nu get pandren..
    const text = e.target.value.toLowerCase().trim(); // Get the search input and convert to lowercase >> ( enna type pannalum atha lower case ah mathuren.., .trim() >> unwanted spaces ah remove pannum..)
    // eppadi type pannalum atha lower case ah change panniyachu..

    
    // motha ul laiyum pathuthan match panni display pannanum , so selecting all li , by queryselector all.
    document.querySelectorAll(".collection-item").forEach(function(task) { // motha li select panni loop . >> queryselectorAll return nodelist that has prototype of of orEach method..

       



        // for better understanding :

        // task means >> each task of ul, which means all li..

            //  What is firstChild in an < li >?
            // The firstChild refers to the very first child node inside the element — it could be:

            // 1).  A text node(like your task name) : in our project  , first child is : my task innertext.

            // 2). An element node(like a < span >, <div>, etc.) : in our project  , second child is : a tag.

            // 3).  A comment node, even!
            // *** / It does not look at class names or attributes.


        // const taskFirstChild = task.firstChild;
        // console.log(taskFirstChild) // first child is li oda  >> InnerTEXT

        // const taskSeconChild = task.lastElementChild;
        // console.log(taskSeconChild) // second child >> a tag.


        // task means each task of existing li in thee ul..

        // task na ul la irukka ellame task than  , text na input la type pandrathu , athaiyum already lower case ah change panniyachu.....

        // ***  task.firstChild.textContent.toLowerCase().trim() >> means task na li , athoda firstchild na (classname , text ellame firstchild than) textcontent (nan type panna innertext) athan first child , second child na a tag of each li.. (so ellam task ku kum lowercase ah mathi trim pandren, match agurathu display agum illana display agathu..) ****
        const item = task.firstChild.textContent.toLowerCase().trim(); // task oda first child na first li , content to lower case ah mathuren and using trim..
        // each li oda innertext ah lowercase and trim method use pandrom..

        // Use includes instead of indexOf for clearer logic

        // now here item na item na task oda first child is content , na type pandrathu irunthal ul la display pandren, illana none..

        // motha li content oda innertext la na search input la typa pannathu irunthu match ana display pandren.. 
        if (item.includes(text)) { // includes method : iruntha true , illana false , iruntha antha task ah display pandren..
            task.style.display = "block"; // Show the task, task na li  , .style.display, block na atha display pandren..
            
        } else {
            task.style.display = "none"; // Hide the task , task na li , .style.display none na hide pandren.
        }


    });
 

}

// //  FOR BETTER UNDERSTANDING , READ THIS.
// 1. Input dra event ah use panni , search input la type pandra text ah lower case ku mathurom , and used trim method ( removes unwanted space ) .
// 2. motha li yum , queryselectoe all use panni , forEach method use panni, each li ah "task" nu get pandrom.
// 3. each task layum a tag also irukku , so task oda first child na , li  textContent kedachurum , ippo atha lower case ah change panni , trim method use pandrom.
// 4. next condition use panni match agura text ah displaay panna vendiyathu than.
// 5. so ippo li oda text which means task ah "item" dra variable la vachurukkom, atha includes method use panni check pandrom.
// 6. if item includes nama search panna text  na , display pandrom illana display pannala.( none)  




















// ////////TRIED AGAIN ///

// // const form = document.querySelector("#task-form");
// // const input = document.querySelector("#task")
// // const  ul = document.querySelector(".collection")
// // const clearBtn = document.querySelector("#btn-test")
// // const  search = document.querySelector("#search")

// // loadEventListeners()

// // function loadEventListeners(){

// //     form.addEventListener("submit", addTask)

// //     clearBtn.addEventListener("click",clearTask)

// //     ul.addEventListener("click", removeTask)

// //     search.addEventListener("input", searchTask)
// // }

// //   function addTask(e) {

// //     e.preventDefault()

// //     if(input.value === ""){
// //         alert("please fill the fields")
// //     }
// //     else {
// //         // reason for creating li, naa kudukkura value iinga li ah store aganum.

// //         // so ceating a li

// //             /* here it li,  for reference
// //          <li class="collection-item">
// //                 List Item 3
// //                 <a href="#" class="delete-item secondary-content" id="test" title="im Link">
// //                   <i class="fa fa-remove"></i>
// //                 </a>
// //               </li>
// //         */
       

// //         const li = document.createElement("li") // elements should be double quoted

// //         li.className = "collection-item";

// //         li.innerText = input.value;

// //         //after creating a link beacuse li hs link in reference

// //         //create a link

// //         const link = document.createElement("a") // a tag.

// //         link.className = "delete-item secondary-content" ; // className.

// //         link.id = "test" ;

// //         link.title = "im Link";

// //         link.innerHTML =`<i class="fa fa-remove"></i>` // icon

// //         li.appendChild(link) // a tag to link

// //         console.log(li)

// //         ul.appendChild(li) // appended li in ul.

// //         // got value in ui

// //         //after append in ul , input value should be empty

// //         input.value = ""

    
// //     }

// // } 

// // function clearTask(){
// // //    if(confirm("are you sure to delete all task ?")) {
// // //     document.querySelector(".collection").remove()
// // //    }

// // // Alter way 
// // ul.innerHTML = ""; // oneline execution , targeted ul and set that innerHtml = "";

// // // Alter way 

// // // ul.remove()
    
// // }

// // function removeTask(e){
// // if(e.target.parentElement.classList.contains("delete-item")){ // e.i.a.li.ul >> parentElements.
// //     // console.log(e.target.parentElement.classList.contains("delete-item")) // displays true.
// //     // e.i.a >> classlist contains "delete-item"

// //     // next to remove li

// // //    e.target.parentElement.parentElement.innerHTML = ""// list la innerHtml la "" panna ulla irukka, contents mattum than remove agum, li list box apdiye irukkum, so instead use .remove()

// //    // li innerHtml remove agidum , which means li content , but that list box occurs.
  
// // e.target.parentElement.parentElement.remove()
// // }
// // }
// // function searchTask(e) { // task by javid bro , understand.
// //     const text = e.target.value.toLowerCase(); // Get the search input and convert to lowercase
// //     document.querySelectorAll(".collection-item").forEach(function(task){
// //         const item = task.firstChild.textContent.toLowerCase(); // Get task text
// //         if(item.indexOf(text) != -1){ // If the task contains the search input
// //             task.style.display = "block"; // Show the task
// //         } else {
// //             task.style.display = "none"; // Hide the task
// //         }
// //     });
// // }



// // next topic is practiced here (local storage.)
 
// // function storeTaskInLocalStorage(task){
    
// //     let tasks;

// //     if(localStorage.getItem("tasks") === null){

// //         tasks = [];

// //         tasks.push(task);

// //         localStorage.setItem("tasks", JSON.stringify(tasks));

// //         console.log("Step 1");
        
// //     } else {

// //         tasks = JSON.parse(localStorage.getItem("tasks"));

// //         tasks.push(task);

// //         localStorage.setItem("tasks", JSON.stringify(tasks));

// //         console.log("Step 2");

// //     }


// // }






//   // just practiced after month


// const form =  document.querySelector("#task-form"); // form
// const ul = document.querySelector(".collection")// ul
// const clearBtn= document.querySelector(".clear-tasks") // clear btn
// const input = document.querySelector("#task"); // input



// loadEventListeners()

// function loadEventListeners(){

//     // to manage functions 

//     form.addEventListener("submit", addTask)

//     ul.addEventListener("click", removeTask)

//     clearBtn.addEventListener("click", clearTask)

// }

// function addTask(e){

//     /*
     
//      <li class="collection-item">
//                 Web Networker
//                 <a href="#" class="delete-item secondary-content" id="test" title="im Link">
//                   <i class="fa fa-remove"></i>
//                 </a>
//               </li>

//     */

//     e.preventDefault();

//     const li = document.createElement("li");

//     li.className = "collection-item";

//     li.id= "test" ;

//     li.title="im Link";

//     li.innerText = input.value;

//     const a = document.createElement("a");

//     a.className = "delete-item secondary-content"

//     // for icon we have to use innerHtml

//     a.innerHTML = `<i class="fa fa-remove"></i>`; // with backticks.

//     li.appendChild(a);

//     ul.prepend(li);

//     // input.value ="";

//     form.reset();

   
// }

// // REMOVE TASK 

// function removeTask(e){

// //   console.log( e.target.parentElement)

//   if(e.target.parentElement.classList.contains("delete-item")){

//     confirm("Are you sure to delete ?") 
         
//     e.target.parentElement.parentElement.remove() // removing

    
    
//   }

// }

// // clear all task

// function clearTask(){

//     confirm("Are you sure to delete all task ?")

//     ul.innerHTML ="";

    
// }


// const form = document.querySelector("#task-form");
// const taskInput = document.querySelector("#task");
// const taskLists = document.querySelector(".collection");
// const search = document.querySelector("#search");
// const clearBtn = document.querySelector(".clear-tasks");


// const addTask = (e)=>{
//     e.preventDefault();
//     //   <li class="collection-item">
//     //             Medical Checkup
//     //             <a href="#" class="delete-item secondary-content" id="test" title="im Link">
//     //               <i class="fa fa-remove"></i>
//     //             </a>
//     //           </li>
//     const task = document.createElement("li");
//     task.className = "collection-item";
//     task.innerText = taskInput.value;
//     const a = document.createElement("a");
//     a.className = "delete-item secondary-content";
//     a.id = "test";
//     a.title = "im Link"
//     a.innerHTML=`<i class="fa fa-remove"></i>`;
//     task.appendChild(a);
//     taskLists.appendChild(task)

//     // 
//     form.reset()
// }

// const removeTask = (e) =>{
    
//     if(e.target.parentElement.classList.contains("delete-item")){
//         if(confirm("Are you sure to remove task ?")){
//             e.target.parentElement.parentElement.remove()
//         }
//     }
   
// }

// const clearAllTask = () => {
//   // Check if there are no tasks first
//   if (taskLists.innerHTML.trim() === "") {
//     alert("Task field is empty...");
//     return; // Exit the function
//   }

//   // Ask for confirmation only if tasks exist
//   if (confirm("Are you sure to delete all tasks ?")) {
//     taskLists.innerHTML = "";
//   }
// };

// const searchTask = () => {
//   const searchValue = search.value.toLowerCase(); // Get input value

//   const allTask = document.querySelectorAll(".collection-item");

//   allTask.forEach((task) => {
//     const taskText = task.textContent.toLowerCase(); // Get task text

//     if (taskText.includes(searchValue)) {
//       task.style.display = "block";  // Show task
//     } else {
//       task.style.display = "none";   // Hide task
//     }

   
//   });

// };

// // Trigger search on input
// search.addEventListener("keyup", searchTask);
// form.addEventListener("submit", addTask);
// taskLists.addEventListener("click", removeTask)
// clearBtn.addEventListener("click", clearAllTask)
// search.addEventListener("input", searchTask)



