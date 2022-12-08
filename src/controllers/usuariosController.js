// o controller receberá a solicitação do roteador e encaminhará a requisição para a função determinada, rederizando a view correspondente

const usuariosController = {  // primeiro passo é criar a variavel e depois criar a função de acordo com cada página do site

    show: (req, res) => {
        res.render('entrar.ejs')
    },


    login: (req, res) => {

        res.send('realizando login')


    },

    store: (req, res) => {
        res.send('realizando cadastro')
    }



}

module.exports = usuariosController; // exporta o arquivo viagens controle

