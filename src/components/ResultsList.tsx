import { Box } from "@welcome-ui/box";

import { useApp } from "../store";
import JobCard from "./JobCard";
import NoResult from "./NoResult";
import getInitials from "../utils/getInitials";
import useCookie from "../hooks/useCookie";

const ResultsList = () => {
  const { state } = useApp();
  const { cookie, updateCookie } = useCookie("welcometest");
  const initialName = getInitials(state.name);
  const jobs = state.searchResults.data;

  return (
    <Box m="xl">
      {jobs.map((job) => (
        <JobCard
          key={job.id}
          cookie={cookie}
          data={job}
          name={initialName}
          updateCookie={updateCookie}
        />
      ))}

      {state.jobs.length > 0 && state.searchResults.length === 0 && (
        <NoResult />
      )}
    </Box>
  );
};

export default ResultsList;
