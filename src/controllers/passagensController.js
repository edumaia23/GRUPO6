// o controller receberá a solicitação do roteador e encaminhará a requisição para a função determinada, rederizando a view correspondente
const {Voos,Passagem, sequelize} = require('../../models');
const passagensController = {  // primeiro passo é criar a variavel e depois criar a função de acordo com cada página do site

    index: (req, res) => {
        res.render('index.ejs')    
    },


    busca: async (req, res) => {
       //const {origem, destino, ida, volta, classe} = req.query
        //const passagens = await Passagem.findAll()
        res.render('passagens.ejs')
      // res.send(passagens)

    },



}

module.exports = passagensController; // exporta o arquivo viagens controle

