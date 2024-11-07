import { Task } from "@/entities/task/task.types";
import { atom } from "jotai";

export const tasksAtom = atom<Task[]>([]);

export const updateTasksAtom = atom(null, (get, set, task: Task) => {
  const tasks = get(tasksAtom);

  const updatedTasks = tasks.map((t) => (t.id === task.id ? task : t));

  // Set the new array to tasksAtom
  set(tasksAtom, updatedTasks);
});
