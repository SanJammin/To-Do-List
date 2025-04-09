const task = document.getElementById("task");
const taskSubmitBtn = document.getElementById("task-submit-btn");
const taskList = document.getElementById("task-list");
const taskClearBtn = document.getElementById("task-clear-btn");
const info = document.getElementById("info");
const characterCount = document.getElementById("character-count");

function updateInfoMessage() {
  info.textContent = taskList.children.length === 0 ? "No Tasks Yet" : "";
}


updateInfoMessage();

task.addEventListener("input", () => {
  const length = task.value.length;
  characterCount.textContent = `${length}/30`;

  if (length >= 25) {
    characterCount.classList.add("warning");
  } else {
    characterCount.classList.remove("warning");
  }
});


taskSubmitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (task.value === "") return;

  // Create task element using DOM methods instead of innerHTML
  const li = document.createElement("li");
  li.className = "task-item task-enter";

  li.innerHTML = `
    <input class="submitted-task" type="checkbox" name="submitted-task">
    <label for="submitted-task">${task.value}</label>
    <button type="button" class="delete-btn">Delete</button>
  `;

  taskList.appendChild(li);

  setTimeout(() => li.classList.remove("task-enter"), 10);

  task.value = "";
  characterCount.textContent = "0/30";
  task.focus();

  updateInfoMessage();
});

taskList.addEventListener("click", (e) => {
  const li = e.target.closest("li");

  if (e.target.classList.contains("delete-btn")) {
    li.classList.add("task-exit");

    setTimeout(() => {
      li.remove();
      updateInfoMessage(); // only call once task is gone
    }, 300);
  }

  if (e.target.classList.contains("submitted-task")) {
    li.classList.toggle("completed");
  }
});

taskClearBtn.addEventListener("click", () => {
  task.value = "";
  taskList.innerHTML = "";
  characterCount.textContent = "0/30";
  updateInfoMessage();
});
