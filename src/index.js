import './style.css';
import Icon from './icon.png';
import { format, compareAsc } from 'date-fns';
import { addNav } from './nav.js';
import { createTask, addTask, showTasks} from './tasks';


let mainContainer = document.getElementById("main-container");

clear();
addNav();
showTasks();
//function to clear the main container
function clear(){
  mainContainer.innerHTML = '';
}

