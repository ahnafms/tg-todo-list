import { z } from "zod";

export const TaskSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(2, "Task name must be at least 2 characters."),
});
