import { createContext, ReactElement, useContext, useReducer } from "react";
import { Dispatch, IStoreState } from "./store.types";
import { storeReducer } from "./store.reducer";

const initialState: IStoreState = {
  jobs: [],
  name: "",
  searchGroupByAttributes: [],
  searchResults: { data: [], length: 0 },
  searchTerms: { text: "", groupBy: "" },
  websites: [],
};

const AppStateContext = createContext<IStoreState>(initialState);
const AppDispatchContext = createContext<Dispatch | undefined>(undefined);

/**
 * Handle context of global state and dispatches.
 */
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

/**
 * Returns a global state, and a function to update it.
 *
 * @returns `state`, `dispatch`
 */
export const useApp = () => {
  const state = useContext(AppStateContext);
  const dispatch = useContext(AppDispatchContext);

  if (state === undefined || dispatch === undefined) {
    throw new Error("useApp must be used within an AppProvider");
  }

  return { state, dispatch };
};
