import { displayList } from "./display-list";

let toDoArray = [];

export const createToDo = (Title, Description, DueDate, Checklist) => {
  // toDoArray.push({ Title, Description, DueDate, Checklist });
  return { Title, Description, DueDate, Checklist };
};

const toDoo = createToDo("grocery", "buy groceries", "tomorrow", false);
toDoArray.push(toDoo);

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
  toDoArray.push(newToDo);
  console.log(toDoArray);
  displayList();
}

export { closeForm };
export { addToDo };
export { toDoArray };
