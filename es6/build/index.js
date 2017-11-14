// @ts-check
"use strict";

//TODO: create classes for Task,
//TaskList, Button, TaskForm, and App.
//Each of these classes should have
//a render() method that renders their
//data as HTML elements.

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Task = function () {
    function Task(title, done) {
        _classCallCheck(this, Task);

        this.title = title;
        this.done = done;
    }

    _createClass(Task, [{
        key: "render",
        value: function render() {
            var _this = this;

            var li = document.createElement("li");
            li.textContent = this.title;
            if (this.done) {
                li.classList.add("done");
            }
            li.addEventListener("click", function () {
                console.log(_this);
                _this.done = !_this.done;
                li.classList.add("done");
            });

            return li;
        }
    }]);

    return Task;
}();

var TaskList = function () {
    function TaskList(tasks) {
        _classCallCheck(this, TaskList);

        this.tasks = tasks;
    }

    _createClass(TaskList, [{
        key: "addTask",
        value: function addTask(task) {
            this.tasks.push(task);
        }
    }, {
        key: "purgeCompleted",
        value: function purgeCompleted() {
            this.tasks = this.tasks.filter(function (task) {
                return !task.done;
            });
        }
    }, {
        key: "render",
        value: function render() {
            var ul = document.createElement("ul");
            this.tasks.forEach(function (task) {
                ul.appendChild(task.render());
            });
            return ul;
        }
    }]);

    return TaskList;
}();

var Button = function () {
    function Button(caption) {
        var styleClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "btn-primary";

        _classCallCheck(this, Button);

        this.caption = caption;
        this.styleClass = styleClass;
    }

    _createClass(Button, [{
        key: "render",
        value: function render() {
            var btn = document.createElement("btn");
            btn.textContent = this.caption;
            btn.classList.add("btn", this.styleClass);
            return btn;
        }
    }]);

    return Button;
}();

var App = function () {
    function App(paremtElm, taskList) {
        _classCallCheck(this, App);

        this.paremtElm = paremtElm;
        this.taskList = taskList;
        this.purgeButton = new Button("Purge Completed");
    }

    _createClass(App, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            this.paremtElm.textContent = "";
            this.paremtElm.appendChild(this.taskList.render());
            var btn = this.paremtElm.appendChild(this.purgeButton.render());
            btn.addEventListener("click", function () {
                _this2.taskList.purgeCompleted();
                _this2.render();
            });
        }
    }]);

    return App;
}();

var taskList = new TaskList([new Task("Learn ES6 features"), new Task("But a new Tesla"), new Task("But iSchool a new building")]);
var app = new App(document.querySelector("#app"), taskList);
app.render();
//# sourceMappingURL=index.js.map