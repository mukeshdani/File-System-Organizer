const fs = require("fs");
const path = require("path");
const heplObj = require('./commands/help') ;
const treeObj = require('./commands/tree');
const organizeObj = require('./commands/organize');

let inputArr = process.argv.slice(2); 


let command = inputArr[0]; 

switch (command) {
  case "tree":
    treeObj.treeKey(inputArr[1]);
    break;
  case "organize":
    organizeObj.organizeKey(inputArr[1]); 
    break;
  case "help":
    heplObj.helpKey()
    break;
  default:
    console.log("PLEASE ENTER A VALID COMMAND");
    break;
};