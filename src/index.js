import { initialdomManip } from "./initial-dom-manip";
import { updateProjList } from "./initial-dom-manip";
import { createProject } from "./create-project";
import { createToDo } from "./create-to-do";
import { addToDo } from "./create-to-do";
import { closeForm } from "./create-to-do";

// blankProjectLoad();

initialdomManip();

createProject();

updateProjList();

createToDo();

closeForm();

addToDo();
