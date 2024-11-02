const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Define a pasta onde seus arquivos estáticos estão localizados
app.use(express.static(path.join(__dirname, 'public')));

// Rota raiz, redireciona para o arquivo index.html na pasta public
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
