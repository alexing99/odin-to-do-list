import { initialdomManip } from "./initial-dom-manip";
import { blankProjectLoad } from "./blank-project-load";
import { addToArray } from "./blank-project-load";

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
    document.getElementById("newProjDiv").style.display = "none";
  }

  // function addToArray() {
  //   blankProjectLoad().projectsArray.push(
  //     document.getElementById("projInput").value
  //   );
  //   return {}

  console.log(blankProjectLoad().projectsArray);
  console.log(document.getElementById("projInput").value.toString());
};
// };
