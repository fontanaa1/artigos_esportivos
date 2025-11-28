// src/controllers/produtoController.js
const supabase = require('../config/supabase');
const NOME_TABELA = 'produtos_esportivos';

// 1. READ (GET All) - Listar todos os produtos
exports.listarProdutos = async (req, res) => {
    try {
        const { data: produtos, error } = await supabase
            .from(NOME_TABELA)
            .select('*'); // Seleciona todas as colunas

        if (error) throw error;
        
        res.status(200).json(produtos);
    } catch (error) {
        console.error("Erro ao listar produtos:", error.message);
        res.status(500).json({ erro: 'Erro interno do servidor ao listar produtos.' });
    }
};

// 2. READ (GET by ID) - Buscar um produto por ID
exports.buscarProdutoPorId = async (req, res) => {
    const { id } = req.params;
    try {
        const { data: produto, error } = await supabase
            .from(NOME_TABELA)
            .select('*')
            .eq('id', id) // Filtra pelo ID
            .single(); // Espera um único resultado

        if (error && error.code !== 'PGRST116') throw error; // PGRST116 é "No rows found"

        if (!produto) {
            return res.status(404).json({ erro: 'Produto não encontrado.' });
        }
        
        res.status(200).json(produto);
    } catch (error) {
        console.error(`Erro ao buscar produto ${id}:`, error.message);
        res.status(500).json({ erro: 'Erro interno do servidor ao buscar produto.' });
    }
};

// 3. CREATE (POST) - Criar um novo produto
exports.criarProduto = async (req, res) => {
    const novoProduto = req.body;
    try {
        const { data, error } = await supabase
            .from(NOME_TABELA)
            .insert([novoProduto])
            .select(); // Retorna o item inserido
            
        if (error) throw error;

        res.status(201).json(data[0]); // Retorna o produto criado
    } catch (error) {
        console.error("Erro ao criar produto:", error.message);
        res.status(500).json({ erro: 'Erro interno do servidor ao criar produto.' });
    }
};

// 4. UPDATE (PUT/PATCH) - Atualizar um produto por ID
exports.atualizarProduto = async (req, res) => {
    const { id } = req.params;
    const atualizacoes = req.body;
    try {
        const { data, error } = await supabase
            .from(NOME_TABELA)
            .update(atualizacoes)
            .eq('id', id)
            .select();
            
        if (error) throw error;

        if (data.length === 0) {
            return res.status(404).json({ erro: 'Produto não encontrado para atualização.' });
        }

        res.status(200).json(data[0]); // Retorna o produto atualizado
    } catch (error) {
        console.error(`Erro ao atualizar produto ${id}:`, error.message);
        res.status(500).json({ erro: 'Erro interno do servidor ao atualizar produto.' });
    }
};

// 5. DELETE (DELETE) - Deletar um produto por ID
exports.deletarProduto = async (req, res) => {
    const { id } = req.params;
    try {
        // Primeiro, verifica se o produto existe para retornar um 404 claro
        const { data: produtoExistente } = await supabase
            .from(NOME_TABELA)
            .select('id')
            .eq('id', id);

        if (!produtoExistente || produtoExistente.length === 0) {
            return res.status(404).json({ erro: 'Produto não encontrado para deleção.' });
        }
        
        // Se existe, procede com a deleção
        const { error } = await supabase
            .from(NOME_TABELA)
            .delete()
            .eq('id', id);

        if (error) throw error;

        res.status(204).send(); // Resposta 204 No Content para sucesso na deleção
    } catch (error) {
        console.error(`Erro ao deletar produto ${id}:`, error.message);
        res.status(500).json({ erro: 'Erro interno do servidor ao deletar produto.' });
    }
};