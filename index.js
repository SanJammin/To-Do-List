const task = document.getElementById("task");
const taskSubmitBtn = document.getElementById("task-submit-btn");
const taskList = document.getElementById("task-list");
const taskClearBtn = document.getElementById("task-clear-btn");

taskSubmitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (task.value == "") {
        return
    } else {
        taskList.innerHTML += `
        <li class="task-item">
            <input class="submitted-task" type="checkbox" name="submitted-task">
            <label for="submitted-task">
                ${task.value}
            </label>
            <button type="button" class="delete-btn">
                Delete
            </button>
        </li>
        `

        task.value = "";
    }

    task.focus();
});

taskList.addEventListener("click", (e) => {
    if(e.target.classList.contains("delete-btn")) {
        e.target.closest("li").remove();
    }

    if(e.target.classList.contains("submitted-task")) {
        e.target.closest("li").classList.toggle("completed")
    }
});

taskClearBtn.addEventListener("click", () => {
    task.value = "";
    taskList.innerHTML = "";
});