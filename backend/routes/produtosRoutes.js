const express = require('express');
const router = express.Router();
const supabase = require('../supabaseClient');

// GET todos os produtos
router.get('/produtos', async (req, res) => {
    const { data, error } = await supabase
        .from('produtos_esportivos')
        .select('*');

    if (error) return res.status(400).json({ erro: error.message });
    res.json(data);
});

// GET produto por id
router.get('/produtos/:id', async (req, res) => {
    const { data, error } = await supabase
        .from('produtos_esportivos')
        .select('*')
        .eq('id', req.params.id)
        .single();

    if (error) return res.status(400).json({ erro: error.message });
    res.json(data);
});

// POST criar produto
router.post('/produtos', async (req, res) => {
    const { nome, preco, foto } = req.body;

    if (!nome || !preco || !foto) {
        return res.status(400).json({ erro: "Preencha todos os campos!" });
    }

    const { data, error } = await supabase
        .from('produtos_esportivos')
        .insert([{ nome, preco, foto }])
        .select();

    if (error) return res.status(400).json({ erro: error.message });
    res.json(data);
});

// DELETE produto
router.delete('/produtos/:id', async (req, res) => {
    const { error } = await supabase
        .from('produtos_esportivos')
        .delete()
        .eq('id', req.params.id);

    if (error) return res.status(400).json({ erro: error.message });
    res.json({ mensagem: "Produto deletado!" });
});

module.exports = router;
