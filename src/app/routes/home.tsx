import { Tasks } from "@/features/tasks/tasks";

export function HomeRouter() {
  return (
    <main className="flex w-full h-full bg-slate-200 justify-center items-center">
      <Tasks />
    </main>
  );
}
