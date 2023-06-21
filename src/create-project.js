import { projectsArray } from "./blank-project-load";
import { updateProjList } from "./initial-dom-manip";
import { changeProject, displayList, updateCurrentArray } from "./display-list";
import { currentArray } from "./blank-project-load";

export const createProjectFactory = (projName, projArray) => {
  return { projName, projArray };
};

const createProject = () => {
  const projButt = document.querySelector(".addProj");
  projButt.addEventListener("click", openProjInput);

  const cancelButt = document.getElementById("cancelButt");
  cancelButt.addEventListener("click", closeProjInput);

  const addButt = document.getElementById("addButt");
  addButt.addEventListener("click", addToArray);
  document.addEventListener("keypress", (event) => {
    let keyCode = event.keyCode ? event.keyCode : event.which;
    const projInput = document.getElementById("newProjInput").value;
    if (projInput === "") {
      return;
    } else if (keyCode === 13) {
      addButt.click();
    }
  });

  function openProjInput() {
    document.getElementById("newProjDiv").style.display = "block";
  }

  function closeProjInput() {
    document.getElementById("newProjInput").value = "";
    document.getElementById("newProjDiv").style.display = "none";
  }

  function addToArray() {
    let newToDoArr = [];
    const newProj = createProjectFactory(
      document.getElementById("newProjInput").value,
      newToDoArr
    );
    projectsArray.push(newProj);
    currentArray = newToDoArr;
    updateProjList();
    closeProjInput();
    displayList();
    deleteProject();
    changeProject();
    saveProjects();

    return { currentArray };
  }
};

let isHovered = false;

const deleteProject = () => {
  const removeProj = (e) => {
    const indexProj = e.target.id.split("");
    const index = indexProj[10];
    projectsArray.splice(index, 1);
    updateProjList();
    deleteProject();
    saveProjects();
    changeProject();
  };
  if (projectsArray.length != 0) {
    const deleteProjButt = document.querySelectorAll('[id *= "deleteProj"]');
    deleteProjButt.forEach((e) => e.addEventListener("click", removeProj));
    deleteProjButt.forEach((e) =>
      e.addEventListener("mouseover", function () {
        isHovered = true;
      })
    );
    deleteProjButt.forEach((e) =>
      e.addEventListener("mouseout", function () {
        isHovered = false;
      })
    );
  }
};

const saveProjects = () => {
  localStorage.setItem("projects", JSON.stringify(projectsArray));
  console.log("save");
};

// const renameProj = () => {
//   function rename() {
//     const projListItem = document.querySelectorAll('[id ^= "proj"]');
//     const newInput = document.createElement("input");
//     projListItem.appendChild(newInput);
//     console.log("hooo");
//   }
//   const projText = document.querySelectorAll('[id ^= "projText"]');
//   projText.forEach((e) => e.addEventListener("dblclick", rename));
// };

export { deleteProject, createProject, isHovered };
