/* ENUMS */

//Insertion Modes
const insertMode = {
  ACROSSANDDOWN: "AD",
  ACROSS: "A",
  DOWN: "D",
  NONE: "N"
};

// Crossword type for black box in center
const presetModes = {
  NOCENTERBLACKBOX: 0,
  CENTERBLACKBOX: 1
};

// Crossword patterns for no black box in center 
const noCenterBlackBoxMode = {
  INTERSECTION: 0,
  ACROSSONLY: 1,
  DOWNONLY: 2
};

// Crossword patterns for black box in center 
const centerBlackBoxMode = {
  FILLEDAROUNDCENTER: 0,
  FILLEDACROSS: 1,
  FILLEDDOWN: 2,
  ACROSSVERTICALTOCENTER: 3,
  DOWNHORIZONTALTOCENTER: 4
};