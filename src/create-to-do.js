import { projectsArray } from "./blank-project-load";
import { displayList, listArray } from "./display-list";
import { currentArray } from "./blank-project-load";

export const createToDo = (Title, Description, DueDate, Checklist) => {
  // toDoArray.push({ Title, Description, DueDate, Checklist });
  return { Title, Description, DueDate, Checklist };
};

// const toDoo = createToDo("grocery", "buy groceries", "tomorrow", false);
// projectsArray[0].projArray.push(toDoo);

function closeForm() {
  const subButt = document.querySelector("#subButt");
  subButt.addEventListener("click", addToDo);
}

function addToDo() {
  const newToDo = createToDo(
    document.querySelector("#title").value,
    document.querySelector("#description").value,
    document.querySelector("#dueDate").value,
    false
  );
  currentArray.push(newToDo);
  document.querySelector("#title").value = "";
  document.querySelector("#description").value = "";
  document.querySelector("#dueDate").value = "";
  displayList();
  console.log("1", projectsArray);
  console.log("2", projectsArray[0]);
  console.log("3", projectsArray[0].projName);
  console.log("4", projectsArray[0].projArray);
}

export { closeForm };
export { addToDo };
