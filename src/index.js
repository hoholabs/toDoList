import './style.css';
import { format, compareAsc } from 'date-fns';
import { addNav } from './nav.js';
import { setTaskList, createTask, newTask, createNewTaskBtn, showTasks } from './tasks';

//let mainContainer = document.getElementById('main-container');

addNav();
//localStorage.clear()
//addTask(createTask("example1","description1","1/1/2021","1","main"));
//addTask(createTask("example2","description2","1/2/2021","2","main"));
showTasks();


//function to read local storage, 
//set empty array if empty... set stored tasklist otherwise

if(!localStorage.getItem('taskList')) {
  console.log("local storage is empty");
} else {
  setTaskList(localStorage.getObj('taskList'));
}

//ATTRIBUTES

// Three Dot by wahyakup from NounProject.com
