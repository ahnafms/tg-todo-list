import { CreateTask } from "./create-tasks";
import { TasksList } from "./tasks-list";
export const Tasks = () => {
  return (
    <div className="flex flex-col gap-10">
      <CreateTask />
      <TasksList />
    </div>
  );
};
