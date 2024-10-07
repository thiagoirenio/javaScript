const path = require('path');
const axios = require('axios');
const { Pessoa } = require('./mod2');

axios('https://www.otaviomiranda.com.br/files/json/pessoas/json')
  .then(response => console.log(response.data))
  .catch(e => console.log(e));
