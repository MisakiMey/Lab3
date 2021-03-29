console.log ("My second project")
var fs=require('fs');
let file = 'file.txt'
fs.readFile (file,'utf8',(err,data)=>{
    if (err){
        console.log (err.message)
    }
    else {
        console.log (data)
    }
})


let files = "web.txt"
let s = "javascript"
fs.writeFile (files, s, (err)=> {
    if (err){
        console.log (err.message)
    }
    else {
        console.log ("ok")
    }
})