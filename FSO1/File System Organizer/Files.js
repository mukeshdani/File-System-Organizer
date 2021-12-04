
/* 
let input = process.argv[2]
console.log ( input );
 */

let inputArr = process.argv.slice(0)
//console.log ( inputArr)


let cammand = inputArr[2]

//console.log (cammand) 


switch(cammand){


    case 'Tree': treeFn()
    break ; 
    case 'Organizse': organizeFn()
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
    console.log(`
           LIST OF ALL THE CAMMANDS :
           1)Tree Cammand -node Files.js tree <dir Name>
           2)Organizse cammand -node Files.js Organizse <dir Name>
           3)Help -node cammand -node Files.js Help 
    `)
}



