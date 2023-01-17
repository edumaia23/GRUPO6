// o controller receberá a solicitação do roteador e encaminhará a requisição para a função determinada, rederizando a view correspondente
const filePath = '../database/usuarios.json'
const usuarios = require(filePath);

const fs = require('fs');
let path = require('path');
function save(){
    fs.writeFileSync(path.resolve(__dirname + `/${filePath}`), JSON.stringify(usuarios, null, 4));
}

const usuariosController = {  // primeiro passo é criar a variavel e depois criar a função de acordo com cada página do site

    show: (req, res) => {
        res.render('entrar.ejs')
    },

    registrar: (req , res) =>{

        const { email, senha, nome } = req.body

            // Verificar se existe um usuario com este email
            let usuarioExiste = fs.existsSync(__dirname + `/../database/${email}-tarefas.json`);
            if(usuarioExiste){
                return res.status(409).json({erro:"Usuário já cadastrado"});
            }
            // Confirmar se senha foi preenchida
            if(senha == ''){
                return res.status(422).json({erro:"Senha não foi preenchida"});
            }
            let novoId = usuarios.length == 0 ? 1 : usuarios[usuarios.length -1 ].id + 1; 
    
            let usuario = {
                id: novoId,
                nome,
                email,
                senha
            }
            usuarios.push(usuario)
            console.log(usuarios);
            save();
    
    
    
            res.send('Login realizado')
    
    },

    login: (req, res) => {},

    store: (req, res) => {
        res.send('Cadastro realizado')
    }



}

module.exports = usuariosController; // exporta o arquivo viagens controle

