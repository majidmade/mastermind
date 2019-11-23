const getRedChecker = (solution) => (color, position) => solution[position] === color;

const getWhiteChecker = (solution) => {
  const isRed = getRedChecker(solution);
  const mutateableSolution = [...solution];
  return (color, position) => {
    const match = mutateableSolution.indexOf(color);
    if (match > -1) {
      mutateableSolution[match] = null;
      return !isRed(color, position) && true;
    }
    return false;
  };
};

export const getGuessChecker = solution => {
  const isRed = getRedChecker(solution);
  const isWhite = getWhiteChecker(solution);
  return guess => ({
    red: guess.filter(isRed).length,
    white: guess.filter(isWhite).length
  });
};
