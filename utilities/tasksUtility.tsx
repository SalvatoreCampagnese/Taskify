const addTask = (newTask: any): void => {
  // Prendo i valori dalla local storage
  const currentTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  // Aggiungo il task in cima
  currentTasks.unshift(newTask);
  // Riaggiorno la local Storage
  localStorage.setItem("tasks", JSON.stringify(currentTasks));
};

const changeStatusTask = (task: any): void => {
  // Prendo i valori dalla local storage
  const currentTasks = [...JSON.parse(localStorage.getItem("tasks") || "[]")];
  // Cerco il task
  let checkboxTask = currentTasks.find((i: any) => i.id == task.id);
  // Se lo trovo inverto lo stato
  if (checkboxTask) checkboxTask.done = !checkboxTask.done;
  // Riaggiorno la local Storage
  localStorage.setItem("tasks", JSON.stringify(currentTasks));
};

const deleteAllTasks = () => {
  // Rimuove tutti i tasks
  localStorage.setItem("tasks", JSON.stringify([]));
};

export default { addTask, changeStatusTask, deleteAllTasks };
