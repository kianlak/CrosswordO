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
  FILLEDDOWN: 2
};

// Crossword patterns for filling in the rest of the crossword
const fillInMode = {
  TOPTOBOTTOM: 0,
  LEFTTORIGHT: 1,
  REVERSETOPTOBOTTOM: 2,
  REVERSELEFTTORIGHT: 3,
  RANDOMACROSS: 4,
  RANDOMDOWN: 5
};