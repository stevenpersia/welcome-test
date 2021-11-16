import { createContext, ReactElement, useReducer } from "react";
import { IStoreState } from "./store.types";
import { storeReducer } from "./store.reducer";

const initialState: IStoreState = { name: "", jobs: [], websites: [] };

const AppStateContext = createContext<IStoreState>(initialState);
const AppDispatchContext = createContext({});

export const AppProvider = ({ children }: { children: ReactElement }) => {
  const [state, dispatch] = useReducer(storeReducer, initialState);

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};
