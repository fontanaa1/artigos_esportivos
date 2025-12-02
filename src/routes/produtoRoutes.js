// src/routes/produtoRoutes.js
const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

// Rotas para /api/produtos
// C - Create
router.post('/', produtoController.criarProduto);

// R - Read (All)
router.get('/', produtoController.listarProdutos);

// R - Read (by ID)
router.get('/:id', produtoController.buscarProdutoPorId);

// U - Update
router.put('/:id', produtoController.atualizarProduto);

// D - Delete
router.delete('/:id', produtoController.deletarProduto);

module.exports = router;

