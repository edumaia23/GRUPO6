// o controller receberá a solicitação do roteador e encaminhará a requisição para a função determinada, rederizando a view correspondente

const buscaController = {  // primeiro passo é criar a variavel e depois criar a função de acordo com cada página do site

    index: (req, res) => {
        res.render('index.ejs')    
    },


    busca: (req, res) => {
        res.render('passagens.ejs')
    },



}

module.exports = buscaController; // exporta o arquivo viagens controle
