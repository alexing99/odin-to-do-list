import { blankProjectLoad } from "./blank-project-load.js";

export function initialdomManip() {
  // DOM for the Heading
  const contentDiv = document.querySelector("#content");
  const heading = document.createElement("h1");
  heading.textContent = "ToDoy";
  contentDiv.appendChild(heading);
  console.log("hd");

  // DOM for the default project load
  const projectsInfoDiv = document.createElement("div");
  projectsInfoDiv.textContent = blankProjectLoad().projectTitle;
  contentDiv.appendChild(projectsInfoDiv);
}
