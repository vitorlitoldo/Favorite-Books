```markdown
# Projeto de Biblioteca - Frontend e API Local

Este projeto consiste em um sistema simples de cadastro de livros. Ele inclui um frontend React que interage com uma API local para adicionar, editar e visualizar livros.

## Tecnologias Utilizadas

### Frontend:
- **React**: Biblioteca JavaScript para construção da interface de usuário.
- **Axios**: Para fazer as requisições HTTP à API local.

### API Local:
- **Express**: Framework Node.js para construir a API.
- **JSON Server**: Utilizado para simular uma API RESTful com dados armazenados em um arquivo JSON.

## Estrutura do Projeto

- **Frontend**: O frontend está desenvolvido em React, permitindo adicionar, editar e visualizar livros.
- **API Local**: A API foi construída utilizando **Express** e **JSON Server**, que simula o banco de dados em um arquivo `db.json`.

## Funcionalidades

- **Adicionar livro**: Permite adicionar novos livros, incluindo título, autor e descrição.
- **Editar livro**: Permite editar informações de livros já cadastrados.
- **Visualizar livros**: Exibe a lista de livros cadastrados.
- **API Local**: API RESTful que simula operações CRUD (Create, Read, Update, Delete) para livros.

## Como Iniciar o Projeto

Para rodar o projeto localmente, você precisará executar tanto o servidor da API quanto o frontend React. Siga os passos abaixo:

### 1. Configuração do Backend (API Local)

1. Acesse o diretório da API.
2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie a API local:
   ```bash
   npm run api
   ```

   A API estará rodando em `http://localhost:8001/books`. Ela usa o **JSON Server** para armazenar e simular um banco de dados em um arquivo `db.json`.

### 2. Configuração do Frontend

1. Acesse o diretório do frontend.
2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o frontend React:
   ```bash
   npm start
   ```

   O frontend estará disponível em `http://localhost:3000`.

## Como Funciona

1. **Frontend**: 
   - A aplicação usa o React para capturar as entradas de dados do usuário, como título, autor e descrição do livro.
   - Quando o formulário de adicionar um livro é enviado, uma requisição POST é feita para a API local.
   - Quando o usuário edita um livro, uma requisição PUT é feita para atualizar os dados no arquivo JSON da API.

2. **API Local**:
   - **GET /books**: Retorna todos os livros cadastrados.
   - **POST /books**: Adiciona um novo livro.
   - **PUT /books/:id**: Atualiza um livro existente.
   - **DELETE /books/:id**: Remove um livro pelo seu ID.

## Estrutura de Arquivos

- `frontend/` - Contém o código fonte do frontend React.
- `api/` - Contém o código da API (Express + JSON Server).
- `db.json` - Arquivo onde os livros são armazenados (simulando um banco de dados).

## Observações

- A API local (JSON Server) é uma solução para simular um backend em desenvolvimento. Para ambientes de produção, você precisaria de um backend real com um banco de dados.
- Certifique-se de rodar `npm run api` para garantir que a API esteja ativa antes de tentar interagir com o frontend.

## Contribuindo

1. Faça um fork deste repositório.
2. Crie uma branch para sua alteração (`git checkout -b minha-branch`).
3. Faça suas alterações.
4. Envie as mudanças para o repositório (`git push origin minha-branch`).
5. Abra um pull request.

## Licença

Este projeto é de código aberto e pode ser utilizado de acordo com a [Licença MIT](LICENSE).
