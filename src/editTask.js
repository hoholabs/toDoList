import {
    changeTask,
    findTask,
    deleteTask,
    saveTaskList,
    showTasks,
    getTask
} from './tasks';
import { getMonth, getYear, format } from 'date-fns';
import { createCalendar, formatDate } from './calendar.js';

//create and return the edit task button

export function taskMenuBtn(taskId) {
    const taskMenuDiv = document.createElement('div');
    taskMenuDiv.classList.add('task-menu-button');
    const taskMenuBtn = document.createElement('button');
    taskMenuBtn.classList.add('task-menu-button');
    const menuIcon = document.createElement('i');
    menuIcon.classList.add('material-icons');
    menuIcon.textContent = 'menu';
    taskMenuBtn.append(menuIcon);

    //create task popup
    let editTaskPopup = document.createElement('div');
    editTaskPopup.classList.add('task-menu-popup');

    //add menu buttons to the popup

    //EDIT
    let taskEditBtn = document.createElement('button');
    taskEditBtn.addEventListener('click', () => {
        editTask(taskId);
    });
    taskEditBtn.classList.add('task-menu-popup-btn');
    let taskEditIcon = document.createElement('i');
    taskEditIcon.textContent = 'edit';
    taskEditIcon.className = 'material-icons';
    taskEditBtn.append(taskEditIcon);
    editTaskPopup.append(taskEditBtn);

    //STEIKETHROUGH
    let taskStrikeBtn = document.createElement('button');
    taskStrikeBtn.addEventListener('click', () => {
        strikeoutTask(taskId);
    });
    taskStrikeBtn.classList.add('task-menu-popup-btn');
    let taskStrikeIcon = document.createElement('i');
    taskStrikeIcon.className = 'material-icons';
    taskStrikeIcon.textContent = 'strikethrough_s';
    taskStrikeBtn.append(taskStrikeIcon);
    editTaskPopup.append(taskStrikeBtn);

    //REMOVE
    let taskRemoveBtn = document.createElement('button');
    taskRemoveBtn.addEventListener('click', () => {
        removeTask(taskId);
    });
    taskRemoveBtn.classList.add('task-menu-popup-btn');
    let taskRemoveIcon = document.createElement('i');
    taskRemoveIcon.className = 'material-icons';
    taskRemoveIcon.textContent = 'delete';
    taskRemoveBtn.append(taskRemoveIcon);
    editTaskPopup.append(taskRemoveBtn);

    //append the popup to the menu div
    taskMenuDiv.append(editTaskPopup);

    //add even listener to button to show popup
    taskMenuBtn.addEventListener('click', function () {
        editTaskPopup.style.display = 'grid';
    });

    //add event listener to hide popup on mouseleave
    editTaskPopup.addEventListener('mouseleave', function () {
        editTaskPopup.style.display = 'none';
    });
    //append the button to the div
    taskMenuDiv.append(taskMenuBtn);
    return taskMenuDiv;
}

//function to hide all (task menu) popups
function hidePopups() {
    //console.log("hide popups");

    document.querySelectorAll('.task-menu-popup').forEach((element) => {
        //console.log(element);
        element.style.display = 'none';
    });
}

//function to edit a task

