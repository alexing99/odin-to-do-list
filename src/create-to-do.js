import { projectsArray } from "./blank-project-load";
import { displayList, listArray } from "./display-list";
import { currentArray } from "./blank-project-load";

export const createToDo = (Title, Description, DueDate) => {
  // toDoArray.push({ Title, Description, DueDate, Checklist });
  return { Title, Description, DueDate };
};

// const toDoo = createToDo("grocery", "buy groceries", "tomorrow", false);
// projectsArray[0].projArray.push(toDoo);

function openForm() {
  const addToDoButt = document.querySelector("#addToDoButt");

  addToDoButt.addEventListener("click", revealForm);
}

const revealForm = () => {
  const toDoForm = document.querySelector("#myForm");

  if (projectsArray.length === 0) {
    alert("You need to create a project first!");
  } else {
    toDoForm.style.display = "block";
    cancelToDo();
  }
};
function closeForm() {
  const subButt = document.querySelector("#subButt");
  subButt.addEventListener("click", addToDo);
  document.addEventListener("keypress", (event) => {
    let keyCode = event.keyCode ? event.keyCode : event.which;
    const todoInput = document.querySelector("#title").value;

    if (keyCode === 13 && todoInput != "") {
      subButt.click();
    }
  });
}

function cancelToDo() {
  const closeFormClean = () => {
    const toDoForm = document.querySelector("#myForm");
    toDoForm.style.display = "none";
    document.querySelector("#title").value = "";
    document.querySelector("#description").value = "";
    document.querySelector("#dueDate").value = "";
  };
  const canButt = document.querySelector("#canButt");
  canButt.addEventListener("click", closeFormClean);
}

function addToDo() {
  const newToDo = createToDo(
    document.querySelector("#title").value,
    document.querySelector("#description").value,
    document.querySelector("#dueDate").value
  );
  currentArray.push(newToDo);
  document.querySelector("#title").value = "";
  document.querySelector("#description").value = "";
  document.querySelector("#dueDate").value = "";
  displayList();
  saveToDo();
  const toDoForm = document.querySelector("#myForm");
  toDoForm.style.display = "none";
}

const saveToDo = () => {
  localStorage.setItem("projects", JSON.stringify(projectsArray));
  console.log("save");
};

export { closeForm, openForm, addToDo };
