import { z } from "zod";
import { TaskSchema } from "./task.contracts";

export type Task = z.infer<typeof TaskSchema>;
