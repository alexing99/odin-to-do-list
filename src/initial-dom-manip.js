import { projectsArray } from "./blank-project-load";

export function initialdomManip() {
  const contentDiv = document.querySelector("#content");
  // DOM for the Heading
  const heading = document.createElement("h1");
  heading.textContent = "ToDoy";
  contentDiv.appendChild(heading);

  // sidebar
  const sidebar = document.createElement("div");
  sidebar.classList.add("sidebar");
  sidebar.style.backgroundColor = "lightblue";
  sidebar.style.width = "500px";
  contentDiv.appendChild(sidebar);

  // const todayButt = document.createElement("button");
  // todayButt.textContent = "Today";
  // sidebar.appendChild(todayButt);

  // const weekButt = document.createElement("button");
  // weekButt.textContent = "This Week";
  // sidebar.appendChild(weekButt);

  const sideHead = document.createElement("h2");
  sideHead.textContent = "Projects";
  sidebar.appendChild(sideHead);

  const projList = document.createElement("ul");
  projList.classList.add("projList");
  sidebar.appendChild(projList);

  const addProj = document.createElement("button");
  addProj.classList.add("addProj");
  addProj.textContent = "Add Project";
  sidebar.appendChild(addProj);

  const newProjDiv = document.createElement("div");
  newProjDiv.setAttribute("id", "newProjDiv");
  newProjDiv.style.display = "none";
  sidebar.appendChild(newProjDiv);

  const projInput = document.createElement("input");
  projInput.setAttribute("id", "newProjInput");

  const addButt = document.createElement("button");
  addButt.setAttribute("id", "addButt");
  addButt.textContent = "Add";

  const cancelButt = document.createElement("button");
  cancelButt.setAttribute("id", "cancelButt");
  cancelButt.textContent = "Cancel";

  newProjDiv.appendChild(projInput);
  newProjDiv.appendChild(addButt);
  newProjDiv.appendChild(cancelButt);

  const toDoDiv = document.createElement("div");
  toDoDiv.classList.add("toDoDiv");
}

const updateProjList = () => {
  const sidebar = document.querySelector(".sidebar");
  const projList = document.querySelector(".projList");

  projList.innerHTML = listArray(projectsArray);
  sidebar.appendChild(projList);

  function listArray(arg) {
    projList.innerHTML = "";
    sidebar.appendChild(projList);
    let items = "";
    for (let i = 0; i < arg.length; i++) {
      items += `<li id=proj${i}>${arg[i].projName}         <button id="deleteProj${i}" >X</button></li>`;
    }

    return items;
  }
};

export { updateProjList };
