import threeDots from './noun-three-dot-4287657.svg';
import { findTask, deleteTask } from './tasks';

//create and return the edit task button

export function taskMenuBtn(){
    const taskMenuDiv = document.createElement('div');
    const taskMenuBtn = document.createElement('button');
    taskMenuBtn.classList.add('task-menu-button');
    const editIcon = new Image();
    editIcon.src = threeDots;
    taskMenuBtn.append(editIcon);

    //create task popup
    let editTaskPopup = document.createElement('div');
    editTaskPopup.classList.add('task-menu-popup')

    //add menu buttons to the popup

    let taskEditBtn = document.createElement('button');
    taskEditBtn.textContent = "edit";
    taskEditBtn.addEventListener('click', editTask)
    editTaskPopup.append(taskEditBtn)

    let taskCrossBtn = document.createElement('button');
    taskCrossBtn.textContent = "cross-out";
    taskCrossBtn.addEventListener('click', crossoutTask);
    editTaskPopup.append(taskCrossBtn)

    let taskRemoveBtn = document.createElement('button');
    taskRemoveBtn.textContent = "remove";
    taskRemoveBtn.addEventListener('click', removeTask);
    editTaskPopup.append(taskRemoveBtn)

    //append the popup to the menu div
    taskMenuDiv.append(editTaskPopup);

    //add even listener to button to show popup
    taskMenuBtn.addEventListener('click', function(){
        console.log("menu");
        editTaskPopup.style.display = "grid";
    });
    //append the button to the div
    taskMenuDiv.append(taskMenuBtn);
    return taskMenuDiv;
    };

//function to hide all (task menu) popups
function hidePopups(){
    console.log("hide popups");
    console.log(document.querySelectorAll('.task-menu-popup'));

    document.querySelectorAll('.task-menu-popup').forEach(element => {
        //console.log(element);
        element.style.display = "none";
    });
}

//function to edit a task
function editTask(){
    console.log("edit");
    let thisTask = this.parentNode.parentNode.parentNode;
    console.log(thisTask);

}

//function to strikeout a task
function crossoutTask(){
    console.log("crossout");
    console.log(this.parentNode.parentNode.parentNode);
    this.parentNode.parentNode.parentNode.style.textDecoration= "line-through";
}

//function to remove a task
function removeTask(){
    hidePopups();
    console.log("remove");
    let index = findTask(this.parentNode.parentNode.parentNode.id);
    console.log(index);
    deleteTask(index);

}