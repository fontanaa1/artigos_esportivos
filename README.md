# ⚽ API RESTful: Artigos Esportivos (Node.js + Express + Supabase)

📽️https://www.canva.com/design/DAG6Aq3ukqM/KyWlAoQaGaTdNN2AWU4UNA/edit?utm_content=DAG6Aq3ukqM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton

Este projeto consiste no desenvolvimento de uma API RESTful completa para gerenciar um catálogo de artigos esportivos, implementando todas as operações CRUD (Create, Read, Update, Delete).

## ✨ Funcionalidades

* **Listar Produtos (GET /api/produtos):** Retorna todos os artigos esportivos cadastrados.
* **Buscar Produto por ID (GET /api/produtos/:id):** Retorna os detalhes de um artigo específico.
* **Criar Produto (POST /api/produtos):** Adiciona um novo artigo ao catálogo.
* **Atualizar Produto (PUT /api/produtos/:id):** Modifica os dados de um artigo existente.
* **Deletar Produto (DELETE /api/produtos/:id):** Remove um artigo do catálogo.

---

## 🚀 Tecnologias Utilizadas

| Tecnologia | Descrição |
| :--- | :--- |
| **Node.js** | Ambiente de execução JavaScript. |
| **Express** | Framework web rápido e minimalista para Node.js. |
| **Supabase** | Backend as a Service (BaaS) utilizado como banco de dados PostgreSQL. |
| **`@supabase/supabase-js`** | Cliente JS para comunicação com o banco de dados Supabase. |
| **`dotenv`** | Módulo para gerenciar variáveis de ambiente (.env). |
| **`nodemon`** (Opcional) | Ferramenta para reinicialização automática do servidor durante o desenvolvimento. |

---

## 📁 Estrutura do Projeto

O projeto segue uma estrutura organizada em camadas:
api-artigos-esportivos/
├── node_modules/
├── src/
│   ├── config/
│   │   └── supabase.js     # Configuração e conexão com o Supabase
│   ├── controllers/
│   │   └── produtoController.js  # Lógica de negócio e CRUD
│   ├── routes/
│   │   └── produtoRoutes.js      # Mapeamento das rotas da API
│   └── index.js                # Arquivo principal (Configuração do Express)
├── .env.example              # Exemplo do arquivo de variáveis de ambiente
├── package.json
└── README.md

## Instalar Dependências
npm install

## Configurar Variáveis de Ambiente
Crie um arquivo chamado .env na raiz do projeto (na mesma pasta do package.json) e preencha com suas credenciais do Supabase:
# .env

# As chaves são carregadas pelo dotenv no servidor
SUPABASE_URL=[https://uywxubfbcmnzqshsvjde.supabase.co](https://uywxubfbcmnzqshsvjde.supabase.co)
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5d3h1YmZiY21uenFzaHN2amRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM0NjQ2NTYsImV4cCI6MjA3OTA0MDY1Nn0.htBdr5vT-Kaf11Isu7X7idk5p8i08HeyHehH6Pp4SQ

# Porta que o servidor irá escutar (padrão: 3000)
PORT=3000

## Inicializar o Banco de Dados (Supabase)
A API espera encontrar a tabela produtos_esportivos no seu projeto Supabase.

IMPORTANTE: Certifique-se de que o Row Level Security (RLS) está desativado ou que você criou uma Política de Leitura (SELECT) para permitir acesso anônimo (anon).

## Executando o Projeto
npm start
O servidor estará rodando em: http://localhost:3000

A API espera encontrar a tabela produtos_esportivos no seu projeto Supabase.

IMPORTANTE: Certifique-se de que o Row Level Security (RLS) está desativado ou que você criou uma Política de Leitura (SELECT) para permitir acesso anônimo (anon).
