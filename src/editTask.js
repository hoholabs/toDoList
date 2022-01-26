import threeDots from './noun-three-dot-4287657.svg';
import { changeTask, findTask, deleteTask, showTasks } from './tasks';

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
        editTaskPopup.style.display = "grid";
    });
    //append the button to the div
    taskMenuDiv.append(taskMenuBtn);
    return taskMenuDiv;
    };



//function to hide all (task menu) popups
function hidePopups(){
    //console.log("hide popups");

    document.querySelectorAll('.task-menu-popup').forEach(element => {
        //console.log(element);
        element.style.display = "none";
    });
}

//function to edit a task
function editTask(){
    hidePopups();

    let thisTask = this.parentNode.parentNode.parentNode;

    //makes all cells editable
    thisTask.childNodes.forEach(element => {
        element.contentEditable = "true";   
    });

    //hide the menu button
    let menuBtn = this.parentNode.parentNode
    //console.log(menuBtn);
    menuBtn.style.display = "none";

    //add "OK" button
    let okBtn = document.createElement("button");
    okBtn.textContent = "OK";
    okBtn.id = 'task-edit-ok-btn';
    thisTask.append(okBtn);

    //add function to ok button to do stuff
    okBtn.addEventListener('click', function(){
        //make thisTask content not editable
        thisTask.childNodes.forEach(element => {
            element.contentEditable = "false";   
        });
        //save the edited data to the tasklist
        //console.log(findTask(thisTask.id));
        //console.log(thisTask.childNodes);
        //showTaskList();
        //console.log(thisTask.querySelectorAll('.task-item'));
        //console.log(thisTask.querySelectorAll('.task-item')[0].textContent);
        // thisTask.querySelectorAll('.task-item').forEach(element => {
        //     console.log(element.textContent);
        //     console.log(element);
            
        // });
        let index = findTask(thisTask.id)
        let name = thisTask.querySelectorAll('.task-item')[0].textContent
        let desc = thisTask.querySelectorAll('.task-item')[1].textContent
        let due = thisTask.querySelectorAll('.task-item')[2].textContent
        let priority = thisTask.querySelectorAll('.task-item')[3].textContent

        changeTask(index,'name',name);
        changeTask(index,'desc',desc);
        changeTask(index,'due',due);
        changeTask(index,'priority',priority);

        //showTasks();

        //remove the ok button
        document.getElementById('task-edit-ok-btn').remove();
        //show menu button again
        menuBtn.style.display = "block";
    });


}

//function to strikeout a task
function crossoutTask(){
    hidePopups();

    //console.log("crossout");
    // console.log(this.parentNode.parentNode.parentNode);
    this.parentNode.parentNode.parentNode.style.textDecoration= "line-through";
}

//function to remove a task
function removeTask(){
    hidePopups();

    let index = findTask(this.parentNode.parentNode.parentNode.id);
    deleteTask(index);

}