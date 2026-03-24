# App Biblioteca Municipal (Mobile) 📚📱

Aplicativo móvel desenvolvido com **React Native** e **Expo**, voltado para a consulta do acervo e visualização de avisos de uma biblioteca municipal. 

Este projeto faz parte do **Case da Faculdade** e foi construído com a premissa de um *Back-end API-less*, onde todo o banco de dados e as rotas da API são servidos através de Webhooks automatizados utilizando o **n8n** e o **Google Sheets**.

## 🚀 Tecnologias Utilizadas

- **Front-end:** React Native, Expo, Expo Router
- **Navegação:** Stack Navigation / File-based routing
- **Back-end/API:** [n8n](https://n8n.io/) Webhooks (Hospedado na Hostinger)
- **Banco de Dados:** Google Sheets
- **Design:** CSS-in-JS (StyleSheet)

## 🏗️ Estrutura do App

O aplicativo consome dados reais através de requisições HTTP (`fetch`) feitas aos Webhooks do n8n. As principais telas são:

- **Home (`/home`):** Exibe a lista de livros em destaque disponíveis no acervo (título, autor, capa).
- **Detalhes do Livro (`/detalhes`):** Ao clicar em um livro, exibe informações aprofundadas como sinopse, ISBN e quantidade disponível.
- **Mural de Avisos (`/avisos`):** Feed de comunicados institucionais da biblioteca (eventos, feriados, multas), também vindo dinamicamente do banco de dados.

## 🔒 Segurança
Nenhuma chave de API direta ou senha de banco de dados fica exposta no Front-End, visto que as regras de acesso à planilha do banco são tratadas nativamente pela integração segura (Credentials) do n8n no servidor.
