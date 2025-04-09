const task = document.getElementById("task");
const taskSubmitBtn = document.getElementById("task-submit-btn");
const taskList = document.getElementById("task-list");
const taskClearBtn = document.getElementById("task-clear-btn");
const info = document.getElementById("info");
const characterCount = document.getElementById("character-count");

function updateInfoMessage() {
    if (taskList.children.length === 0) {
        info.textContent = "No Tasks Yet";
    } else {
        info.textContent = "";
    }
};

updateInfoMessage();

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
    updateInfoMessage();
});

taskList.addEventListener("click", (e) => {
    if(e.target.classList.contains("delete-btn")) {
        e.target.closest("li").remove();
    }

    if(e.target.classList.contains("submitted-task")) {
        e.target.closest("li").classList.toggle("completed")
    }

    updateInfoMessage();
});

task.addEventListener("input", () => {
    const length = task.value.length;
    characterCount.textContent = `${length}/30`;

    if (length >= 25) {
        characterCount.classList.add("warning");
    } else {
        characterCount.classList.remove("warning");
    }
});

taskClearBtn.addEventListener("click", () => {
    task.value = "";
    taskList.innerHTML = "";
    updateInfoMessage();
});