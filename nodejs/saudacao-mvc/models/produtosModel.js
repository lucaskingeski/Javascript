module.exports = {
    gerearMsgPersonalizada: (ID, descricao, quantidade, preco) => {
        return `<h1>Produto cadastrado com sucesso!</h1> 
        <br>ID: ${ID}
        <br>Descrição: ${descricao} 
        <br>Quantidade: ${quantidade}
        <br>Preço: R$${preco}`;
    }
};