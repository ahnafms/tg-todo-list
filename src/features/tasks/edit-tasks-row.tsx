import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { TableCell, TableRow } from "@/components/ui/table";
import { taskContracts, taskTypes } from "@/entities/task";
import { deleteTasksAtom, updateTasksAtom } from "@/stores/tasks";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSetAtom } from "jotai";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

function EditTasksRow({ id, name, status }: taskTypes.Task) {
  const setUpdateTask = useSetAtom(updateTasksAtom);
  const setDeleteTask = useSetAtom(deleteTasksAtom);
  const form = useForm<{ status: boolean }>({
    resolver: zodResolver(taskContracts.EditTaskSchema),
    defaultValues: {
      status: false,
    },
  });

  const onSubmit = (status: boolean) => {
    setUpdateTask({
      id,
      name,
      status: status
        ? taskContracts.Status.FINISH
        : taskContracts.Status.ON_GOING,
    });
  };

  const onDelete = () => {
    setDeleteTask(id);
  };

  const isChecked = form.watch("status");

  return (
    <TableRow className="w-full">
      <TableCell
        className={cn("w-40 font-semibold", isChecked && "line-through")}
      >
        {id}
      </TableCell>
      <TableCell
        className={cn("w-20 font-semibold", isChecked && "line-through")}
      >
        {name}
      </TableCell>
      <TableCell
        className={cn("w-20 font-semibold", isChecked && "line-through")}
      >
        {status}
      </TableCell>
      <TableCell className="w-20">
        <Form {...form}>
          <form>
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Checkbox
                      className="w-10 h-10 text-xs"
                      checked={field.value}
                      onCheckedChange={(checked) => {
                        field.onChange(checked);
                        onSubmit(checked as boolean);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </TableCell>
      <TableCell className="w-20">
        <Button onClick={onDelete}>Delete</Button>
      </TableCell>
    </TableRow>
  );
}

export default EditTasksRow;
