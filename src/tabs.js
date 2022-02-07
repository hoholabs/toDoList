import { createTask, showTasks, deleteTasks, saveTaskList } from './tasks';

//Get main container from page
let mainContainer = document.getElementById('main-container');

//extend functionality of local storage to allow for arrays and objects
Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

let tabList = [];
let currentTab = "";
let currentTabId = "";

//factory function to create tabs
const tab = (name) => {
    const getName = () => name;
    const remove = (id) => {
        console.log("remove tab")
        deleteTasks(name);
        let tabIndex = id.slice(4);
        tabList.splice(tabIndex, 1);
    }
    const rename = () =>{
        console.log("rename");
    }
    return {name, getName, remove, rename}
}



export function getTabList(tabArray){
    console.log("getTabList");

    //Create a new tab for each tab name from tabArray
    tabArray.forEach(element => {
        //console.log(element);
        let thisTab = tab(element);
        addTab(thisTab);
    });
    showTabs();
};



//add tab to the tabList
export function addTab(tab){
    console.log("addTab");
    tabList.push(tab);
    saveTabList();
}

export function showTabs(){
    clearTabs();

    console.log("showTabs");
    let i = 0;
    tabList.forEach(element => {
        //console.log(element.getName());
        // console.log(element.getName());
         let showTab = document.createElement("div");
         showTab.id = `tab-${i}`;
         i++
         showTab.className = "tab";
         showTab.textContent = element.getName();
         showTab.style.order = "-1";
         showTab.addEventListener('click',() => {tabSelect(showTab.id)});
         tabBar.append(showTab);

    });
    
    tabSelect("tab-0")
}

export function saveTabList(){
    console.log("saveTabList");
    //console.log(tabList);

    let tabArray = [];
    tabList.forEach(element => {
        //console.log(element.name)
        tabArray.push(element.name)
    });

    localStorage.setObj('tabList', tabArray);
    //console.log(localStorage.getObj('tabList'));

};

export function clearTabs(){
    const array = document.querySelectorAll('.tab');
    array.forEach(element => {        
        element.remove();
    });
}

// TAB BAR

//ceate tab bar
let tabBar = document.createElement("div");
tabBar.id = "tab-bar";

//create new tab button
let newTabBtn = document.createElement('i');
newTabBtn.id = "new-tab-button";
newTabBtn.classList.add('material-icons');
newTabBtn.textContent = 'add_circle_outline';
tabBar.append(newTabBtn);
//give new tab busson functionalty
newTabBtn.addEventListener('click',()=> {newTab("")});

export function newTab(name){
    console.log("new tab");
    if (name) {
        addTab(tab(name));
    } else {
        
        let newTab = tab("noname");
        addTab(newTab);
    };
    
    //saveTabList();
    showTabs();
}

mainContainer.append(tabBar);

//add functionality to tab bar



function tabSelect(id){

    let thisTab = document.getElementById(id);
    currentTabId = id;
    currentTab = thisTab.textContent;

    document.querySelectorAll(".tab").forEach(element => {
        element.style.color = "var(--color2)";
    });
    thisTab.style.color = "red";
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
let tabMenu = document.createElement('div');

let tabMenuBtn = document.createElement('button');
tabMenuBtn.className = "title-item";
tabMenuBtn.addEventListener('click', function(event){
    event.preventDefault();
    tabMenu.append(titleDropdown());
});

let tabMenuIcon = document.createElement('i');
tabMenuIcon.className = 'material-icons';
tabMenuIcon.textContent = 'menu';
tabMenuBtn.append(tabMenuIcon);
tabMenu.append(tabMenuBtn);
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

function titleDropdown(){
    console.log("dropdown");
    let dropdown = document.createElement('div')
    dropdown.id = "title-bar-dropdown";

    let removeBtn = document.createElement('i')
    removeBtn.classList.add('material-icons');
    removeBtn.textContent = 'delete';

    //add click event to the remove button
    removeBtn.addEventListener('click', function(){

         let tabIndex = currentTabId.slice(4);
         tabList[tabIndex].remove(currentTabId);

        // //remove the dropdown
         document.getElementById('title-bar-dropdown').remove();

        saveTaskList();
        saveTabList();

        showTabs();
    })

    dropdown.append(removeBtn);

    return dropdown;
    
}