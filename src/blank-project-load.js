export const blankProjectLoad = () => {
  let projectsArray = [];
  let projectTitle = "Untitled Project";
  let proj2 = "Proj 2";
  projectsArray.push({ projectTitle });
  projectsArray.push({ proj2 });
  return { projectsArray, projectTitle };
};
