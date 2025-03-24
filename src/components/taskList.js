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
    this.titleInput.placeholder = "Enter task title";
    this.titleInput.className = "task-title-input";

    // Create category input
    this.categoryInput = document.createElement("input");
    this.categoryInput.type = "text";
    this.categoryInput.placeholder = "Enter task category";
    this.categoryInput.className = "task-category-input";

    // Create add task button
    this.addButton = document.createElement("button");
    this.addButton.textContent = "Add Task";
    this.addButton.className = "add-task-button";
    this.addButton.addEventListener("click", () => {
      this.validateAndCreateTask();
    });

    // Append elements to input container
    this.inputContainer.appendChild(this.titleInput);
    this.inputContainer.appendChild(this.categoryInput);
    this.inputContainer.appendChild(this.addButton);

    // Create tasks container
    this.tasksContainer = document.createElement("div");
    this.tasksContainer.className = "tasks-container";

    // Append all to main container
    this.container.appendChild(this.inputContainer);
    this.container.appendChild(this.tasksContainer);
    document.body.appendChild(this.container);
  }

  validateAndCreateTask() {
    const title = this.titleInput.value.trim();
    const category = this.categoryInput.value.trim();

    // Reset any previous error states
    this.titleInput.classList.remove("input-error");
    this.categoryInput.classList.remove("input-error");

    let isValid = true;

    if (!title) {
      this.titleInput.classList.add("input-error");
      this.showError("Title is required");
      isValid = false;
    }

    if (!category) {
      this.categoryInput.classList.add("input-error");
      this.showError("Category is required");
      isValid = false;
    }

    if (isValid) {
      this.createTask(title, category);
      this.titleInput.value = "";
      this.categoryInput.value = "";
      this.clearError();
    }
  }

  showError(message) {
    if (!this.errorDisplay) {
      this.errorDisplay = document.createElement("div");
      this.errorDisplay.className = "error-message";
      this.inputContainer.appendChild(this.errorDisplay);
    }
    this.errorDisplay.textContent = message;
    this.errorDisplay.style.display = "block";
  }

  clearError() {
    if (this.errorDisplay) {
      this.errorDisplay.style.display = "none";
    }
  }

  createId() {
    let id = Math.floor(Math.random() * 900) + 100; // generates random 3-digit id
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
  }

  createTask(title, category) {
    let id = this.createId();
    let task = new Task(id, title, category);
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

  updateTaskTitle(task, title) {
    task.updateTitle(title);
  }

  updateTaskCategory(task, category) {
    task.updateCategory(category);
  }

  updateTaskDueDate(task, dueDate) {
    task.updateDueDate(dueDate);
  }

  filterTasksByCategory(category) {
    return this.tasks.filter((task) => task.category === category);
  }
}
