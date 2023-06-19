import { createProjectFactory } from "./create-project";

export let projectsArray = [];

let defaultArr = [];
const defaultProject = createProjectFactory("Untitled Project", defaultArr);
projectsArray.push(defaultProject);
let currentArray = projectsArray[0].projArray;
export { currentArray };
