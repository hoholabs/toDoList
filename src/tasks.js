import { getTab } from './nav.js';
import { taskMenuBtn, expandBtn, priorityDropdown, colorPriority} from './editTask.js';

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
    //sconsole.log(taskList);
    showTasks();
}

//function to change task

export function changeTask(index,prop,value){
    taskList[index][prop] = value;
};

//function to call to make tasks
export function createTask(name,desc,due,priority,inTab){
    return{
      name:name,
      desc:desc,
      due:due,
      priority:priority,
      inTab:inTab
    }
  }
  
//function to add the task to the list
export function addTask (task){
    //console.log(taskList);
    taskList.push(task);
    saveTaskList();
    //console.log(localStorage);
    //console.log(localStorage.getObj('taskList'));

    //console.log(importlist);

};

//function to write tasklist to local storage

export function saveTaskList(){
    localStorage.setObj('taskList', taskList);
}



//function to show tasklist in DOM

export function showTasks(tab){
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
        for (const prop in element) {
            if (Object.hasOwnProperty.call(element, prop)) {            
                let div = document.createElement('div');
                div.classList.add('task-item',prop);
                div.textContent = element[prop];
                task.append(div);              
            }
        }
        //add menu button to task
        task.append(taskMenuBtn());

        //assign each task an id
        task.id = `task-${i}`;

        //color the priority
        let color = colorPriority(element.priority);
        let priority = task.querySelector('.priority');
        priority.style.cssText = `background-color: ${color}; color: ${color}`

        //adds the task at the bottom of the main container
        mainContainer.append(task);
    }
    
    i++
});

createNewTaskBtn();
};

//function to add a new task

export function newTask(){
    //remove the new task button
    let newTaskBtn = document.getElementById('new-task-btn');
    newTaskBtn.remove();

    //Create a task line made of inputs
    let newTask = document.createElement('div')
    newTask.className = 'task';    

    let element = createTask('','','','','');

    for (const prop in element) {
        if (Object.hasOwnProperty.call(element, prop)) {
            let input = document.createElement('input');
            input.classList.add('task-item', prop)
            input.id = `new-task-${prop}`;
            input.value = element[prop]
            newTask.append(input);
        }
    }

    //adding the "OK" button
    let okBtn = document.createElement('button');
    okBtn.id = "ok-btn";
    okBtn.textContent = "OK";
    okBtn.addEventListener('click', function() {
        //console.log("ok");
        let newTaskName = document.getElementById('new-task-name').value;
        let newTaskDesc = document.getElementById('new-task-desc').value;
        let newTaskDue = document.getElementById('new-task-due').value;
        let newTaskPriority = document.getElementById('new-task-priority').value;
        let newTaskinTab = getTab();
        
        let newTask = createTask(newTaskName,newTaskDesc,newTaskDue,newTaskPriority,newTaskinTab);
        addTask(newTask);
        showTasks();
    });
    newTask.append(okBtn);
    


    mainContainer.append(newTask);
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
    showTasks();
}


