const express = require('express');

const app = express();

app.set('view engine','ejs')
app.set('views', './src/views')

const router = require ('./src/routers/viagensRouter');


app.use('/', router);

app.listen(3000, ()=>{
    console.log("servidor rodando");

})

