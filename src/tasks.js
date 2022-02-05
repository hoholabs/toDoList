import { getTab } from './nav.js';
import { taskMenuBtn, expandBtn, editTask, colorPriority} from './editTask.js';
import { createCalendar, formatDate} from './calendar.js';

let mainContainer = document.getElementById('main-container');

//extend functionality of local storage to allow for arrays and objects
Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

let taskList = [];

//function to overwrite taskList
export function setTaskList(newTaskList){
    taskList = newTaskList;
    showTasks();
}

//function to change task

export function changeTask(index,prop,value){
    taskList[index][prop] = value;
};

//function to call to make tasks
export function createTask(name,desc,due,priority,inTab,strike){
    return{
      name:name,
      desc:desc,
      due:due,
      priority:priority,
      inTab:inTab,
      strike:strike
    }
  }
  
//function to add the task to the list
export function addTask (task){

    taskList.push(task);
    saveTaskList();
};

//function to write tasklist to local storage

export function saveTaskList(){
    localStorage.setObj('taskList', taskList);
}



//function to show tasklist in DOM

export function showTasks(){
clearTasks();
//i to track which index of taskList code is checking
var i=0

//look through every element of the trasklist
taskList.forEach(element => {

    // if the current task's 'intab' is the same as current tab
    if(element.inTab == getTab()){

        //creates a div for the task
        let task = document.createElement('div')
        task.className = 'task';    

        //append expand button
        task.append(expandBtn());

        //loops through each element in the object to create an input,
        // assign a classname, value, and append it to the task
        // for (const prop in element) {
        //     if (Object.hasOwnProperty.call(element, prop)) {            
        //         let div = document.createElement('div');
        //         div.classList.add('task-item',prop);
        //         div.textContent = element[prop];
        //         task.append(div);              
        //     }
        // }


        // add name
        let nameDiv = document.createElement('div');
        nameDiv.classList.add('task-item','name');
        nameDiv.textContent = element.name;
        task.append(nameDiv);   
        
        //add due date
        let dueDiv = document.createElement('div');
        dueDiv.classList.add('task-item','due');
        dueDiv.textContent = element.due;
        //console.log(element);
        //console.log(element.due);
        task.append(dueDiv);   

        //add description

        let descDiv = document.createElement('div');
        descDiv.classList.add('task-item','desc');
        descDiv.textContent = element.desc;
        task.append(descDiv);   

        //add priority

        let priorityDiv = document.createElement('div');
        priorityDiv.classList.add('task-item','priority');
        priorityDiv.textContent = element.priority;
        task.append(priorityDiv);   

        //adds strikethrough
        // let strike = task.querySelector('.strike').textContent;
        // if (strike == "true") {
        //     task.querySelector('.name').style.textDecoration= "line-through"
        //     task.querySelector('.due').style.textDecoration= "line-through"
        // };
        
        //assign each task an id
        task.id = `task-${i}`;

        //add a label


            //color the priority
        let color = colorPriority(element.priority);
        let label = document.createElement('i');
        label.classList.add('material-icons','label');
        label.textContent = "label";
        label.style.color = color;
        const labelDiv = document.createElement('div')
        labelDiv.classList.add('label-div');
        labelDiv.append(label);
        task.append(labelDiv);

        //add menu button to task
        task.append(taskMenuBtn(`task-${i}`));

        //adds the task at the bottom of the main container
        mainContainer.append(task);
    }
    
    i++
});

createNewTaskBtn();
//mainContainer.append(createCalendar(2022,1));
};

//function to add a new task 

export function newTask(){
    //create blank task and then edit it
    let newTask = createTask('','','','',getTab(),'false');
    addTask(newTask);
    showTasks();
    //find the newest, blank task
    //console.log(taskList.length-1);
    editTask(`task-${taskList.length-1}`);
}

//function to clear all tasks
function clearTasks(){
    //console.log("clear started");
    const array = document.querySelectorAll('.task');
    array.forEach(element => {        
        element.remove();
    });
    let newTaskBtn = document.getElementById("new-task-btn")
    if (newTaskBtn != null){
    newTaskBtn.remove();
    };
    //console.log("clear finished");
};

//function to create add blank task button
export function createNewTaskBtn(){
    let newTaskBtn = document.createElement('button');
    newTaskBtn.textContent = '+';
    newTaskBtn.id = "new-task-btn";
    newTaskBtn.addEventListener('click',newTask); 
    mainContainer.append(newTaskBtn);
}

//function to find a task by its id

export function findTask(id){
    let index = id.slice(5);
    return index
}

//function to remove a task

export function deleteTask(index) {
    taskList.splice(index, 1);
}

export function getTask(index) {
    return taskList[index];
}
