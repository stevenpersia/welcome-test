import { IStoreAction, IStoreState } from "./store.types";

/**
 * Handle store reducer to update global state.
 *
 * @params `state`, `action`
 */
export const storeReducer = (state: IStoreState, action: IStoreAction) => {
  switch (action.type) {
    case "GET_ORGA_OFFERS": {
      const name = action.payload?.name;
      const jobs = action.payload?.jobs;
      const websites = action.payload?.websites;

      // Get all attributes for search bar and format them
      const searchGroupByAttributes = [
        {
          label: "Location",
          options: [...new Set(jobs?.map((job) => job.office.name.trim()))].map(
            (job) => ({ label: job, value: job })
          ),
        },
        {
          label: "Dept.",
          options: [
            ...new Set(jobs?.map((job) => job.department.name.trim())),
          ].map((job) => ({ label: job, value: job })),
        },
      ];

      return {
        ...state,
        name,
        jobs,
        websites,
        searchGroupByAttributes,
        searchResults: { data: jobs, length: jobs?.length },
      };
    }

    case "SEARCH": {
      const foundJobs = state.jobs
        .filter((job) => {
          return job.name
            .toLowerCase()
            .includes(action.payload.text.toLowerCase());
        })
        .filter((job) => {
          return (
            job.office.name.includes(action.payload.groupBy) ||
            job.department.name.includes(action.payload.groupBy)
          );
        });

      return {
        ...state,
        searchResults: { data: foundJobs, length: foundJobs.length },
        searchTerms: action.payload,
      };
    }

    default:
      throw new Error(
        `Unhandled action type: ${(action as IStoreAction).type}.`
      );
  }
};
