// Function to add a new task
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        var taskList = document.getElementById("taskList");
        var li = document.createElement("li");
        li.textContent = taskText;
        li.innerHTML += '<button onclick="completeTask(this)">Complete</button>';
        li.innerHTML += '<button onclick="deleteTask(this)">Delete</button>';
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

// Function to mark a task as completed
function completeTask(element) {
    var li = element.parentNode;
    li.classList.toggle("completed");
}

// Function to delete a task
function deleteTask(element) {
    var li = element.parentNode;
    li.remove();
}
