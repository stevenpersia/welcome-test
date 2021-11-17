import { useEffect, useState } from "react";

const getItem = (key: string) => {
  return document?.cookie
    ?.split("; ")
    .find((row) => row.startsWith(`${key}=`))
    ?.split("=")[1];
};

const setItem = (key: string, value: string[]) => {
  document.cookie = `${key}=${JSON.stringify(value)}; SameSite=Lax; Secure"`;
};

/**
 * Custom hook who handle cookies (Store & Update).
 * Specially made and used for Already Seen feature.
 *
 * @params `key`, `defaultValue`
 *
 */
const useCookie = (key: string) => {
  const [cookie, setCookie] = useState<string[]>([]);

  useEffect(() => {
    const cookieFound = getItem(key);
    if (cookieFound) setCookie(JSON.parse(cookieFound));
  }, [key]);

  const updateCookie = (value: number | string) => {
    const id = value.toString();
    const isAlreadyInCookie = cookie?.find((el) => el === id);

    if (!isAlreadyInCookie) {
      setCookie([...cookie, id]);
      setItem(key, [...cookie, id]);
    }
  };

  return { cookie, updateCookie };
};

export default useCookie;
