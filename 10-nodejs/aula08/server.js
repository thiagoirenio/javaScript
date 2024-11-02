const express = require('express');
const app = express();

/* http:facebook.com/profiles/12345?campanha=googleads
 * /profiles/12345?campanha=googleads
 * /profiles/12345?campanha=googleads&nome_campanha=seila  
 */

app.use(
  express.urlencoded(
    {
      extendend: true
    }
  )
)

app.get('/', (req, res) => {
  res.send(`
  <form action="/" method="POST">
  Nome: <input type="text" name="nome">
  <button>Envir</button>
  </form>
  `);
});

app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
  /* Profiles/3
   * Profiles/?chave1=valor1&chave2=valor2&chave3=valor3
   *
   */
  console.log(req.params);
  console.log(req.query);
  res.send(req.params);
});

app.post('/', (req, res) => {
  res.send(`O que você me enviou foi: ${req.body.nome}`);
});

app.get('/contato', (req, res) => {
  res.send('Obrigado por entrar em contato com a gente.');
});


app.listen(3000, () => {
  console.log('Acessar http://localhost:3000');
  console.log('Servidor executando na porta 3000');;
});
