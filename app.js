const express = require('express'); // importa o pacote express

const app = express(); // cria a variável app., e declara a função express

app.set('view engine','ejs') // gerador das páginas é a bilbioteca ejs
app.set('views', './src/views') // caminho para as views, vão estar nessa pasta
app.use(express.static('public')) // capturar os arquivos estáticos

const router = require ('./src/routers/passagensRouter'); // cria a variavel router e importa o caminho dos arquivos
const usuariosRouter = require('./src/routers/usuariosRouter');

app.use('/', router); // encaminha a requisição para o roteador
app.use('/usuarios',usuariosRouter);

//app.use('/busca',"/src/views/reservas.ejs" ); // encaminha a req. para a busca

app.listen(3000, ()=>{
    console.log("servidor rodando"); // incia o andamento do servidor

})

