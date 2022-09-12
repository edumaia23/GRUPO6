const express = require('express');

const app = express();

const router = require ('./src/routers/viagensRouter');


app.use('/', router);

app.listen(3000, ()=>{
    console.log("servidor rodando");

})

