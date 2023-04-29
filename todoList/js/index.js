let ID = 0;

function createDiv(){
  let taskName = 'novaDiv';  
  let newDiv = document.createElement("div");
  let newContent = document.createTextNode(taskName);
  
  newDiv.appendChild(newContent);
  newDiv.className = "newDiv";
  
  let root = document.getElementById("root");
  let fixedDiv = document.getElementById("fixedDiv");
  root.insertBefore(newDiv, fixedDiv);

}

function createCheckBox(){
  let id = "id" + ID++;
  let labelContent = "nova Atividade"
  let label = document.createElement("label");
  let input = document.createElement("input");
  
  // gambiarra:
  let newLineDiv = document.createElement("div");
  newLineDiv.className = "newLineDiv";

  input.type = "checkbox";
  input.id = id;
  
  label.textContent = labelContent;
  label.hmtlFor = id;



  let root = document.getElementById("root");
  root.appendChild(input);
  root.appendChild(label);
  root.appendChild(newLineDiv);
}


