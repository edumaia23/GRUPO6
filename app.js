const express = require('express'); // importa o pacote express

//SERVIDOR
const app = express(); // cria a variável app., e declara a função express - SERVIDOR

//CAMINHO PARA O SERVIDOR CONTENDO DOIS PARAMETROS -  ENDEREÇO E SUA FUNÇÃO
app.set('view engine','ejs') // gerador das páginas é a bilbioteca ejs 
app.set('views', './src/views') // caminho para as views, vão estar nessa pasta - 
app.use(express.static('public')) // capturar os arquivos estáticos
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

//cria a variavel router e importa o caminho dos arquivos
const router = require ('./src/routers/passagensRouter'); // 
const usuariosRouter = require('./src/routers/usuariosRouter');

app.use('/', router); // encaminha a requisição para o roteador
app.use('/usuarios',usuariosRouter);

//app.use('/busca',"/src/views/reservas.ejs" ); // encaminha a req. para a busca

app.listen(3000, ()=>{

    
    console.log("servidor rodando"); // incia o andamento do servidor

})

