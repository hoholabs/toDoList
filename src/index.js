import './style.css';
// import { format, compareAsc } from 'date-fns';
import { newTab, getTabList, showTabs } from './tabs.js';
import { getTaskList, createTask, newTask, addTask, showTasks } from './tasks';

//FIREBASE
// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import {
    getFirestore,
    collection,
    doc,
    addDoc,
    setDoc
} from 'firebase/firestore';

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
export const db = getFirestore(app);

// function sendTask(value) {
//     console.log(value);
// }

// let mainContainer = document.getElementById('main-container');
// let testbox = document.createElement('div');
// testbox.id = 'testbox';
// let testinput = document.createElement('input');
// testinput.id = 'testinput';
// let testbutton = document.createElement('button');
// testbutton.addEventListener('click', () => {
//     sendTask(testinput.value);
// });
// testbutton.id = 'testbutton';

// testbox.append(testinput);
// testbox.append(testbutton);
// mainContainer.append(testbox);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//load tasks from database

//this works, sets a task
// await setDoc(doc(db, 'tasks', 'task1'), {
//     name: 'name',
//     desc: 'desc',
//     due: 'due',
//     priority: 'priority',
//     inTab: 'inTab',
//     strike: 'strike'
// });

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//function to read local storage

// localStorage.clear();
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
    // newTask();
    //set stored tasklist otherwise
} else {
    getTaskList(localStorage.getObj('taskList'));
    //console.log(localStorage.getObj('taskList'));
}

showTasks();
showTabs();

//future ideas

//ability to move tasks between tabs
//sorting/moving tasks within tab
//tab colors
