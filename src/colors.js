export const COLORS = {
  'NONE': { backgroundColor: 'transparent', nextColor: 'RED'},
  'RED': { backgroundColor: '#FF0000', nextColor: 'YELLOW'},
  'YELLOW': { backgroundColor: '#F9FF00', nextColor: 'BLUE'},
  'BLUE': { backgroundColor: '#0000FF', nextColor: 'GREEN'},
  'GREEN': { backgroundColor: '#00FF00', nextColor: 'WHITE'},
  'WHITE': { backgroundColor: '#FFFFFF', nextColor: 'NONE'},
};

export const NUM_COLORS = COLORS.length; // - 1;

