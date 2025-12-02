// src/index.js
require('dotenv').config();
const express = require('express');
const produtoRoutes = require('./routes/produtoRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsing de JSON no corpo das requisições
app.use(express.json());

// Rota de teste
app.get('/', (req, res) => {
    res.send('API de Artigos Esportivos rodando com Express e Supabase!');
});

// Use as rotas de produtos
// O prefixo /api/produtos será a base para todas as rotas definidas em produtoRoutes
app.use('/api/produtos', produtoRoutes);

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
