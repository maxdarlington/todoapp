class Task {
  constructor(id, title, category) {
    this.id = id;
    this.title = title;
    this.complete = false;
    this.category = category;
    this.createdAt = new Date().toISOString();
    this.dueDate = null;
  }

  updateComplete() {
    this.complete = true;
  }

  updateTitle(titleInput) {
    this.title = titleInput;
  }

  updateCategory(categoryInput) {
    this.category = categoryInput;
  }

  updateDueDate(dueDateInput) {
    this.dueDate = dueDateInput;
  }
}
