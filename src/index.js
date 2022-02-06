import './style.css';
import { format, compareAsc } from 'date-fns';
import { showTabs } from './tabs.js';
import { setTaskList, createTask, newTask, addTask, showTasks } from './tasks';


// let mainContainer = document.createElement('main');
// mainContainer.id = 'main-container';
// document.body.appendChild(mainContainer);

showTabs();

//function to read local storage
//set empty array if empty... set stored tasklist otherwise
if(!localStorage.getItem('taskList')) {
  console.log("local storage is empty");
  newTask();
} else {
  setTaskList(localStorage.getObj('taskList'));
}
