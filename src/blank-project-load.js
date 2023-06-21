import { createProjectFactory } from "./create-project";
export let projectsArray = [];
if (localStorage.getItem("projects") === null) {
  let defaultArr = [];
  const defaultProject = createProjectFactory("Untitled Project", defaultArr);
  projectsArray.push(defaultProject);
} else projectsArray = JSON.parse(localStorage.getItem("projects"));

let currentArray = projectsArray[0].projArray;
export { currentArray };
