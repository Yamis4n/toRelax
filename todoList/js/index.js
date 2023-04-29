let ID = 0;

function createDiv(){
  let taskName = 'Atividade ' + ID;  
  let div = document.createElement("div");
  let root = document.getElementById("root");
  let fixedDiv = document.getElementById("fixedDiv");
  
  createCheckBox(div, taskName);
  div.className = "newDiv";
  
  root.insertBefore(div, fixedDiv);

}

function createCheckBox(root, taskName){
  let id = "id" + ID++;
  let label = document.createElement("label");
  let input = document.createElement("input");
  

  input.type = "checkbox";
  input.id = id;
  
  label.textContent = taskName;
  label.hmtlFor = id;
  label.className = "newInput";

  root.appendChild(input);
  root.appendChild(label);
}


