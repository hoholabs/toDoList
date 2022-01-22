let mainContainer = document.getElementById('main-container');

let navBar = document.createElement("nav");
navBar.id = "nav"


//Add Nav to top of page
function addNav(){
    console.log('addnav')
    mainContainer.append(navBar);
}

export default addNav;