let toDoArray = [];

export const createToDo = (Title, Description, DueDate, Checklist) => {
  toDoArray.push({ Title, Description, DueDate, Checklist });
  return { Title, Description, DueDate, Checklist };
};

const toDoo = createToDo("grocery", "buy groceries", "tomorrow", false);

function addToDo() {
  const newToDo = createToDo(
    document.querySelector("#title").value,
    document.querySelector("#description").value,
    document.querySelector("#dueDate").value,
    document.querySelector("#check").value
  );
  // let title = document.querySelector("#title").value;
  // let description = document.querySelector("#description").value;
  // let dueDate = document.querySelector("#dueDate").value;
  // let check = document.querySelector("#check").value;
  // let newToDo = new createToDo(title, description, dueDate, check);
  // toDoArray.push(newToDo);
  console.log("hi");
}

function closeForm() {
  const subButt = document.querySelector("#subButt");
  subButt.addEventListener("click", addToDo);
  console.log("bet");
  console.log(toDoArray);
}

export { closeForm };
export { addToDo };
