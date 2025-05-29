function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = taskText;

  const buttonsDiv = document.createElement("div");
  buttonsDiv.classList.add("task-buttons");

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "edit-btn";
  editBtn.onclick = () => editTask(span);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = () => li.remove();

  buttonsDiv.appendChild(editBtn);
  buttonsDiv.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(buttonsDiv);

  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
}

function editTask(span) {
  const newTask = prompt("Edit your task:", span.textContent);
  if (newTask !== null && newTask.trim() !== "") {
    span.textContent = newTask.trim();
  }
}
