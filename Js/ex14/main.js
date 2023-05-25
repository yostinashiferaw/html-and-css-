function addText() {
  var paragraph = document.getElementById("text");
  paragraph.textContent = "Sample text";
}

function deleteText() {
  var paragraph = document.getElementById("text");
  paragraph.textContent = "";
}

document.getElementById("add").addEventListener("click", addText);
document.getElementById("delete").addEventListener("click", deleteText);
