
/* 
let input = process.argv[2]
console.log ( input );
 */

let inputArr = process.argv.slice(0)
//console.log ( inputArr)


let cammand = inputArr[2]

//console.log (cammand) 


switch(cammand){


    case 'tree': treeFn()
    break ; 
    case 'organizse': organizeFn()
    break;
    case 'Help': HelpFn()
    break;
    default:
        console.log ("WRONG CAMMAND ")
        break;
}


function organizeFn(){
    console.log("ORGANIZE FUNCTION IS IMPLEMENTED ")
}

function treeFn(){
    console.log("TREE FUNCTION IS IMPLEMENTED ")
}

function HelpFn(){
    console.log("HELP FUNCTION IS IMPLEMENTED ")
}



