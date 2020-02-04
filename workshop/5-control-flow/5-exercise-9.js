// -------------------------------------------------------------
// Control Flow Exercises
// ----------
// note: need to have covered control flow for these exercises
// -------------------------------------------------------------

// Q9
// Write a program that creates a string that represents an 8×8 grid,
// using newline characters to separate lines. At each position of the grid
// there is either an "_" or a "#" character. The characters should form a chessboard.
//
// #_#_#_#_
// _#_#_#_#
// #_#_#_#_
// _#_#_#_#
// #_#_#_#_
// _#_#_#_#
// #_#_#_#_
// _#_#_#_#

// for (let i = 1; i <= 8; i++) {
//   if (i % 2 == 1) console.log("#_#_#_#_");
//   else console.log("_#_#_#_#");
// }

for (let i = 1; i <= 8; i++) {
  let line = "";
  if (i % 2 === 0) {
    for (let k = 1; k <= 8; k++) {
      if (k % 2 === 0) {
        line += "_";
      } else {
        line += "#";
      }
    }
  } else {
    for (j = 1; j <= 8; j++) {
      if (j % 2 === 0) {
        line += "#";
      } else {
        line += "_";
      }
    }
  }
  console.log(line);
}
