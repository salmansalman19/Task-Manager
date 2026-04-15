let input = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let list = document.getElementById("taskList");
let message = document.getElementById("message");

addBtn.addEventListener("click", function () {
  let task = input.value.trim();

  if (task === "") {
    message.innerText = "Please enter a task!";
    message.className = "text-danger text-center fw-bold"; 
    setTimeout(function () {
      message.innerText = "";
    }, 2000);
    return;
  }

  let li = document.createElement("li");
  li.className = "list-group-item";
  li.innerText = task;

  list.appendChild(li);

  message.innerText = "Task added successfully ✅";
  message.className = "text-success text-center fw-bold"; 

  input.value = "";
  setTimeout(function () {
    message.innerText = "";
  }, 2000);
});
