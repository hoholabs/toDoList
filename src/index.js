import './style.css';
import { format, compareAsc } from 'date-fns';
import { addNav } from './nav.js';
import { addTask, createTask, newTask, createNewTaskBtn, showTasks } from './tasks';



let mainContainer = document.getElementById('main-container');

//clear();
addNav();
addTask(createTask('Task', 'Description', 'Due date', 'Priority'));
//newTask();
showTasks();
createNewTaskBtn();


//function to clear the main container
// function clear(){
//   mainContainer.innerHTML = '';
// }

//ATTRIBUTES

// Three Dot by wahyakup from NounProject.com
