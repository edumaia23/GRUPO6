// o controller receberá a solicitação do roteador e encaminhará a requisição para a função determinada, rederizando a view correspondente

const { Voos, Passagem, sequelize } = require('../../models');
const passagensController = {  // primeiro passo é criar a variavel e depois criar a função de acordo com cada página do site

  //escrever a consulta q busca os aeroportos
  //executar a consulta
  //enviar o resultado junto com view

  index: async (req, res) => {
    var sql = 'select id, cidade, nome, sigla FROM aeroportos'
    let aeroportos = await sequelize.query(sql, { type: sequelize.QueryTypes.SELECT });
    res.render('index.ejs',{aeroportos})
  },


  busca: async (req, res) => {
    const { origem, destino, ida, volta, classe } = req.query
    var sql = `select passagens.id, passagens.preco, voos_id, data_hora_partida, data_hora_chegada  FROM PASSAGENS inner JOIN VOOS ON PASSAGENS.VOOS_ID = VOOS.ID
       WHERE AEROPORTOS_ORIGEM_ID = ${origem} AND AEROPORTOS_DESTINO_ID = ${destino} AND date(data_hora_partida) = "${ida}";`;
    let resultado = await sequelize.query(sql, { type: sequelize.QueryTypes.SELECT });
    console.log(resultado);

    res.render('passagens.ejs', { resultado })


    //res.send(passagens)

  },



}
//const calendario = async () => {}

//const resultado = Math.floor(Math.random() * 2500) + 300;
//console.log('resultado', resultado);


module.exports = passagensController; // exporta o arquivo viagens controle

