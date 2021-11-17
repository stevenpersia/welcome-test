import { Box } from "@welcome-ui/box";

import { useApp } from "../store";
import JobCard from "./JobCard";
import NoResult from "./NoResult";
import getInitials from "../utils/getInitials";

const ResultsList = () => {
  const { state } = useApp();
  const initialName = getInitials(state.name);
  const jobs = state.searchResults.data;

  return (
    <Box m="xl">
      {jobs.map((job) => (
        <JobCard key={job.id} data={job} name={initialName} />
      ))}

      {state.searchResults.length === 0 && <NoResult />}
    </Box>
  );
};

export default ResultsList;
