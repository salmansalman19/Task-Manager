let input = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let list = document.getElementById("taskList");
let message = document.getElementById("message");
let tasks = [];
  


addBtn.addEventListener("click", function () {
  
  let task = input.value.trim();

  if (task === "") {
    message.innerText = "Please enter a task!";
    message.style.color = "red";
    return;
  }

  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));

  renderTasks();

  message.innerText = "Task added successfully ";
  message.style.color = "green";

  input.value = "";
});
function renderTasks() {
  list.innerHTML = "";

  tasks.forEach(function (task, index) {
    let li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";

   li.innerHTML = `
  <span>${task}</span>
  <div>
    <button class="btn btn-warning btn-sm me-2 editBtn">Edit</button>
    <button class="btn btn-danger btn-sm deleteBtn">Delete</button>
  </div>
`;

    let deleteBtn = li.querySelector(".deleteBtn");

    deleteBtn.addEventListener("click", function () {
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      renderTasks();

      message.innerText = "Task deleted";
      message.style.color = "red";
    });

    let editBtn = li.querySelector(".editBtn");

editBtn.addEventListener("click", function () {

  li.innerHTML = `
    <input type="text" class="form-control mb-2 editInput" value="${task}">
    <button class="btn btn-success btn-sm saveBtn">Save</button>
  `;

  let saveBtn = li.querySelector(".saveBtn");
  let editInput = li.querySelector(".editInput");

  saveBtn.addEventListener("click", function () {
    let updatedTask = editInput.value.trim();

    if (updatedTask === "") {
      message.innerText = "Task cannot be empty!";
      message.style.color = "red";
      return;
    }

    tasks[index] = updatedTask;

    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();

    message.innerText = "Task updated successfully";
    message.style.color = "green";
  });

});

    list.appendChild(li);
  });
}
let savedTasks = localStorage.getItem("tasks");

if (savedTasks) {
  tasks = JSON.parse(savedTasks);
  renderTasks();
}
