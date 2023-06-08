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

  // // DOM for the default project load
  // const projectsList = document.createElement("div");
  // projectsList.textContent = blankProjectLoad().projectTitle;
  // contentDiv.appendChild(projectsList);

  const projList = document.createElement("ul");
  projList.innerHTML = listArray(blankProjectLoad().projectsArray);
  sidebar.appendChild(projList);

  function listArray(arg) {
    let items = "";
    for (let i = 0; i < arg.length; i++) {
      items += `<li>${arg[i.toString()]}</li>`;
      console.log(arg[i.toString()]);
      console.log(blankProjectLoad().projectTitle.toString());
    }

    return items;
  }

  const addProj = document.createElement("button");
  addProj.textContent = "Add Project";
  sidebar.appendChild(addProj);
}
