import React, { useState } from "react";
import { Box } from "@welcome-ui/box";
import { Modal as WuiModal, useModalState } from "@welcome-ui/modal";

import { useApp } from "../store";
import JobCard from "./JobCard";
import Modal from "./Modal";
import NoResult from "./NoResult";
import getInitials from "../utils/getInitials";
import { IJob } from "../utils/interfaces";

const ResultsList = () => {
  const [selectedJob, setSelectedJob] = useState<IJob>();
  const { state } = useApp();
  const modal = useModalState();
  const initialName = getInitials(state.name);

  return (
    <Box m="xl">
      {state.searchResults.data.map((job) => (
        <WuiModal.Trigger
          as={Box}
          key={job.id}
          onClick={() => setSelectedJob(job)}
          {...modal}
        >
          <JobCard data={job} name={initialName} />
        </WuiModal.Trigger>
      ))}

      {state.searchResults.length === 0 && <NoResult />}

      {selectedJob && <Modal data={selectedJob} modal={modal} />}
    </Box>
  );
};

export default ResultsList;
