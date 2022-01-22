import './style.css';
import Icon from './icon.png';
import { format, compareAsc } from 'date-fns'

let mainContainer = document.getElementById("main-container");

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

function showTasks(array){

  array.forEach(element => {
  //console.log(array)
  let task = document.createElement("div")
  task.className = "task";

  let name = document.createElement("div")
  name.textContent = element.name;
  let desc = document.createElement("div")
  desc.textContent = element.desc;
  let due = document.createElement("div")
  due.textContent = element.due;
  let priority = document.createElement("div")
  priority.textContent = element.priority;
    //shorten this ^ all to a loop later

  task.append(name);
  task.append(desc);
  task.append(due);
  task.append(priority);
  console.log(task)
  mainContainer.append(task);
  });

}


//function to clear the main container

function clear(){
  mainContainer.innerHTML = '';
}


//example task
const task1 = createTask("first task", "This is my first task, I should do it", "2022/04/20", 5);
//console.log(task1);
addTask(task1);
//console.log(taskList);
showTasks(taskList);
