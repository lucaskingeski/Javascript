module.exports = {
    produtos: (req, res) => {
        res.sendFile('produtos.html', { root: './views' });
    },

    camisetas: (req, res) => {
        res.sendFile('camisetas.html', { root: './views' });
    },
    cadastrar: (req, res) => {
        res.sendFile('cadastrar.html', { root: './views' });
    },
    cadastrado: (req, res) => {
        const { ID, descricao, quantidade, preco } = req.body;
        const produtosModel = require('../models/produtosModel');
        const mensagem = produtosModel.gerearMsgPersonalizada(ID, descricao, quantidade, preco);
        res.send(mensagem);
    }
};