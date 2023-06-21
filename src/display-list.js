import { projectsArray } from "./blank-project-load";
import { currentArray } from "./blank-project-load";
import { isHovered } from "./create-project";

export const displayList = () => {
  const toDoDiv = document.querySelector("#toDoDiv");
  const toDoList = document.querySelector(".toDoList");
  toDoList.innerHTML = listArray(currentArray);

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
        arg[i].DueDate +
        " " +
        `<button id="deleteItem${[i]}"> X </button>`
      }</li>`;
    }

    return items;
  }
  deleteItems();
};

const updateCurrentArray = (e) => {
  if (isHovered) {
    return;
  } else {
    let projNum = e.target.id.split("")[4];
    currentArray = projectsArray[projNum].projArray;

    document.querySelectorAll('[id ^= "proj').forEach((i) => {
      i.style.border = "black 2px solid";
    });

    const currentProject = document.querySelector(`#proj${projNum}`);
    currentProject.style.border = "purple 5px solid";
    displayList();
    console.log(currentArray);
  }
};

const deleteItems = () => {
  const removeFromList = (e) => {
    const indexArr = e.target.id.split("");
    const index = indexArr[10];
    currentArray.splice(index, 1);
    displayList();
    changeProject();
  };
  if (currentArray.length != 0) {
    const deleteItemButt = document.querySelectorAll('[id *= "deleteItem"]');
    deleteItemButt.forEach((e) => e.addEventListener("click", removeFromList));
  }
};

const changeProject = () => {
  const selectedProj = document.querySelectorAll('[id ^= "proj');
  selectedProj.forEach((e) => e.addEventListener("click", updateCurrentArray));
};

export { deleteItems, changeProject };

// const selectProject = () => {
// //   let projs = document.querySelectorAll("li");
// //   projs.addEventListener("click", sayHi);
// // };

// function sayHi() {
//   console.log("hi");
// }
