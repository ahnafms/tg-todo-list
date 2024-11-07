import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { tasksAtom } from "@/stores/tasks";
import { useAtomValue } from "jotai";
import EditTasksRow from "./edit-tasks-row";

const headers = ["id", "name", "status", "check", "delete"];

export const TasksList = () => {
  const tasks = useAtomValue(tasksAtom);

  return (
    <Table className="w-72 sm:w-96 md:w-[500px] lg:w-[900px] lg:max-h-40">
      <TableCaption>To do list app</TableCaption>
      <TableHeader className="bg-slate-300">
        <TableRow>
          {headers.map((header, index) => (
            <TableHead key={index}>{header}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {tasks.length > 0 ? (
          tasks.map((task) => <EditTasksRow key={task.id} {...task} />)
        ) : (
          <TableRow className="w-full">
            <TableCell colSpan={10} className="w-full font-medium text-center">
              No data entries yet.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
