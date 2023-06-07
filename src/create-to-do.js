let toDoArray = [];

export const createToDo = (Title, Description, DueDate, Checklist) => {
  toDoArray.push({ Title, Description, DueDate, Checklist });
  return { Title, Description, DueDate, Checklist };
};
