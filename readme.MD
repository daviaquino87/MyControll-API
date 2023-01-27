# MyControll

Api de controle financeiro

## Stack utilizada

**Back-end:** Node, Express, Tsyringe, Typeorm, Typescript

## Funcionalidades

- Criação de Usuario
- Autenticação de Usuario
- Criação de transação
- Criação de categoria
- Listagem de balanço financeiro

## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`JWT_PASS=`

`PORT=`

`DB_DATABASE=`

`DB_USERNAME=`

`DB_PASSWORD=`

`DB_HOST=`

## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/daviaquino87/MyControll-API.git
```

Entre no diretório do projeto

```bash
  cd my-projectMyControll-API
```

Instale as dependências

```bash
  npm install
```

Inicie os containers docker

```bash
  docker-compose up
```

## Rodando os testes

Para rodar os testes, rode o seguinte comando

```bash
  npm run test
```

## Documentação da API

#### Criando um usuario

```http
  POST /users
```

| Parâmetro    | Tipo     | Descrição                                         |
| :----------- | :------- | :------------------------------------------------ |
| `name`       | `string` | **Obrigatório**. Nome do usuario                  |
| `email`      | `string` | **Obrigatório**. Email do usuario (UN)            |
| `cpf`        | `string` | **Obrigatório**. CPF do usuario (UN)              |
| `birth_date` | `string` | **Obrigatório**. Data de aniversario (YYYY-MM-DD) |
| `password`   | `string` | **Obrigatório**. Senha do usuario                 |

#### Autenticando um usuario

```http
  POST /login
```

| Parâmetro  | Tipo     | Descrição                         |
| :--------- | :------- | :-------------------------------- |
| `email`    | `string` | **Obrigatório**. Email do usuario |
| `password` | `string` | **Obrigatório**. Senha do usuario |

## Rotas protegidas

#### Criando nova transação

```http
  POST /transactions
```

| Parâmetro       | Tipo     | Descrição                                                              |
| :-------------- | :------- | :--------------------------------------------------------------------- |
| `value`         | `number` | **Obrigatório**. Valor da transação                                    |
| `type`          | `string` | **Obrigatório**. Tipo da transação (buy = compra - deposit = deposito) |
| `transact_date` | `string` | **Obrigatório**. Data da transação (YYYY-MM-DD)                        |
| `categoryID`    | `string` | **Obrigatório**. Categoria da transação caso possua                    |

#### Listando transações

```http
  GET /transactions
```

| Parâmetro | Tipo | Descrição                                             |
| :-------- | :--- | :---------------------------------------------------- |
| `no-body` | `-`  | ----------------------------------------------------- |

#### Listando Balanço financeiro

```http
  GET /transactions/balance
```

| Parâmetro | Tipo | Descrição                                             |
| :-------- | :--- | :---------------------------------------------------- |
| `no-body` | `-`  | ----------------------------------------------------- |

#### Criando nova categoria

```http
  POST /categories
```

| Parâmetro | Tipo     | Descrição                          |
| :-------- | :------- | :--------------------------------- |
| `name`    | `string` | **Obrigatório**. Nome da categoria |

#### Listando categorias

```http
  GET /categories
```

| Parâmetro | Tipo | Descrição                                             |
| :-------- | :--- | :---------------------------------------------------- |
| `no-body` | `-`  | ----------------------------------------------------- |
