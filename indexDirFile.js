const fs = require('fs')

// fs.readFile('some.txt','utf-8',(err,data)=>{
//     fs.writeFile('some.txt', data + '\ndniwe Guf',(err,data1)=>{
//        console.log(data1); 
//     })
// })

// fs.mkdir('text-files',()=>{
//     fs.writeFile('./text-files/some.txt','DnIWE7772',()=>{})
// })
fs.unlink('./text-files/some.txt',()=>{
    fs.rmdir('./text-files', ()=>{})
})
