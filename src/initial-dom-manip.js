import { blankProjectLoad } from "./blank-project-load.js";

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

  const todayButt = document.createElement("button");
  todayButt.textContent = "Today";
  sidebar.appendChild(todayButt);

  const weekButt = document.createElement("button");
  weekButt.textContent = "This Week";
  sidebar.appendChild(weekButt);

  const sideHead = document.createElement("h2");
  sideHead.textContent = "Projects";
  sidebar.appendChild(sideHead);

  const projList = document.createElement("ul");
  projList.innerHTML = listArray(blankProjectLoad().projectsArray);
  sidebar.appendChild(projList);

  function listArray(arg) {
    let items = "";
    for (let i = 0; i < arg.length; i++) {
      items += `<li>${arg[i.toString()]}</li>`;
    }

    return items;
  }

  const addProj = document.createElement("button");
  addProj.classList.add("addProj");
  addProj.textContent = "Add Project";
  sidebar.appendChild(addProj);

  const newProjDiv = document.createElement("div");
  newProjDiv.setAttribute("id", "newProjDiv");
  newProjDiv.style.display = "none";
  sidebar.appendChild(newProjDiv);

  const projInput = document.createElement("input");
  projInput.setAttribute("id", "projInput");
  const addButt = document.createElement("button");
  addButt.setAttribute("id", "addButt");
  const cancelButt = document.createElement("button");
  cancelButt.setAttribute("id", "cancelButt");
  newProjDiv.appendChild(projInput);
  newProjDiv.appendChild(addButt);
  newProjDiv.appendChild(cancelButt);
}
