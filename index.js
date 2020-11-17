document.addEventListener('DOMContentLoaded', function (event) {
    document.getElementById('btnAddParagraph').addEventListener('click', addParagraph);
});

function addParagraph() {
  const paragraphSection = document.getElementById('sectionParagraph');
  
  let paragraph = createNewParagraph();

  appendParagraph(paragraphSection, paragraph);
}

function createNewParagraph() {
  let paragraph = document.createElement("p");
  paragraph.classList.add('myParagraph');
  
  let colorNum = Math.floor(Math.random() * 3) + 1;
  paragraph.classList.add('paragraph_color_' + colorNum);
  
  //setRandomColor(paragraph);
  
  createParagraphText(paragraph);
  return paragraph;
}

function createParagraphText(paragraph) {
  var myParagraphs = document.getElementsByClassName("myParagraph");
  let paragraphText = document.createTextNode("This is paragraph." + String.fromCharCode(65 + myParagraphs.length));
  
  paragraph.appendChild(paragraphText);
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