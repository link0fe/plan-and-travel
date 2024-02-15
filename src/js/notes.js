const form = document.querySelector("[data-form]");
const lists = document.querySelector("[data-lists]");
const input = document.querySelector("[data-input]");

//local Storage 
class Storage {
    static addToStorage(todoArr) {
        let storage = localStorage.setItem("todo", JSON.stringify(todoArr))
        return storage;
    }

    static getStorage() {
        let storage = localStorage.getItem("todo") === null ? 
        [] : JSON.parse(localStorage.getItem("todo"));
        return storage;
    }
}

// empty array 
let todoArr = Storage.getStorage();

// form part
form .addEventListener("submit", (e) => {
    e.preventDefault();
    let id = Math.random() * 100000;
    const todo = new Todo( id, input.value);
    todoArr = [...todoArr, todo];
    console.log(todoArr);
    UI.displayData();
    UI.clearInput();
    // remove from the dom 
    UI.removeTodo();
    Storage.addToStorage(todoArr);
});

form .addEventListener("reset", (e) => {
    e.preventDefault();
    console.log('xdd')
    UI.clearInput();
    UI.removeTodo(todoArr.remove);
    console.log("xdd", todoArr.clear())
});

class Todo {
    constructor(id, todo) {
        this.id = id;
        this.todo = todo;
    }
}

// display the todo in the DOM 
class UI {
    static displayData() {
        let displayData = todoArr.map((item) => {
            return `
                <div class="todo">
                    <p>${item.todo}</p>
                    <span class="remove" data-id = ${item.id}>Remove</span>
                </div>
            `
        });
        lists.innerHTML = (displayData).join(" ");
    }
    static clearInput() {
        input.value = "";
    }

    static removeTodo() {
        lists.addEventListener("click", (e) => {
            if(e.target.classList.contains("remove")){
                e.target.parentElement.remove();
            };
            let btnId = e.target.dataset.id;
            // remove from array.
            UI.removeArrayTodo(btnId);
        })
    };

    static removeArrayTodo(id) {
        todoArr = todoArr.filter((item) => item.id !== +id);
        Storage.addToStorage(todoArr);
    }
}

window.addEventListener("DOMContentLoaded", () => {
    UI.displayData();
    UI.removeTodo();
})