import { projectsArray } from "./blank-project-load";
import { updateProjList } from "./initial-dom-manip";

export const createProject = () => {
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
    document.getElementById("projInput").value = "";
    document.getElementById("newProjDiv").style.display = "none";
  }

  function addToArray() {
    projectsArray.push(document.getElementById("projInput").value);
    console.log(projectsArray);
    updateProjList();
    closeProjInput();
    deleteProject();
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

export { deleteProject };
