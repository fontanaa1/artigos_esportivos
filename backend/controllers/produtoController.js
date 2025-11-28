const { supabase } = require('../supabaseClient');

// Função para buscar todos os produtos
async function getAllProdutos(req, res) {
  try {
    const { data, error } = await supabase.from('produtos').select('*');
    if (error) throw error;
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
}

// Função para criar novo produto
async function createProduto(req, res) {
  const { nome, preco, foto } = req.body;
  if (!nome || !preco || !foto) {
    return res.status(400).json({ erro: 'Todos os campos são obrigatórios!' });
  }

  try {
    const { data, error } = await supabase.from('produtos').insert([{ nome, preco, foto }]).select();
    if (error) throw error;
    res.status(201).json(data);
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
}

// Função para deletar um produto
async function deleteProduto(req, res) {
  try {
    const { error } = await supabase.from('produtos').delete().eq('id', req.params.id);
    if (error) throw error;
    res.status(200).json({ mensagem: 'Produto deletado' });
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
}

module.exports = {
  getAllProdutos,
  createProduto,
  deleteProduto
};
