class TaskList {
  constructor() {
    this.tasks = [];

    // Create main container
    this.container = document.createElement("div");
    this.container.id = "task-list";
    this.container.className = "task-list-container";

    // Create input form container
    this.inputContainer = document.createElement("div");
    this.inputContainer.className = "task-input-container";

    // Create title input
    this.titleInput = document.createElement("input");
    this.titleInput.type = "text";
    this.titleInput.placeholder = "Task title";
    this.titleInput.className = "task-title-input";

    // Create add task button
    this.addButton = document.createElement("button");
    this.addButton.textContent = "Create task";
    this.addButton.className = "create-task-button";
    this.addButton.addEventListener("click", () => {
      this.createTask(this.titleInput.value);
    });

    // Append elements to input container
    this.inputContainer.appendChild(this.titleInput);
    this.inputContainer.appendChild(this.addButton);

    // Create tasks container
    this.tasksContainer = document.createElement("div");
    this.tasksContainer.className = "tasks-container";

    // Append all to main container
    this.container.appendChild(this.inputContainer);
    this.container.appendChild(this.tasksContainer);
    document.body.appendChild(this.container);
  }

  createId() {
    let id = Math.floor(Math.random() * (9999 - 1000) + 1000); // generates random 3-digit id
    if (this.tasks.find((task) => task.id === id)) {
      return this.createId();
    }
    return id;
  }

  renderTask(task) {
    let li = document.createElement("li");
    li.id = `task-${task.id}`;
    li.textContent = task.title;
    this.tasksContainer.appendChild(li);
    li.addEventListener("click", () => {
      if (!task.complete) {
        task.updateComplete();
        li.classList.add("completed");
      } else {
        task.updateComplete();
        li.classList.remove("completed");
      }
    });
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-task-button";
    deleteButton.addEventListener("click", (e) => {
      e.stopPropagation();
      this.removeTask(task);
      li.remove();
    });
    li.appendChild(deleteButton);
  }

  createTask(title) {
    let id = this.createId();
    let task = new Task(id, title);
    this.tasks.push(task);
    this.renderTask(task);
    return task;
  }

  removeTask(task) {
    this.tasks = this.tasks.splice(this.tasks.indexOf(task), 1);
  }

  completeTask(task) {
    task.updateComplete();
  }
}
