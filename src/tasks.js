import { getTab } from './tabs.js';
import { taskMenuBtn, expandBtn, editTask, colorPriority } from './editTask.js';
import { db } from './index.js';
import {
    getFirestore,
    collection,
    doc,
    getDocs,
    setDoc
} from 'firebase/firestore';
//import { createCalendar, formatDate} from './calendar.js';

let mainContainer = document.getElementById('main-container');

//extend functionality of local storage to allow for arrays and objects
Storage.prototype.setObj = function (key, obj) {
    return this.setItem(key, JSON.stringify(obj));
};
Storage.prototype.getObj = function (key) {
    return JSON.parse(this.getItem(key));
};

let taskList = [];

//function to overwrite taskList
export function getTaskList(newTaskList) {
    console.log(newTaskList);
    grabTaskList();
    taskList = newTaskList;
    // showTasks();
}

async function grabTaskList() {
    let cloudTasksQuery = await getDocs(collection(db, 'tasks'));
    let cloudTasksArray = [];
    cloudTasksQuery.forEach((task) => {
        let taskData = task.data();
        // console.log(taskData.task);
        cloudTasksArray.push(taskData.task);
    });
    console.log(cloudTasksArray);
}

//function to change task
export function changeTask(index, prop, value) {
    taskList[index][prop] = value;
}

//function to create and return a task

export function createTask(name, desc, due, priority, inTab, strike, taskId) {
    //pre-firebase style code below
    return {
        name: name,
        desc: desc,
        due: due,
        priority: priority,
        inTab: inTab,
        strike: strike,
        taskId: new Date().getTime().toString()
    };
}

//function to add the task to the list
export function addTask(task) {
    taskList.push(task);
    saveTaskList();
}

//function to write tasklist to local storage
export function saveTaskList() {
    localStorage.setObj('taskList', taskList);
    taskList.forEach((task) => {
        storeTask(task);
    });
}
async function storeTask(task) {
    // console.log(task.name);
    await setDoc(doc(db, 'tasks', task.taskId), {
        task
    });
}

//function to show tasklist in DOM
export function showTasks() {
    clearTasks();
    //i to track which index of taskList code is checking
    var i = 0;

    //look through every element of the trasklist
    taskList.forEach((element) => {
        // if the current task's 'intab' is the same as current tab
        if (element.inTab == getTab()) {
            //creates a div for the task
            let task = document.createElement('div');
            task.className = 'task';

            //append expand button
            task.append(expandBtn());

            //show displayed divs
            let shownDivs = ['name', 'due', 'desc', 'priority'];

            for (let index = 0; index < shownDivs.length; index++) {
                //const element = array[index];
                let div = document.createElement('div');
                div.classList.add('task-item', shownDivs[index]);
                div.textContent = element[shownDivs[index]];
                task.append(div);
            }

            //adds strikethrough
            if (element.strike == true) {
                task.querySelector('.name').style.textDecoration =
                    'line-through';
                task.querySelector('.due').style.textDecoration =
                    'line-through';
            }

            //assign each task an id
            task.id = `task-${i}`;

            //add a label

            //color the priority
            let color = colorPriority(element.priority);
            let label = document.createElement('i');
            label.classList.add('material-icons', 'label');
            label.textContent = 'label';
            label.style.color = color;
            const labelDiv = document.createElement('div');
            labelDiv.classList.add('label-div');
            labelDiv.append(label);
            task.append(labelDiv);

            //add menu button to task
            task.append(taskMenuBtn(`task-${i}`));

            //adds the task at the bottom of the main container
            mainContainer.append(task);
        }

        i++;
    });

    createNewTaskBtn();
}

//function to add a new task
export function newTask() {
    //create blank task and then edit it

    let newTask = createTask('', '', '', '', getTab(), 'false');
    addTask(newTask);
    showTasks();
    editTask(`task-${taskList.length - 1}`);
}

//function to clear all tasks
export function clearTasks() {
    const array = document.querySelectorAll('.task');
    array.forEach((element) => {
        element.remove();
    });

    let newTaskBtn = document.getElementById('new-task-btn');
    if (newTaskBtn != null) {
        newTaskBtn.remove();
    }
}

//function to create add blank task button
export function createNewTaskBtn() {
    let newTaskBtn = document.createElement('button');
    newTaskBtn.textContent = '+';
    newTaskBtn.id = 'new-task-btn';
    newTaskBtn.addEventListener('click', newTask);
    mainContainer.append(newTaskBtn);
}

//function to find a task by its id
export function findTask(id) {
    let index = id.slice(5);
    return index;
}

//function to remove a task
export function deleteTask(index) {
    taskList.splice(index, 1);
}

//function to return a task
export function getTask(index) {
    return taskList[index];
}

export function deleteTasks(tab) {
    for (let index = taskList.length - 1; index >= 0; index--) {
        if (tab === taskList[index].inTab) {
            deleteTask(index);
        }
        showTasks();
    }
}

export function editTasks(prop, value, newValue, index) {
    if (index) {
        //in case I want to only target one index.. can write later

        return;
    }
    //if no index, changes all instances of value to newValue
    for (let i = taskList.length - 1; i >= 0; i--) {
        if (taskList[i][prop] === value) {
            console.log(taskList[i][prop]);
            taskList[i][prop] = newValue;
        }
    }
    saveTaskList();
    showTasks();
}
