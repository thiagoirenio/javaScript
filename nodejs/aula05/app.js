
const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const escreve = require('./modules/escreverTres');
const ler = require('./modules/ler');

const pessoas = [
  { nome: 'Jonatas' },
  { nome: 'Felipe' },
  { nome: 'Arthur' },
  { nome: 'Thiago' },
];
const json = JSON.stringify(pessoas, '', 2);
escreve(caminhoArquivo, json);

async function leArquivo(caminho) {
  const dados = await ler(caminho);
  renderizaDados(dados);
}

// const dadosArquivo = leArquivo(caminhoArquivo);
// console.log(dadosArquivo);

function renderizaDados(dados) {
  // console.log(dados);
  dados = JSON.parse(dados);
  dados.forEach(val => console.log(val))
}
leArquivo(caminhoArquivo);
