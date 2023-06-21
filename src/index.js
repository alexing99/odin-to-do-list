import { initialdomManip } from "./initial-dom-manip";
import { updateProjList } from "./initial-dom-manip";
import { createProject, deleteProject, renameProj } from "./create-project";
import { createToDo, openForm } from "./create-to-do";
import { closeForm } from "./create-to-do";
import { displayList, changeProject } from "./display-list";
import { deleteItems } from "./display-list";

import "./styles.css";
// import { displayList } from "./display-list";

// blankProjectLoad();

initialdomManip();

createProject();

updateProjList();

createToDo();

closeForm();

displayList();

deleteItems();

deleteProject();

changeProject();

openForm();

// renameProj();

// selectProject();

// displayList();