export function editTask(taskId) {
    //console.log(taskId);
    let thisTask = document.getElementById(taskId);
    // //function to reset page if user clicks outside of box
    ////// interferes with label dropdown

    // document.addEventListener("click", function(event) {
    //     // If user clicks inside the element, do nothing
    //     if (event.target.closest(`#${taskId}`)) return
    //     // If user clicks outside the element, hide it!
    //     showTasks();
    //   })

    let index = findTask(taskId);

    //get task data from tasklist
    let task = getTask(index);
    //console.log(thisTask);

    //replace divs with input fields where appropriate

    //name
    let nameInput = document.createElement('input');
    nameInput.value = task.name;
    nameInput.placeholder = 'Task';
    nameInput.classList.add('task-item', 'name');
    thisTask.querySelector('.name').replaceWith(nameInput);

    //due ///////////////////////////////////////////

    let dueInput = document.createElement('input');
    dueInput.value = task.due;
    //dueInput.placeholder = "Due Date";
    //dueInput.classList.add('task-item', 'due');
    //thisTask.querySelector('.due').replaceWith(dueInput);

    let thisDue = thisTask.querySelector('.due');
    let thisDueCal = document.createElement('div');
    thisDue.append(thisDueCal);
    //console.log(thisTask.querySelector('.due'));
    thisDue.addEventListener(
        'click',
        () => {
            thisDueCal.append(createCalendar(2022, 1));
        },
        { once: true }
    );

    //description
    let descInput = document.createElement('input');
    descInput.value = task.desc;
    descInput.placeholder = 'Description';
    descInput.classList.add('task-item', 'desc');
    thisTask.querySelector('.desc').replaceWith(descInput);

    //show description
    let thisDesc = thisTask.querySelector('.desc');
    thisDesc.classList.add('show-desc');

    //hide the menu button and expand button
    let menuBtn = thisTask.querySelector('.task-menu-button');
    let expBtn = thisTask.querySelector('.expand-button');
    menuBtn.style.display = 'none';
    //expBtn.style.color = "var(--color3)";

    //make label interactive
    let thisLabel = thisTask.querySelector('.label');
    let thisLabelDiv = thisTask.querySelector('.label-div');
    thisLabel.addEventListener('click', function (event) {
        event.preventDefault();
        thisLabelDiv.append(labelDropdown());
    });

    //save changes button

    //add "OK" button
    let okBtn = document.createElement('i');
    okBtn.textContent = 'done';
    okBtn.id = 'task-edit-ok-btn';
    okBtn.classList.add('material-icons');
    thisTask.append(okBtn);

    //add function to ok button to do stuff
    okBtn.addEventListener('click', function () {
        //save the edited data to the tasklist

        changeTask(index, 'name', nameInput.value);
        changeTask(index, 'desc', descInput.value);
        changeTask(index, 'due', thisDue.firstChild.textContent);
        changeTask(
            index,
            'priority',
            thisTask.querySelector('.priority').textContent
        );

        //remove show-desc class
        thisDesc.classList.remove('show-desc');

        //remove the ok button
        document.getElementById('task-edit-ok-btn').remove();
        //show menu and expand button again
        menuBtn.style.display = 'block';
        //expBtn.style.color = "var(--color2)";

        //save task list to local storage
        saveTaskList();

        showTasks();
    });
}

//function to strikeout a task
function strikeoutTask(id) {
    let index = findTask(id);
    let task = getTask(index);

    changeTask(index, 'strike', task.strike ? false : true);

    hidePopups();
    saveTaskList();
    showTasks();
}

//function to remove a task
function removeTask(id) {
    hidePopups();
    /// should turn all text red,
    //create a new red delete button where the desc dropdown is
    //change the menu button to a cancel button

    //if you click on red delete;
    deleteTask(findTask(id));
    saveTaskList();
    showTasks();
    //if you click on cancel;
    //        showTasks();
}

//function to return a color based on priority
export function colorPriority(num) {
    let colors = [
        'red', //0
        'orange', //1
        'yellow', //2
        'green', //3
        'blue', //4
        'white' //5
    ];
    return colors[num];
}

export function labelDropdown() {
    let dropDown = document.createElement('div');
    dropDown.id = 'label-dropdown';

    for (let index = 0; index < 6; index++) {
        let label = document.createElement('i');
        label.classList.add('material-icons');
        label.textContent = 'label';
        label.style.color = colorPriority(index);
        label.id = `label-${index}`;

        label.addEventListener('click', function (event) {
            event.preventDefault();
            let thisTask = this.parentElement.parentElement.parentElement;
            let newLabel = this.id.slice(6);
            //change label to new label number
            thisTask.querySelector('.priority').textContent = newLabel;
            //change label color for style points
            thisTask.querySelector('.label').style.color =
                colorPriority(newLabel);
            // remove the dropdown
            document.getElementById('label-dropdown').remove();
        });

        //console.log("appended");
        dropDown.append(label);
    }

    return dropDown;
}

export function expandBtn() {
    let expandButton = document.createElement('i');
    expandButton.classList.add('material-icons', 'expand-button');
    expandButton.textContent = 'expand_more';
    expandButton.addEventListener('click', function () {
        let thisTask = this.parentNode;
        //toggle "show description"
        thisTask.querySelector('.desc').classList.toggle('show-desc');
        //toggle icon
        this.textContent == 'expand_more'
            ? (this.textContent = 'expand_less')
            : (this.textContent = 'expand_more');
    });
    return expandButton;
}

async function storeTask(task) {
    await setDoc(doc(db, 'tasks', task.name), {
        task
    });
}
