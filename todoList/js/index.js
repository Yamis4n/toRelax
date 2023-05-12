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
  div.className   = "new-task";
  div.id          = "task"+ID;
  div.draggable   = "true";
  div.ondragstart = function () {
    drag(event);
  };


  ROOT.appendChild(div);

}


function showDelete(taskTarget) {
  const taskDiv = document.getElementById(taskTarget);
  console.log(taskDiv.childNodes.length);
}


// drag and drop functions:
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  let data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}


// listeners:


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


