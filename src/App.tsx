import { useEffect } from "react";
import { Box } from "@welcome-ui/box";

import useReq from "./hooks/useReq";
import { useApp } from "./store";
import { Modal, ResultsList, ResultsTag, SearchBar } from "./components";

const API_URL =
  "https://www.welcomekit.co/api/v1/embed?organization_reference=Pg4eV6k";

const App = () => {
  const { dispatch } = useApp();
  const { response, status } = useReq({ url: API_URL });

  useEffect(() => {
    dispatch({ type: "GET_ORGA_OFFERS", payload: response });
  }, [dispatch, response]);

  if (status === "LOADING") return <div>Loading...</div>;

  return (
    <Box margin="0 auto" maxWidth={720}>
      <ResultsTag />
      <SearchBar />
      <ResultsList />
      <Modal />
    </Box>
  );
};

export default App;
