import { toDoArray } from "./create-to-do";

export const displayList = () => {
  const toDoDiv = document.querySelector("#toDoDiv");
  const toDoList = document.querySelector(".toDoList");
  toDoList.innerHTML = listArray(toDoArray);
  function listArray(arg) {
    toDoList.innerHTML = "";
    toDoDiv.appendChild(toDoList);
    let items = "";
    for (let i = 0; i < arg.length; i++) {
      items += `<li>${
        arg[i].Title + " " + arg[i].Description + " " + arg[i].dueDate
      }</li>`;
    }

    return items;
  }
};
