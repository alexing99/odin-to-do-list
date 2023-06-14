import { initialdomManip } from "./initial-dom-manip";
import { updateProjList } from "./initial-dom-manip";
import { createProject } from "./create-project";
import { createToDo } from "./create-to-do";
import { addToDo } from "./create-to-do";
import { closeForm } from "./create-to-do";
import { selectProject } from "./display-list";

import "./styles.css";
// import { displayList } from "./display-list";

// blankProjectLoad();

initialdomManip();

createProject();

updateProjList();

createToDo();

closeForm();

selectProject();

// displayList();
