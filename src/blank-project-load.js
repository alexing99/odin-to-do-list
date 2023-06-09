export const blankProjectLoad = () => {
  let projectsArray = [];

  projectsArray.push("Proj1");
  projectsArray.push("Proj2");
  return { projectsArray };
};

function addToArray() {
  projectsArray.push(document.getElementById("projInput").value);
  console.log("hh");
}

export { addToArray };
