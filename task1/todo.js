var input_el = document.getElementById("input_el");
var input_el = document.getElementById("input_el");
inputItem.focus();

// adds input Item to list
function addItem(ul, input) {
  var input_el = this.input_el;
  var ul = document.getElementById(ul);
  var listItem = document.createElement("li");
  
  // Configure the delete button
  let deleteItem= document.createElement("button");
  deleteItem.innerText = "X";
  deleteItem.addEventListener("click", function() {
    listItem.style.display="none";    
  });
  
  // Configure the label
  var label = document.createElement("label");
  var labelText = document.createElement("span");
  labelText.innerText = input.value;
  
  // Configure the check box
  var checkBox = document.createElement("input");
  checkBox.type = 'checkbox';

  checkBox.addEventListener('change', function() {
    labelText.style.textDecoration = checkBox.checked ? 'line-through' : 'none';
  });
  
  // Put the checkbox and label text in to the label element
  label.appendChild(checkBox);
  label.appendChild(labelText);
  
  // Put the label (with the checkbox inside) and the delete
  // button into the list item.
  listItem.appendChild(label);
  listItem.appendChild(deleteItem);
  
  ul.appendChild(listItem);
  input_el.focus();
  input_el.select();
  return false;

}