class Task {
  constructor(id, title, category, description) {
    this.id = id;
    this.title = title;
    this.description = description;
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

  updateDescription(descriptionInput) {
    this.description = descriptionInput;
  }
}
