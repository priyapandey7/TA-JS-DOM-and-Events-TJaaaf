let inputText = document.getElementById("text");
let root = document.querySelector("ul");
let all = document.querySelector(".all");
let complete = document.querySelector(".complete");
let incomplete = document.querySelector(".incomplete");
let clear = document.querySelector(".clear");
let toggleSelect = document.getElementById("toggleSelect");
let list = document.querySelector(".list-box");
let borders = document.querySelector(".borders");

let allTodos = JSON.parse(localStorage.getItem("allTodos")) || [];

toggleSelect.addEventListener("click", () => {
  let isCompletedAll = allTodos.every((obj) => obj.isDone === true);
  if (isCompletedAll) {
    allTodos = allTodos.map((todo) => {
      todo.isDone = false;
      return todo;
    });
    clear.style.display = "none";
  } else {
    allTodos = allTodos.map((todo) => {
      todo.isDone = true;
      return todo;
    });
    clear.style.display = "block";
  }
  createUI(allTodos);
  localStorage.setItem("allTodos", JSON.stringify(allTodos));
});

clear.addEventListener("click", () => {
  allTodos.length = 0;
  createUI(allTodos);
  localStorage.setItem("allTodos", JSON.stringify(allTodos));
});

function handleEvent(event) {
  if (event.keyCode === 13 && event.target.value !== " ") {
    let todo = {
      value: event.target.value,
      isDone: false,
    };

    allTodos.push(todo);
    inputText.value = "";
    createUI(allTodos);
    localStorage.setItem("allTodos", JSON.stringify(allTodos));
    list.style.display = "flex";
    borders.style.display = "flex";
  }
}

function removeTodo(event) {
  let id = event.target.dataset.id;
  allTodos.splice(id, 1);
  createUI(allTodos);
  localStorage.setItem("allTodos", JSON.stringify(allTodos));
}

function handleToggle() {
  let id = Element.target.dataset.id;
  allTodos[id].isDone = !allTodos[id].isDone;
  createUI(allTodos);
  localStorage.setItem("allTodos", JSON.stringify(allTodos));
}

function createUI(todos = allTodos) {
  root.innerHTML = "";
  todos.forEach((todo, index) => {
    let li = document.createElement("li");
    let input = document.createElement("input");
    input.type = "checkbox";
    input.setAttribute("data-id", index);
    input.addEventListener("click", handleToggle);
    input.checked = todo.isDone;
    let p = document.createElement("p");
    p.innerText = todo.value;
    if (todo.isDone === true) {
      p.classList.add("strike");
    }
    let cancelBtn = document.createElement("span");
    cancelBtn.innerText = "X";
    cancelBtn.classList.add("cancel");
    cancelBtn.setAttribute("data-id", index);
    cancelBtn.addEventListener("click", removeTodo);
    li.append(input);
    li.append(p);
    li.append(cancelBtn);
    root.append(li);
  });
}

all.addEventListener("click", () => {
  createUI(allTodos);
});

complete.addEventListener("click", () => {
  let completed = allTodos.filter((v) => v.isDone === true);
  createUI(completed);
});

incomplete.addEventListener("click", () => {
  let incomplete = allTodos.filter((v) => v.isDone === false);
  createUI(incomplete);
});

inputText.addEventListener("keyup", handleEvent);
