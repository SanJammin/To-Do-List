const task = document.getElementById("task");
const taskSubmitBtn = document.getElementById("task-submit-btn");
const taskList = document.getElementById("task-list");
const taskClearBtn = document.getElementById("task-clear-btn");

taskSubmitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    taskList.innerHTML += `
    <li class="task-item">
        <input class="submitted-task" type="checkbox" name="submitted-task">
        <label for="submitted-task">
            ${task.value}
        </label>
    </li>
    `

    task.value = "";
    task.focus();
});

taskClearBtn.addEventListener("click", () => {
    task.value = "";
    taskList.innerHTML = "";
});