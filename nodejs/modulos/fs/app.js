const fs = require('fs');
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao ler arquivo:', err);
        return;
    }
    console.log('Conteúdo do arquivo:', data);
});

console.log('Essa mensagem aparece primeiro.');