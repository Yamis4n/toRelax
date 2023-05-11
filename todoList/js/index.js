const NEWTASK  = document.getElementById("newTaskButton");
const ROOT     = document.getElementById("tasksZone");

let ID = 0;



function createDiv(){
  const div      = document.createElement("div");
  const text     = document.createTextNode("Task - "+ ID);
  
  ID += 1;

  div.appendChild(text);
  div.className = "new-task";
  div.id = "task"+ID;
    
  ROOT.appendChild(div);

}

function showDelete(taskTarget) {
  const taskDiv = document.getElementById(taskTarget);
  console.log(taskDiv.childNodes.length);
}

ROOT.addEventListener("click", function(event){
  console.log(event.target);
  showDelete(event.target.id);
})
NEWTASK.addEventListener("click", createDiv);
