const mysql = require('mysql');
const express = require('express');

const connection = mysql.createConnection({
  // mysql-container IP
  host: '172.17.0.2',
  user: 'root',
  password: 'root',
  database: 'dockerintrodutiondb'
});

connection.connect();

const app = express();

// Cria um REST de categorias
app.get('/categorias', (request, response) => {
  // Retorna as categorias
  connection.query('SELECT * FROM categoria', (error, results) => {
    
    console.log('Tentativa de conexão ao MySQL.');

    if (error) {
      throw error;
    }

    // Para cada registro de categoria retornado, mapeia para um objeto e envia no response
    response.send(results.map(categoria => ({
      codigo: categoria.codigo,
      nome: categoria.nome
    })));
  });
});

const port = '9001';

app.listen(port, '0.0.0.0', () => {
  console.log(`Listening on port ${port}`);
});
