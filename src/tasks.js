let mainContainer = document.getElementById("main-container");

const taskList = [];

//function to call to make tasks
export function createTask(name,desc,due,priority){
    return{
      name:name,
      desc:desc,
      due:due,
      priority:priority
    }
  }
  
  //function to add the task to the list
  export function addTask (task){
    taskList.push(task);
  };
  
  //function to show tasklist in DOM
  
  export function showTasks(){
  
    taskList.forEach(element => {

        //creates a div for the task
        let task = document.createElement("div")
        task.className = "task";    

        //loops through each element in the object
        for (const prop in element) {
            if (Object.hasOwnProperty.call(element, prop)) {
                
                console.log(`${prop} = ${element[prop]}`);
                let input = document.createElement("input");
                input.className = prop;
                input.value = element[prop];
                task.append(input);
                
            }
        }

    mainContainer.append(task);
    });
  
  }

//example tasks
const task1 = createTask("Task", "Description", "Due date", "Priority");
addTask(task1);
const task2 = createTask("Do the Dishes", "Gotta wash wash wash wash", "2022/04/20", "5");
addTask(task2);
