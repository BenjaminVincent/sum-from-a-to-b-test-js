const sum = (fromN, toN) => {
  if (toN === fromN) {
    return fromN;
  }
  return sum(fromN, toN - 1) + toN;
};

module.exports = sum;
