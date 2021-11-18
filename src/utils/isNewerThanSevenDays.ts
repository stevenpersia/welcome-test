const isNewerThanSevenDays = (date: string) => {
  const now = new Date();
  const publishDate = new Date(date);
  const diffTime = Math.abs(publishDate.valueOf() - now.valueOf());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays <= 7;
};

export default isNewerThanSevenDays;
