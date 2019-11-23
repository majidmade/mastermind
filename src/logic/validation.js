// red: color + position match
const getRedFilter = (solution) => (color, position) => solution[position] === color;

// white: color matches, position wrong
const getWhiteFilter = (solution) => {
  const isRed = getRedFilter(solution);
  const mutateableSolution = [...solution];
  return (color, position) => {
    const match = mutateableSolution.indexOf(color);
    if (match > -1) {
      mutateableSolution[match] = null; // <-- no more reds/whites from this
      return !isRed(color, position) && true;
    }
    return false;
  };
};

export const getGuessChecker = solution => {
  const isRed = getRedFilter(solution);
  const isWhite = getWhiteFilter(solution);
  return guess => ({
    red: guess.filter(isRed).length,
    white: guess.filter(isWhite).length
  });
};
