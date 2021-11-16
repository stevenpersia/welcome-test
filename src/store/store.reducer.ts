import { IStoreAction, IStoreState } from "./store.types";

export const storeReducer = (state: IStoreState, action: IStoreAction) => {
  switch (action.type) {
    case "CHANGE_NAME_TEST": {
      return { ...state, name: action.payload };
    }

    default:
      throw new Error(`Unhandled action type: ${action.type}.`);
  }
};
