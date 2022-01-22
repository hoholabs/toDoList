//Get main container from page
let mainContainer = document.getElementById('main-container');

//Create navigation bar
let navBar = document.createElement("nav");
navBar.id = "nav"
navBar.style.display = "grid";
//navBar.textContent = "NAV BAR";

//ceate tab bar
let tabBar = document.createElement("div");
tabBar.id = "tab-bar";
//tabBar.textContent = "TAB BAR";
    //create new tab button
    let newTabBtn = document.createElement('button');
    newTabBtn.id = "new-tab-button";
    newTabBtn.textContent = "+";
    tabBar.append(newTabBtn);
    //give new tab busson functionalty
    newTabBtn.addEventListener('click',newTabPrompt);
    function newTabPrompt(){
        let newTab = prompt("New tab name:");
        addTab(newTab);
    }

addTab("main");
navBar.append(tabBar);

//add tab to Navbar

function addTab(name){
    let newTab = document.createElement("div");
    newTab.className = "tab";
    newTab.textContent = name;
    newTab.style.order = "-1";
    tabBar.append(newTab);
};

// addTab(default);

//Add Nav to top of page
export function addNav(){
    mainContainer.append(navBar);
}

//export default addNav;