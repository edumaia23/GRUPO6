// o controller receberá a solicitação do roteador e encaminhará a requisição para a função determinada, rederizando a view correspondente

const viagensController = {  // primeiro passo é criar a variavel e depois criar a função de acordo com cada página do site

    index: (req, res) => {
        res.render('index.ejs')    
    },


    busca: (req, res) => {
        res.render('busca.ejs')
    },

    viagens: (req,res) => {
        res.render('viagens.ejs')
    },




}

module.exports = viagensController; // exporta o arquivo viagens controle
