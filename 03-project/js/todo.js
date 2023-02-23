const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

let toDos = [];

const TODOS_KEY = "todos"

function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function paintToDo(newToDoObj) {
    const li = document.createElement("li");
    li.id = newToDoObj.id;

    const span = document.createElement("span");
    span.innerText = newToDoObj.text;

    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", (event) => {
        const checked = event.target.parentElement;
        toDos = toDos.filter(toDo => parseInt(checked.id) !== toDo.id);
        saveToDos();
        checked.remove();
    })

    li.appendChild(span);
    li.appendChild(button);

    toDoList.appendChild(li);
}

toDoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        id: Date.now(),
        text: newToDo,
    }

    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
})

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
