const express = require('express')
const app = express()
app.get('/', function(req,res,next){
    res.send({ hola : "mundo"})
})

const server = app.listen(8000,function(){
    console.log(`listenig http://localhost:${server.address().port}`)
})
