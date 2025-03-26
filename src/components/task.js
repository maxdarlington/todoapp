class Task {
  constructor(id, title) {
    this.id = id;
    this.title = title;
    this.complete = false;
  }

  updateComplete() {
    this.complete = !this.complete;
  }
}
