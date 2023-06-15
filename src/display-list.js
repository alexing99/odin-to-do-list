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
      items += `<li class="listItem${[i]}">${
        `<input type="checkbox" class="itemCheck${[i]}">` +
        " " +
        arg[i].Title +
        " " +
        arg[i].Description +
        " " +
        arg[i].dueDate +
        " " +
        `<button id="deleteItem${[i]}">`
      }</li>`;
    }
    return items;
  }
  deleteItems();
};

const deleteItems = () => {
  const removeFromList = (e) => {
    console.log(e.target.id);
    const indexArr = e.target.id.split("");
    const index = indexArr[10];
    toDoArray.splice(index, 1);
    displayList();
    console.log("clicky");
  };
  if (toDoArray.length != 0) {
    const deleteItemButt = document.querySelectorAll('[id *= "deleteItem"]');
    deleteItemButt.forEach((e) => e.addEventListener("click", removeFromList));
  }
};

export { deleteItems };

// const selectProject = () => {
// //   let projs = document.querySelectorAll("li");
// //   projs.addEventListener("click", sayHi);
// // };

// function sayHi() {
//   console.log("hi");
// }
