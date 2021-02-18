const { Console } = require('console');
const express =require('express')
const app = express();
const expressJSX = require('./express-jsx');

app.engine("jsx", expressJSX)
app.set("views", "./views")
app.set("view engine", "jsx")

app.get('/', function(req,res){
    res.render("index",{hello:'HOLA', world:'mundo'})
})

const server = app.listen(8000, function(){
    console.log(`listening http://localhost:${server.address().port}`);
})

