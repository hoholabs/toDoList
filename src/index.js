import './style.css';
// import { format, compareAsc } from 'date-fns';
import { newTab, getTabList, showTabs } from './tabs.js';
import { getTaskList, createTask, newTask, addTask, showTasks } from './tasks';

//FIREBASE
// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: 'AIzaSyAn0fiSwFv75JftYKnqXqex0n5kojCu_Ls',
    authDomain: 'todo-1f6da.firebaseapp.com',
    projectId: 'todo-1f6da',
    storageBucket: 'todo-1f6da.appspot.com',
    messagingSenderId: '937451496929',
    appId: '1:937451496929:web:bfff12c69cba203f389ea0'
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

//function to read local storage

//create new tab popup
if (!localStorage.getItem('tabList')) {
    console.log('local tabList is empty');
    newTab('main');
    //something else here later
} else {
    getTabList(localStorage.getObj('tabList'));
    //console.log("local tabList exists");
    //console.log(localStorage.getObj('tabList'));
}

//set tasks empty array if empty
if (!localStorage.getItem('taskList')) {
    console.log('local taskList is empty');
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
