const viagensController = {

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

module.exports = viagensController;
