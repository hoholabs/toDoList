import './style.css';
import { format, compareAsc } from 'date-fns';
import { newTab, getTabList, showTabs } from './tabs.js';
import { getTaskList, createTask, newTask, addTask, showTasks } from './tasks';

//localStorage.clear();

//function to read local storage

//create new tab popup
if(!localStorage.getItem('tabList')) {
  console.log("local tabList is empty");
  newTab("main");
  //something else here later
} else{
  getTabList(localStorage.getObj('tabList'));
  //console.log("local tabList exists");
  //console.log(localStorage.getObj('tabList'));
}

//set tasks empty array if empty
if(!localStorage.getItem('taskList')) {
  console.log("local taskList is empty");
  //newTask();
//set stored tasklist otherwise
} else {
  getTaskList(localStorage.getObj('taskList'));
  //console.log(localStorage.getObj('taskList'));
}



//showTabsOld();
showTasks();
showTabs();

//future ideas

//ability to move tasks between tabs
//sorting/moving tasks within tab
//tab colors
