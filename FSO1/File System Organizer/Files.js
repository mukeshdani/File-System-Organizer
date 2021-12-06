
/* 
let input = process.argv[2]
console.log ( input );
 */

const { dir } = require("console");
const fs = require("fs");
const path = require("path");

let inputArr = process.argv.slice(2)
//console.log ( inputArr)


let cammand = inputArr[0]

//console.log (cammand) 

let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
    documents: [
      "docx",
      "doc",
      "pdf",
      "xlsx",
      "xls",
      "odt",
      "ods",
      "odp",
      "odg",
      "odf",
      "txt",
      "ps",
      "tex",
    ],
    app: ["exe", "dmg", "pkg", "deb"],
  };


switch(cammand){


    case 'Tree': treeFn()
    break ; 
    case 'Organizse': organizeFn(inputArr[1])
    break;
    case 'Help': HelpFn()
    break;
    default:
        console.log ("WRONG CAMMAND ")
        break;
}


function organizeFn(dirpath) {
    // 1.input of a directory path
    let destPath;
  
    if (dirpath == undefined) {
      console.log("PLease enter a Directory Path");
      return;
    } else {
      let doesExist = fs.existsSync(dirpath);
      //console.log(doesExist) // it returns true or false for the directory
  
      if (doesExist == true) {
        //2 . create a Organized files Directory
        destPath = path.join(dirpath, "organized_files");
        //destpath ->//D:\FJP2 Dev\test folder\organized_files // I want to create the folder in this path
        if (fs.existsSync(destPath) == false) {
          fs.mkdirSync(destPath); // we will only creata a directory if it does not exist
        } else {
          console.log("The Folder Already Exists");
        }
      } else {
        console.log("Please enter a valid Path");
      }
    }
    organizeHelper(dirpath, destPath);
  }
  // we wrote this organizeHelper to categorize the files
  function organizeHelper(src, dest) {
    let childNames = fs.readdirSync(src); // get all the files and folders in that dirctory
    //console.log(childNames)
  
    for (let i = 0; i < childNames.length; i++) {
      let childAddress = path.join(src, childNames[i]); // path is identified for the file
      let isFile = fs.lstatSync(childAddress).isFile(); // we check here to identify files
  
      if (isFile == true) {
        let fileCategory = getCategory(childNames[i]);
        console.log(childNames[i] + "  belongs to  " + fileCategory);
  
        sendFiles(childAddress, dest, fileCategory);
      }
    }
  }
  
  function getCategory(name) {
    let ext = path.extname(name); // we will take out the extension of the files here
    //console.log(ext)
    ext = ext.slice(1);
    //console.log(ext)
  
    for (let type in types) {
      let cTypeArr = types[type];
      //console.log(cTypeArr)
  
      for (let i = 0; i < cTypeArr.length; i++) {
        if (ext == cTypeArr[i]) {
         
          return type; 
        }
      }
    }
  
    return "others";
  }
  
  function sendFiles(srcFilePath, dest, fileCategory) {
    let catPath = path.join(dest, fileCategory);
  
  
    if (fs.existsSync(catPath) == false) {
      fs.mkdirSync(catPath);
    }
  
    let fileName = path.basename(srcFilePath);
    let destFilePath = path.join(catPath, fileName);
  
    
  
    fs.copyFileSync(srcFilePath, destFilePath); 
    fs.unlinkSync(srcFilePath); 
  
    console.log(fileName + " copied to " + fileCategory);
  }
  




  
  
  
  /* Test function Started */
  function treeFn(dirpath) {
    if (dirpath == undefined) {
      console.log("Please enter a valid Path");
    } else {
      let doesExist = fs.existsSync(dirpath);
      if (doesExist) {
        treeHelper(dirpath, " ");
      }
    }
  }
  
  function treeHelper(targetPath, indent) {
    let isFile = fs.lstatSync(targetPath).isFile();
  
    if (isFile == true) {
      let fileName = path.basename(targetPath);
      console.log(indent + "├──" + fileName);
    } else {
      let dirName = path.basename(targetPath);
      console.log(indent + "└──" + dirName);
  
      let children = fs.readdirSync(targetPath);
  
      for (let i = 0; i < children.length; i++) {
        let childPath = path.join(targetPath, children[i]);
        treeHelper(childPath, indent + "\t");
      }
    }
  }
  
  
  module.exports={
         treeKey : treeFn
  }

  /* Test end */



  /* Help function started */
function HelpFn(){
    console.log(`
           LIST OF ALL THE CAMMANDS :
           1)Tree Cammand -node Files.js tree <dir Name>
           2)Organizse cammand -node Files.js Organizse <dir Name>
           3)Help -node cammand -node Files.js Help 
    `)
}


/* end  */
