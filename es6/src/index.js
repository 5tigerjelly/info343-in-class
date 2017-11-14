// @ts-check
"use strict";

//TODO: create classes for Task,
//TaskList, Button, TaskForm, and App.
//Each of these classes should have
//a render() method that renders their
//data as HTML elements.

class Task {
    constructor(title, done) {
        this.title = title;
        this.done = done;
    }

    render() {
        let li = document.createElement("li");
        li.textContent = this.title;
        if (this.done) {
            li.classList.add("done");
        }
        li.addEventListener("click", () => {
            console.log(this);
            this.done = !this.done;
            li.classList.add("done");
        });

        return li;
    }
}

class TaskList {
    constructor(tasks) {
        this.tasks = tasks;
    }

    addTask(task) {
        this.tasks.push(task);
    }

    purgeCompleted() {
        this.tasks = this.tasks.filter(task => !task.done);
    }

    render() {
        let ul = document.createElement("ul");
        this.tasks.forEach(task => {
            ul.appendChild(task.render())
        });
        return ul;
    }
}

class Button {
    constructor(caption, styleClass = "btn-primary") {
        this.caption = caption;
        this.styleClass = styleClass;
    }

    render() {
        let btn = document.createElement("btn");
        btn.textContent = this.caption;
        btn.classList.add("btn", this.styleClass);
        return btn;
    }
}

class App {
    constructor(paremtElm, taskList) {
        this.paremtElm = paremtElm;
        this.taskList = taskList;
        this.purgeButton = new Button("Purge Completed");
    }

    render() {
        this.paremtElm.textContent = "";
        this.paremtElm.appendChild(this.taskList.render());
        let btn = this.paremtElm.appendChild(this.purgeButton.render());
        btn.addEventListener("click", () => {
            this.taskList.purgeCompleted();
            this.render();
        });
    }
}
let taskList = new TaskList([
    new Task("Learn ES6 features"),
    new Task("But a new Tesla"),
    new Task("But iSchool a new building")
]);
let app = new App(document.querySelector("#app"), taskList);
app.render();