export const getMonth = oldDate => {
  const month = oldDate.getMonth() + 1;
  return month;
};

export const getDelay = oldDate => {
  const second = ('0' + oldDate.getSeconds()).slice(-2);
  const miliscnd = ('0' + oldDate.getMilliseconds()).slice(-2);
  return `${second}: ${miliscnd}`;
};
