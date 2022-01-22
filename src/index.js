import './style.css';
import { format, compareAsc } from 'date-fns';
import { addNav } from './nav.js';
import { createTask, addTask, showTasks, addEditTaskBtn} from './tasks';



let mainContainer = document.getElementById("main-container");

clear();
addNav();
showTasks();

//function to clear the main container
function clear(){
  mainContainer.innerHTML = '';
}

//ATTRIBUTES

// Three Dot by wahyakup from NounProject.com
