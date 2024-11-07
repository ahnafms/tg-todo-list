import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { taskContracts, taskTypes } from "@/entities/task";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useAtom } from "jotai";
import { tasksAtom } from "@/stores/tasks";
import { v4 as uuidv4 } from "uuid";

export const CreateTask = () => {
  const [tasks, setTasks] = useAtom(tasksAtom);
  const form = useForm<taskTypes.Task>({
    resolver: zodResolver(taskContracts.TaskSchema),
    defaultValues: {
      id: "",
      name: "",
      status: taskContracts.Status.ON_GOING,
    },
  });

  const onSubmit = (data: taskTypes.Task) => {
    setTasks([...tasks, { ...data, id: uuidv4() }]);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Task Name</FormLabel>
              <FormControl>
                <Input placeholder="running" {...field} />
              </FormControl>
              <FormDescription>This is your Task Name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
