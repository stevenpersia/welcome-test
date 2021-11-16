import { createContext, ReactElement } from "react";
import { IAppStateContext } from "../utils/types";

const AppStateContext = createContext<IAppStateContext>({
  name: "",
  jobs: [],
  websites: [],
});

const AppDispatchContext = createContext({});

export const AppProvider = ({ children }: { children: ReactElement }) => {
  return (
    <AppStateContext.Provider value={{}}>
      <AppDispatchContext.Provider value={{}}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};
