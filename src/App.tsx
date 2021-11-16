import React, { useEffect } from "react";
import useReq from "./hooks/useReq";
import { useApp } from "./store";

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
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
