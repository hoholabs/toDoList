import threeDots from './noun-three-dot-4287657.svg';
import { changeTask, findTask, deleteTask, saveTaskList, showTasks } from './tasks';

//create and return the edit task button

export function taskMenuBtn(){
    const taskMenuDiv = document.createElement('div');
    taskMenuDiv.classList.add('task-menu-button');
    const taskMenuBtn = document.createElement('button');
    taskMenuBtn.classList.add('task-menu-button');
    const editIcon = document.createElement('i');
    editIcon.classList.add('material-icons');
    editIcon.textContent  = 'menu';
    // const editIcon = new Image();
    // editIcon.src = threeDots;
    taskMenuBtn.append(editIcon);

    //create task popup
    let editTaskPopup = document.createElement('div');
    editTaskPopup.classList.add('task-menu-popup')

    //add menu buttons to the popup

    let taskEditBtn = document.createElement('button');
    taskEditBtn.textContent = "edit";
    taskEditBtn.addEventListener('click', editTask)
    taskEditBtn.classList.add('task-edit-popup-btn');
    editTaskPopup.append(taskEditBtn)

    let taskCrossBtn = document.createElement('button');
    taskCrossBtn.textContent = "cross-out";
    taskCrossBtn.addEventListener('click', crossoutTask);
    taskCrossBtn.classList.add('task-edit-popup-btn');
    editTaskPopup.append(taskCrossBtn)

    let taskRemoveBtn = document.createElement('button');
    taskRemoveBtn.textContent = "remove";
    taskRemoveBtn.addEventListener('click', removeTask);
    taskRemoveBtn.classList.add('task-edit-popup-btn');
    editTaskPopup.append(taskRemoveBtn)

    //append the popup to the menu div
    taskMenuDiv.append(editTaskPopup);

    //add even listener to button to show popup
    taskMenuBtn.addEventListener('click', function(){
        editTaskPopup.style.display = "grid";
    });

    //add event listener to hide popup on mouseleave
    editTaskPopup.addEventListener('mouseleave', function(){
        editTaskPopup.style.display = "none";
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
        element.classList.add('editing'); 
    });

    //shows description
    let thisDesc = thisTask.querySelector('.desc');
    thisDesc.classList.add('show-desc');

    //hide the menu button
    let menuBtn = this.parentNode.parentNode
    //console.log(menuBtn);
    menuBtn.style.display = "none";

    //add "OK" button
    let okBtn = document.createElement('i');
    okBtn.textContent = "done";
    okBtn.id = 'task-edit-ok-btn';
    okBtn.classList.add('material-icons');
    thisTask.append(okBtn);

    //add function to ok button to do stuff
    okBtn.addEventListener('click', function(){
        //make thisTask content not editable
        thisTask.childNodes.forEach(element => {
            element.contentEditable = "false";
            element.classList.remove('editing');    
        });
        //save the edited data to the tasklist

        //brute forced.. ugly.. fix later

        let index = findTask(thisTask.id)
        let name = thisTask.querySelectorAll('.task-item')[0].textContent
        let desc = thisTask.querySelectorAll('.task-item')[1].textContent
        let due = thisTask.querySelectorAll('.task-item')[2].textContent
        let priority = thisTask.querySelectorAll('.task-item')[3].textContent

        changeTask(index,'name',name);
        changeTask(index,'desc',desc);
        changeTask(index,'due',due);
        changeTask(index,'priority',priority);

        thisDesc.classList.remove('show-desc');

        //remove the ok button
        document.getElementById('task-edit-ok-btn').remove();
        //show menu button again
        menuBtn.style.display = "block";

        saveTaskList();
        showTasks();

    });


}

//function to strikeout a task
function crossoutTask(){
    hidePopups();
    this.parentNode.parentNode.parentNode.style.textDecoration= "line-through";
}

//function to remove a task
function removeTask(){
    hidePopups();

    let index = findTask(this.parentNode.parentNode.parentNode.id);
    deleteTask(index);
    saveTaskList();

}

export function colorPriority(num){
    let colors = ['red','orange','yellow','green','blue','white'];
    return colors[num];

}

export function priorityDropdown(){
    let colors = ['red','orange','yellow','green','blue','white'];

    let dropDown = document.createElement('div')

    for (let index = 0; index < colors.length; index++) {
        let button = document.createElement('button')
        button.style.backgroundColor = colors[index];
        dropDown.append(button);
    }

    return dropDown;

}

export function expandBtn(){
    let expandButton = document.createElement('i');
    expandButton.classList.add('material-icons', 'expand-button');
    expandButton.textContent = 'expand_more';
    expandButton.addEventListener('click', function(){
        let thisTask = this.parentNode;
        //toggle "show description"
        thisTask.querySelector('.desc').classList.toggle('show-desc')
        //toggle icon
        this.textContent == 'expand_more' ? this.textContent = 'expand_less' : this.textContent = 'expand_more'; 
    })
    return expandButton;
}
