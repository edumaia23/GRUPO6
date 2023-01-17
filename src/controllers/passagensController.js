// o controller receberá a solicitação do roteador 
//e encaminhará a requisição para a função determinada, rederizando a view correspondente

const { Voos, Passagem, sequelize } = require('../../models');
const passagensController = {  
  // primeiro passo é criar a variavel e depois criar a função de acordo com cada página do site
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
    console.log(ida);

    var sql = `SELECT passagens.id,
       passagens.preco,
       passagens.assento,
       voos_id,
       data_hora_partida,
       data_hora_chegada,
       AO.nome   AS aeroOrigemNome,
       AD.nome   AS aeroDestinoNome,
       AO.cidade AS aeroOrigemCidade,
       AD.cidade AS aeroDestinoCidade
FROM   passagens
       INNER JOIN voos
               ON passagens.voos_id = voos.id
       INNER JOIN aeroportos AO
               ON AO.id = voos.aeroportos_origem_id
       INNER JOIN aeroportos AD
               ON AD.id = voos.aeroportos_destino_id
WHERE  aeroportos_origem_id = ${origem}
       AND aeroportos_destino_id = ${destino}
       AND Date(data_hora_partida) = "${ida}"; `;
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

