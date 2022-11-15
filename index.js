const express = require('express')

const app = express()
app.get('/',(req,res)=>{
    res.sendFile('/home/ol/MolchanovCode/NodeItProger/templates/index.html')
})
app.get('/about',(req,res)=>{
    res.sendFile('/home/ol/MolchanovCode/NodeItProger/templates/about.html')
})
app.get('/user/:username/:id',(req,res)=>{
    res.send(`<h1>userID: ${req.params.id}Username: ${req.params.username}<h1/> `)
})
PORT = 3000
app.listen(3000, ()=>{
    console.log(`server started:http://localhost:${PORT}`);
})
// 9 lesson end