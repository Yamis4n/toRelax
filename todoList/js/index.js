const NEWTASK  = document.getElementById("submitButton");
const ROOT     = document.getElementById("tasksZone");
const INPUT    = document.getElementById("newTaskButton");


let ID = 0;


// Esta função cria uma div que contém o texto da "tarefa"
function createDiv(taskContent){
  const div      = document.createElement("div");
  const text     = document.createTextNode(taskContent);
  
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

NEWTASK.addEventListener("click", function (event) {
  if (INPUT.value){
    createDiv(INPUT.value);
    INPUT.value = "";
  }
  else {
    alert("Tarefa sem Nome");
  }
});


