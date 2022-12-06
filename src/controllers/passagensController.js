// o controller receberá a solicitação do roteador e encaminhará a requisição para a função determinada, rederizando a view correspondente

const {Voos,Passagem, sequelize} = require('../../models');
const passagensController = {  // primeiro passo é criar a variavel e depois criar a função de acordo com cada página do site

    index: (req, res) => {
        res.render('index.ejs')    
    },


    busca: async (req, res) => {
       const {origem, destino, ida, volta, classe} = req.query
       var sql=`select passagens.id, passagens.preco, voos_id, data_hora_partida, data_hora_chegada  FROM PASSAGENS inner JOIN VOOS ON PASSAGENS.VOOS_ID = VOOS.ID
       WHERE AEROPORTOS_ORIGEM_ID = 1 AND AEROPORTOS_DESTINO_ID = 2 AND date(data_hora_partida) = "2022-11-07";`;
       let resultado = await sequelize.query(sql,{ type: sequelize.QueryTypes.SELECT});
       console.log(resultado);

        res.render('passagens.ejs', {resultado})
      //res.send(passagens)

    },



}

module.exports = passagensController; // exporta o arquivo viagens controle

