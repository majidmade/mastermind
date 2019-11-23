export const COLORS = {
  // single-letter keys made me cringe at first (and kinda still do?) buuut
  // in principle, validation logic doesnt care about *colors*, just *values*
  // ... and it makes them line up neater in tests.
  'X': { backgroundColor: 'transparent', nextColor: 'R' },
  'R': { backgroundColor: '#FF0000', nextColor: 'Y' },
  'Y': { backgroundColor: '#F9FF00', nextColor: 'B' },
  'B': { backgroundColor: '#0000FF', nextColor: 'G' },
  'G': { backgroundColor: '#00FF00', nextColor: 'W' },
  'W': { backgroundColor: '#FFFFFF', nextColor: 'X' },
};

const getRandomColor = () => {
  const colorKeys = Object.keys(COLORS).filter(c => c !== 'X')
  const rng = Math.floor(Math.random() * colorKeys.length);
  return COLORS[colorKeys[rng]]
}

export const solution = [
  getRandomColor(),
  getRandomColor(),
  getRandomColor(),
  getRandomColor()
]

