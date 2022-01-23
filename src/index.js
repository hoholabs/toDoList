import './style.css';
import { format, compareAsc } from 'date-fns';
import { addNav } from './nav.js';
import { addTask, createTask, newTask, createNewTaskBtn, showTasks } from './tasks';



//let mainContainer = document.getElementById('main-container');

addNav();
createNewTaskBtn();
newTask();

//ATTRIBUTES

// Three Dot by wahyakup from NounProject.com
