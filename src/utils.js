const getCurrentDate = ({ date = new Date() }) => {
  const dateString = new Date(date);
  
  const day = dateString.getDate();
  const month = dateString.toLocaleString("in", { month: "short" });

  return `${day} ${month}`;
};

export { getCurrentDate };
