import { IStoreAction, IStoreState } from "./store.types";

/**
 * Handle store reducer to update global state.
 *
 * @params `state`, `action`
 */
export const storeReducer = (state: IStoreState, action: IStoreAction) => {
  switch (action.type) {
    case "GET_ORGA_OFFERS": {
      return { ...state, ...action.payload };
    }

    default:
      throw new Error(`Unhandled action type: ${action.type}.`);
  }
};
