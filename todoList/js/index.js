const NEWTASK  = document.getElementById("submitButton");
const INPUT    = document.getElementById("newTaskButton");
const ROOT     = document.getElementById("tasksZoneT");


let ID = 0;


// Esta função cria uma div que contém o texto da "tarefa"
function createDiv(taskContent){
  const div       = document.createElement("div");
  const paragraph = document.createElement("p");
  const text      = document.createTextNode(taskContent);
  ID += 1;
  let delID = "delButton"+ID;
  let divID = "task"+ID;

  
  div.className   = "new-task";
  div.id          = divID;
  div.draggable   = "true";
  div.ondragstart = function () {
    drag(event);
  };
  div.onclick = function () {
    const del = document.getElementById(delID);
    if (del){
      del.remove();
    }
    else {
      div.appendChild(createDelete(delID, divID));
    }
  }

  paragraph.appendChild(text);
  div.appendChild(paragraph);
  ROOT.appendChild(div);

}

function createDelete(delID, divID) { 
  const delButton = document.createElement("input");
  delButton.id= delID;
  delButton.className = "del-button";
  delButton.type="button";
  delButton.style.marginleft = "auto";
  delButton.onclick = function () {
    task = document.getElementById(divID);
    task.remove();
  }
  return delButton;
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
  const newChild = document.getElementById(data);
  
  if (ev.target.id == "tasksZone" + ev.target.id[9]){
    ev.target.appendChild(newChild);
  }
}

// listeners:

NEWTASK.addEventListener("click", function (event) {
  if (INPUT.value){
    createDiv(INPUT.value);
    INPUT.value = "";
  }
  else {
    alert("Tarefa sem Nome");
  }
});


