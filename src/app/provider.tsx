import { Spinner } from "@/components/ui/spinner";
import React from "react";
import { Provider } from "jotai";

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <Provider>
      <React.Suspense
        fallback={
          <div className="flex h-screen w-screen items-center justify-center">
            <Spinner size="xl" />
          </div>
        }
      >
        {children}{" "}
      </React.Suspense>
    </Provider>
  );
};
