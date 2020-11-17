document.addEventListener('DOMContentLoaded', function (event) {
    document.getElementById('btnAddParagraph').addEventListener('click', addParagraph);
});

function addParagraph() {
  const paragraphSection = document.getElementById('sectionParagraph');
  
  let paragraph = createNewParagraph();
  setRandomColor(paragraph);
  appendParagraph(paragraphSection, paragraph);
}

function createNewParagraph() {
  let paragraph = document.createElement("p");
  let paragraphText = document.createTextNode("This is a new paragraph.");
  paragraph.appendChild(paragraphText);
  return paragraph;
}

function appendParagraph(parent, el) {
    return parent.appendChild(el);
}

function generateRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandomColor(element) {
  element.style.color = generateRandomColor();
}