import { getTab } from './nav.js';
import { taskMenuBtn } from './editTask.js';

let mainContainer = document.getElementById('main-container');

const taskList = [];

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
    console.log("add task");
    taskList.push(task);
    console.log(taskList);
};

//function to show tasklist in DOM

export function showTasks(tab){
clearTasks();

taskList.forEach(element => {
    //console.log(getTab());
    //console.log(element.inTab);

    if(element.inTab == getTab()){

        //creates a div for the task
        let task = document.createElement('div')
        task.className = 'task';    

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
        //add edit button to task
        task.append(taskMenuBtn());

        //adds the task at the bottom of the main container
        mainContainer.append(task);
        }
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
        console.log("ok");
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
    console.log("clear started");
    const array = document.querySelectorAll('.task');
    array.forEach(element => {        
        element.remove();
    });
    let newTaskBtn = document.getElementById("new-task-btn")
    if (newTaskBtn != null){
    newTaskBtn.remove();
    };
    console.log("clear finished");
};

// //create the edit task button
// function addtaskMenuBtn(){
// const taskMenuBtn = document.createElement('button');
// taskMenuBtn.id = 'edit-task-button';
// const editIcon = new Image();
// editIcon.src = threeDots;
// taskMenuBtn.append(editIcon);
// return taskMenuBtn;
// };

//function to create add blank task button
export function createNewTaskBtn(){
    let newTaskBtn = document.createElement('button');
    newTaskBtn.textContent = '+';
    newTaskBtn.id = "new-task-btn";
    newTaskBtn.addEventListener('click',newTask); 
    mainContainer.append(newTaskBtn);
}

