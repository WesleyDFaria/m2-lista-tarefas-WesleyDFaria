const tasks = [
  { title: "Comprar comida para o gato", type: "Urgente" },
  { title: "Consertar Computador", type: "Importante" },
  { title: "Beber água", type: "Normal" },
  { title: "Enviar relatório trimestral", type: "Importante" },
  { title: "Fazer exercícios físicos", type: "Normal" },
  { title: "Agendar consulta médica", type: "Urgente" },
  { title: "Ler pelo menos um capítulo de um livro", type: "Normal" },
  { title: "Limpar a despensa", type: "Importante" },
  { title: "Pagar a conta de energia", type: "Urgente" },
  { title: "Assistir a um documentário interessante", type: "Normal" },
];

function renderElements(task) {
  const ulElement = document.querySelector("ul.tasks__list");

  ulElement.innerHTML = "";
  for (let i = 0; i < task.length; i++) {
    const taskItem = createTaskItem(tasks[i]);
    ulElement.appendChild(taskItem);
  }
}

function createTaskItem(task) {
  const liElement = document.createElement("li");
  liElement.classList.add("task__item");

  const divElement = document.createElement("div");
  divElement.classList.add("task-info__container");

  const spanElement = document.createElement("span");
  spanElement.classList.add("task-type");

  if (task.type.toLowerCase() === "urgente") {
    spanElement.classList.add("span-urgent");
  } else if (task.type.toLowerCase() === "importante") {
    spanElement.classList.add("span-important");
  } else {
    spanElement.classList.add("span-normal");
  }

  const pElement = document.createElement("p");
  pElement.textContent = task.title;

  divElement.appendChild(spanElement);
  divElement.appendChild(pElement);

  const buttonElement = document.createElement("button");
  buttonElement.classList.add("task__button--remove-task");

  buttonElement.addEventListener("click", function () {
    const index = tasks.indexOf(task);
    if (index !== -1) {
      tasks.splice(index, 1);
      renderElements(tasks);
    }
  });

  liElement.appendChild(divElement);
  liElement.appendChild(buttonElement);

  return liElement;
}

const form = document.querySelector(".form__container");
const inputName = document.querySelector(".form__input--text");
const selectInput = document.querySelector(".form__input--priority");
const ulElement = document.querySelector("ul.tasks__list");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const title = inputName.value;
  const type = selectInput.value;

  if (title === "" || type === "") {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  const newTask = { title, type };

  tasks.push(newTask);

  const taskItem = createTaskItem(newTask);
  ulElement.appendChild(taskItem);

  inputName.value = "";
  selectInput.value = "";
});

renderElements(tasks);
