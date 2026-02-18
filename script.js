// Select elements

const input = document.getElementById("todo-input");
const button = document.getElementById("add-btn");
const list = document.getElementById("todo-list");
const meta = document.querySelector('.meta');

function updateCount() {
  if (meta) meta.textContent = `${list.children.length} items`;
}

// add task
button.addEventListener("click", function() {
  const task = input.value.trim();
  if (!task) {
    alert("Please enter a task");
    return;
  }

  const item = document.createElement("div");
  item.className = 'todo-item';

  const text = document.createElement("div");
  text.className = 'todo-text';
  text.textContent = task;

  const deletebutton = document.createElement("button");
  deletebutton.className = 'btn-delete';
  deletebutton.textContent = 'Delete';
  deletebutton.addEventListener("click", function() {
    item.remove();
    updateCount();
  });

  item.appendChild(text);
  item.appendChild(deletebutton);
  list.appendChild(item);
  input.value = "";
  updateCount();
});

// allow Enter key to add
input.addEventListener('keydown', function(e){
  if (e.key === 'Enter') button.click();
});
