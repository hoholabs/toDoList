import { showTasks, deleteTasks, saveTaskList, editTasks } from './tasks';
import { db } from './index.js';
import { doc, setDoc, deleteDoc } from 'firebase/firestore';

//Get main container from page
let mainContainer = document.getElementById('main-container');

//extend functionality of local storage to allow for arrays and objects
// Storage.prototype.setObj = function (key, obj) {
//     return this.setItem(key, JSON.stringify(obj));
// };
// Storage.prototype.getObj = function (key) {
//     return JSON.parse(this.getItem(key));
// };

let tabList = [];
let currentTab = 'main';
let currentTabId = '';

//factory function to create tabs
const tab = (name, tabId) => {
    const getName = () => name;
    const remove = (id) => {
        deleteTasks(name);
        let tabIndex = id.slice(4);
        tabList.splice(tabIndex, 1);
        saveTaskList();
        saveTabList();
        showTabs();
        return;
    };
    const rename = (id) => {
        let tabIndex = id.slice(4);

        let newName = prompt('New tab name:');
        tabList[tabIndex].name = newName;
        name = newName;

        saveTabList();
        showTabs();
        tabSelect(id);
        return newName;
    };

    if (typeof tabId === 'undefined') {
        tabId = new Date().getTime().toString();
    }

    return { tabId, name, getName, remove, rename };
};

export function getTabList(tabArray) {
    //Create a new tab for each tab name from tabArray
    tabArray.forEach((object) => {
        let thisTab = tab(object.name, object.tabId);
        addTab(thisTab);
    });
    showTabs();
}

//add tab to the tabList
export function addTab(tab) {
    tabList.push(tab);
    saveTabList();
}

export function showTabs() {
    clearTabs();

    let i = 0;
    tabList.forEach((element) => {
        let showTab = document.createElement('div');
        showTab.id = `tab-${i}`;
        i++;
        showTab.className = 'tab';
        showTab.textContent = element.getName();
        showTab.style.order = '-1';
        showTab.addEventListener('click', () => {
            tabSelect(showTab.id);
        });
        tabBar.append(showTab);
    });

    tabSelect('tab-0');
}

export function saveTabList() {
    let tabArray = [];

    tabList.forEach((tab) => {
        let tabObj = {};
        tabObj.name = tab.name;
        tabObj.tabId = tab.tabId;
        tabArray.push(tab.name);

        storeTab(tabObj);
    });

    // localStorage.setObj('tabList', tabArray);
}

async function storeTab(tab) {
    await setDoc(doc(db, 'tabs', tab.tabId), {
        tab
    });
}

export function clearTabs() {
    const array = document.querySelectorAll('.tab');
    array.forEach((element) => {
        element.remove();
    });
}

async function deleteTab(tab) {
    console.log(tab);
    await deleteDoc(doc(db, 'tabs', tab.tabId));
}

// TAB BAR

//ceate tab bar
let tabBar = document.createElement('div');
tabBar.id = 'tab-bar';

//create new tab button
let newTabBtn = document.createElement('i');
newTabBtn.id = 'new-tab-button';
newTabBtn.classList.add('material-icons');
newTabBtn.textContent = 'add_circle_outline';
tabBar.append(newTabBtn);
//give new tab busson functionalty
newTabBtn.addEventListener('click', () => {
    newTab('');
});

export function newTab(name) {
    if (name) {
        addTab(tab(name));
    } else {
        let newTab = prompt('New tab name:');
        addTab(tab(newTab));
    }

    saveTabList();
    showTabs();
}

mainContainer.append(tabBar);

//add functionality to tab bar

function tabSelect(id) {
    let thisTab = document.getElementById(id);
    currentTabId = id;
    currentTab = thisTab.textContent;

    document.querySelectorAll('.tab').forEach((element) => {
        element.style.color = 'var(--color2)';
    });
    thisTab.style.color = 'red';
    showTasks();
}

export function getTab() {
    return currentTab;
}

// TITLE BAR ///

//create title bar
let titleBar = document.createElement('div');
titleBar.id = 'title-bar';
let titles = {
    name: 'Task',
    desc: 'Description',
    due: 'Due Date',
    priority: 'Priority',
    inTab: 'none',
    strike: false
};
delete titles.desc;

//title bar tab menu button
let tabMenu = document.createElement('div');

let tabMenuBtn = document.createElement('button');
tabMenuBtn.className = 'title-item';
tabMenuBtn.addEventListener('click', function (event) {
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
        div.classList.add('title-item', prop);
        div.textContent = titles[prop];
        titleBar.append(div);
    }
}

//change name to icon
let name = titleBar.querySelector('.name');
name.textContent = '';
let title = document.createElement('i');
title.textContent = 'title';
title.classList.add('material-icons');
name.append(title);

//change due date icon
let due = titleBar.querySelector('.due');
due.textContent = '';
let event = document.createElement('i');
event.textContent = 'event';
event.classList.add('material-icons');
due.append(event);

//add label icon
let label = document.createElement('i');
label.textContent = 'label';
label.classList.add('material-icons');
titleBar.append(label);

mainContainer.append(titleBar);

function titleDropdown() {
    let dropdown = document.createElement('div');
    dropdown.id = 'title-bar-dropdown';

    // REMOVE
    let removeBtn = document.createElement('i');
    removeBtn.classList.add('material-icons');
    removeBtn.textContent = 'delete';

    //add click event to the remove button
    removeBtn.addEventListener('click', function () {
        let tabIndex = currentTabId.slice(4);
        deleteTab(tabList[tabIndex]);
        tabList[tabIndex].remove(currentTabId);

        // //remove the dropdown
        document.getElementById('title-bar-dropdown').remove();
    });

    //EDIT
    let editBtn = document.createElement('i');
    editBtn.classList.add('material-icons');
    editBtn.textContent = 'edit';

    //add click event to the edit button
    editBtn.addEventListener('click', function () {
        //change all tabs intab to new name
        let oldName = currentTab;
        let tabIndex = currentTabId.slice(4);
        let newName = tabList[tabIndex].rename(currentTabId);
        editTasks('inTab', oldName, newName);

        // //remove the dropdown
        document.getElementById('title-bar-dropdown').remove();
    });

    dropdown.append(removeBtn);
    dropdown.append(editBtn);

    return dropdown;
}
