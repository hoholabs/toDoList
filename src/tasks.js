import threeDots from './noun-three-dot-4287657.svg';


let mainContainer = document.getElementById('main-container');

const taskList = [];

//function to call to make tasks
function createTask(name,desc,due,priority){
    return{
      name:name,
      desc:desc,
      due:due,
      priority:priority
    }
  }
  
//function to add the task to the list
function addTask (task){
taskList.push(task);
};

//function to show tasklist in DOM

export function showTasks(){

taskList.forEach(element => {

    //creates a div for the task
    let task = document.createElement('div')
    task.className = 'task';    

    //loops through each element in the object to create an input,
    // assign a classname, value, and append it to the task
    for (const prop in element) {
        if (Object.hasOwnProperty.call(element, prop)) {            
            let input = document.createElement('input');
            input.classList.add('task-item',prop);
            input.value = element[prop];
            task.append(input);              
        }
    }
    //add edit button to task
    task.append(addEditTaskBtn());

    //adds the task at the bottom of the main container
    mainContainer.append(task);
    });
};

//function to add a new blank task
function newTask(){
    let blankTask = createTask(' ',' ',' ',' ');
    addTask(blankTask);
};

// //create the edit task button
function addEditTaskBtn(){
const editTaskBtn = document.createElement('button');
editTaskBtn.id = 'edit-task-button';
//editTaskBtn.textContent = '+';
const editIcon = new Image();
editIcon.src = threeDots;
editTaskBtn.append(editIcon);
return editTaskBtn;
};

//function to create add blank task button
export function createNewTaskBtn(){
    let newTaskBtn = document.createElement('button');
    newTaskBtn.textContent = '+';
    mainContainer.append(newTaskBtn);
}


//example tasks
const task1 = createTask('Task', 'Description', 'Due date', 'Priority');
addTask(task1);
const task2 = createTask('Do the Dishes', 'Gotta wash wash wash wash', '22/04/20', '5');
addTask(task2);
newTask();
//addEditTaskBtn();

