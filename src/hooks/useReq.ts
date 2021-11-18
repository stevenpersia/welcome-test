import { useState, useEffect } from "react";

interface IUseReq {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  url: string;
}

/**
 * Custom hook who handle HTTP requests with Fetch API.
 *
 * @params { method?, url }
 */
const useReq = ({ method = "GET", url }: IUseReq) => {
  const initOpt = { url, method, body: undefined, headers: undefined };
  const [options, setOptions] = useState(initOpt);
  const [status, setStatus] = useState("IDLE"); // IDLE | LOADING
  const [response, setResponse] = useState() as any;

  useEffect(() => {
    const fetchInfo = async () => {
      setStatus("LOADING");

      const res = await fetch(options.url, {
        method: options.method,
        body: options.body,
        headers: options.headers,
      });

      const resJson = await res.json();
      setResponse(resJson);

      setStatus("IDLE");
    };

    fetchInfo();
  }, [options]);

  return { status, response, fetch: setOptions };
};

export default useReq;
