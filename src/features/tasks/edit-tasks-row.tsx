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
import { updateTasksAtom } from "@/stores/tasks";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSetAtom } from "jotai";
import { useForm } from "react-hook-form";

function EditTasksRow({ id, name, status }: taskTypes.Task) {
  const setUpdateTask = useSetAtom(updateTasksAtom);
  const form = useForm<{ status: boolean }>({
    resolver: zodResolver(taskContracts.EditTaskSchema),
    defaultValues: {
      status: false,
    },
  });

  const onSubmit = (status: boolean) => {
    if (status == false) return;
    setUpdateTask({
      id,
      name,
      status: status
        ? taskContracts.Status.FINISH
        : taskContracts.Status.ON_GOING,
    });
  };

  return (
    <TableRow className="w-full">
      <TableCell className="w-40 font-medium">{id}</TableCell>
      <TableCell className="w-20">{name}</TableCell>
      <TableCell className="w-20">{status}</TableCell>
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
    </TableRow>
  );
}

export default EditTasksRow;
