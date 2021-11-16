import React from "react";
import { Box } from "@welcome-ui/box";
import { useApp } from "../store";
import JobCard from "./JobCard";
import getInitials from "../utils/getInitials";

const ResultsList = () => {
  const { state } = useApp();
  const initialName = getInitials(state.name);

  return (
    <Box margin="0 auto" maxWidth={720}>
      {state.jobs.map((job) => (
        <JobCard key={job.id} data={job} name={initialName} />
      ))}
    </Box>
  );
};

export default ResultsList;
