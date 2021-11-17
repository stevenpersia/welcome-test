import React from "react";
import { Box } from "@welcome-ui/box";
import { Tag } from "@welcome-ui/tag";

import { useApp } from "../store";

const ResultsTag = () => {
  const { state } = useApp();

  return (
    <Box m="xl" textAlign="right">
      <Tag>{state.searchResults.length || 0} offer(s)</Tag>
    </Box>
  );
};

export default ResultsTag;
