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
