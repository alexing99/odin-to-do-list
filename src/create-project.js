import { projectsArray } from "./blank-project-load";
import { updateProjList } from "./initial-dom-manip";
import { changeProject } from "./display-list";
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

  function openProjInput() {
    document.getElementById("newProjDiv").style.display = "block";
  }

  function closeProjInput() {
    document.getElementById("newProjInput").value = "";
    document.getElementById("newProjDiv").style.display = "none";
  }

  function addToArray() {
    // console.log(projectsArray.length + 1);
    // // const indexGrab = projectsArray.lenght + 1;
    // let newArr = [0, 1, 2][([], [], [])];

    // let thisArrayIndex = projectsArray.length + 1;

    // //create the dom elements for the projects list by doing a for each function,
    // //in that for
    // //<ul>
    // //{title: "new todo", items: []}
    let newToDoArr = [];
    const newProj = createProjectFactory(
      document.getElementById("newProjInput").value,
      newToDoArr
    );
    projectsArray.push(newProj);
    // const lastInd = projectsArray.length;
    currentArray = newToDoArr;
    updateProjList();
    closeProjInput();
    deleteProject();
    changeProject();
    return {};
  }
};

const deleteProject = () => {
  const removeProj = (e) => {
    const indexProj = e.target.id.split("");
    const index = indexProj[10];
    projectsArray.splice(index, 1);
    updateProjList();
    deleteProject();
  };
  if (projectsArray.length != 0) {
    const deleteProjButt = document.querySelectorAll('[id *= "deleteProj"]');
    deleteProjButt.forEach((e) => e.addEventListener("click", removeProj));
  }
};

export { deleteProject, createProject };
