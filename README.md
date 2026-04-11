# App Biblioteca Municipal (Mobile) 📚📱

Aplicativo móvel desenvolvido com **React Native** e **Expo**, voltado para a consulta do acervo e visualização de avisos de uma biblioteca municipal. 

<div align="center">
<img src="https://github.com/user-attachments/assets/af6886cf-568a-4199-9c8e-3b902b209007" width="300" height="auto" alt="Screenshot do App">
</div>

Este projeto faz parte do **Case da Faculdade** e foi construído com a premissa de um *Back-end API-less*, onde todo o banco de dados e as rotas da API são servidos através de Webhooks automatizados utilizando o **n8n** e o **Google Sheets**.

## 🏗️ Estrutura do App

O aplicativo consome dados reais através de requisições HTTP (`fetch`) feitas aos Webhooks do n8n. As principais telas são:

- **Home (`/home`):** Exibe a lista de livros em destaque disponíveis no acervo (título, autor, capa).
- **Detalhes do Livro (`/detalhes`):** Ao clicar em um livro, exibe informações aprofundadas como sinopse, ISBN e quantidade disponível.
- **Mural de Avisos (`/avisos`):** Feed de comunicados institucionais da biblioteca (eventos, feriados, multas), também vindo dinamicamente do banco de dados.

## 🚀 Tecnologias Utilizadas

- **Front-end:** React Native, Expo, Expo Router
- **Navegação:** Stack Navigation / File-based routing
- **Back-end/API:** [n8n](https://n8n.io/) Webhooks (Hospedado na Hostinger)
- **Banco de Dados:** Google Sheets
- **Design:** CSS-in-JS (StyleSheet)

