import { createTask, showTasks } from './tasks';

//Get main container from page
let mainContainer = document.getElementById('main-container');

let tabList = [];

export function setTabList(newTaskList){
    tabList = newTabList;
    showTasks();
};

export function createTab(name){

};

export function saveTabList(){
    
};
    
// TAB BAR

//ceate tab bar
let tabBar = document.createElement("div");
tabBar.id = "tab-bar";
//tabBar.textContent = "TAB BAR";
    //create new tab button
    let newTabBtn = document.createElement('i');
    newTabBtn.id = "new-tab-button";
    newTabBtn.classList.add('material-icons');
    newTabBtn.textContent = 'add_circle_outline';
    tabBar.append(newTabBtn);
    //give new tab busson functionalty
    newTabBtn.addEventListener('click',newTabPrompt);
    function newTabPrompt(){
        let newTab = prompt("New tab name:");
        addTab(newTab);
    }

addTab("main");
//addTab("second");
//addTab("third");
mainContainer.append(tabBar);

//function to add tab to tabBar

function addTab(name){
    let newTab = document.createElement("div");
    newTab.className = "tab";
    newTab.textContent = name;
    newTab.style.order = "-1";
    newTab.addEventListener('click',tabClick);
    tabBar.append(newTab);
};

//add functionality to tab bar
let currentTab = "main";

function tabClick(){

    currentTab = this.textContent;

    document.querySelectorAll(".tab").forEach(element => {
        element.style.color = "purple";
    });
    this.style.color = "red";
    showTasks();
    

};

export function getTab(){
    return currentTab;
}

// TITLE BAR ///

//create title bar
let titleBar = document.createElement('div')
titleBar.id = 'title-bar';
let titles = createTask('Task', 'Description', 'Due date', 'Priority','none');
delete titles.desc;


//title bar tab menu button
let tabMenu = document.createElement('button');
tabMenu.className = "title-item";
let tabMenuIcon = document.createElement('i');
tabMenuIcon.className = 'material-icons';
tabMenuIcon.textContent = 'menu';
tabMenu.append(tabMenuIcon);
titleBar.append(tabMenu);

for (const prop in titles) {
    if (Object.hasOwnProperty.call(titles, prop)) {
        let div = document.createElement('div');
        div.classList.add("title-item", prop)
        div.textContent = titles[prop]
        titleBar.append(div);
    }
}

//change name to icon
let name = titleBar.querySelector('.name');
name.textContent = "";
let title = document.createElement('i');
title.textContent = "title";
title.classList.add('material-icons');
name.append(title);

//change due date icon
let due = titleBar.querySelector('.due');
due.textContent = "";
let event = document.createElement('i');
event.textContent = "event";
event.classList.add('material-icons');
due.append(event);

//add label icon
let label = document.createElement('i');
label.textContent = "label";
label.classList.add('material-icons');
titleBar.append(label);

mainContainer.append(titleBar);




//Add Nav to top of page
export function showTabs(){
    mainContainer.append(tabBar);
    mainContainer.append(titleBar);
}

