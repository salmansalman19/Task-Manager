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
    li.className = "list-group-item";

    li.innerHTML = `
      ${task}
      <button class="btn btn-danger btn-sm float-end">
        Delete
      </button>
    `;

    let deleteBtn = li.querySelector("button");

    deleteBtn.addEventListener("click", function () {
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      renderTasks();
       message.innerText = "Task deleted ";
       message.style.color = "red";
    });

    list.appendChild(li);
  });
}
let savedTasks = localStorage.getItem("tasks");

if (savedTasks) {
  tasks = JSON.parse(savedTasks);
  renderTasks();
}