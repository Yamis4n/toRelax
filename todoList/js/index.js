const NEWTASK  = document.getElementById("newTaskButton");
const ROOT     = document.getElementById("tasksZone");

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

// Esta função pega o texto da tarefa:
function getText() {
  console.log(NEWTASK.childNodes.length);
  if (NEWTASK.childNodes.length == 1){
    const input = document.createElement("input");
    input.type = "text";
    NEWTASK.appendChild(input);
  }
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
  getText();
  createDiv("teste");
});
