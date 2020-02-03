// -------------------------------------------------------------
// Control Flow Exercises
// ----------
// note: need to have covered control flow for these exercises
// -------------------------------------------------------------

// Q8
// Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######

for(let row = 0; row <=7; row++){
 let line = "#";
 for(let col = 1; col <= row; col++){
 line += "#";
 }
 console.log(line);
}