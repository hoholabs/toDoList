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
    getDocs,
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

//get tabs from firebase
let cloudTabsQuery = await getDocs(collection(db, 'tabs'));
let cloudTabsArray = [];
cloudTabsQuery.forEach((tab) => {
    let tabData = tab.data();
    let tabObj = {};
    tabObj.name = tabData.tab.name;
    tabObj.tabId = tabData.tab.tabId;
    cloudTabsArray.push(tabObj);
});
if (cloudTabsArray.length === 0) {
    //if no tabs, create a 'main' tab
    newTab('main');
}
getTabList(cloudTabsArray);

//get tasks from firebase
let cloudTasksQuery = await getDocs(collection(db, 'tasks'));
let cloudTasksArray = [];
cloudTasksQuery.forEach((task) => {
    let taskData = task.data();
    cloudTasksArray.push(taskData.task);
});
getTaskList(cloudTasksArray);

showTasks();
showTabs();

//future ideas

//ability to move tasks between tabs
//sorting/moving tasks within tab
//tab colors
