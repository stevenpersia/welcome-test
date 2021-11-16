/**
 * Returns a string with all initials.
 *
 * @params `str`
 */
const getInitials = (str: string): string => {
  return str
    .split(" ")
    .map((item) => item[0])
    .join("")
    .toUpperCase();
};

export default getInitials;
