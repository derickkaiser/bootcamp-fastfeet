# Configuração do Servidor do projeto FastFeet

Serviço que disponibiliza várias rotas para recuperar dados do banco e enviar e-mail da aplicação FastFeet.

## Pré-requisitos

* Yarn;
* Node;
* Docker;
* Editor (recomendado VSCode);

## 1. Configurar o arquivo .env

O que de fato é mais importante alterar para que a aplicação funcione são as variáveis de banco (DB_HOST, DB_USER, DB_PASS, DB_NAME).

## 2. Utilizar o docker para criar a instância/processo do postgres na máquina

É um pré-requisito que tenha o Docker instalado. Para criar e iniciar uma instância do postgres no Docker deve ser executado o seguinte comando:

`docker run --name <nome_da_instancia> -e POSTGRES_PASSWORD=<senha> -p 5432:5432 -d postgres:11`

A instância será inicializada automaticamente, mas se não estiver inicializada, executar o comando `docker start <nome_da_instancia>`.

## 3. Utilizar o docker para criar a instância do redis na máquina

Aproveitando a configuração da instância do banco, é necessário configurar o Redis para que os e-mails sejam enviados independente do servidor. Para isso, executar o seguinte comando:

`docker run --name <nome_da_instancia> -p 6379:6379 -d -t redis:alpine`

## 4. Rodar as migrations para preparar o banco

Após configurar as variáveis para que o servidor consiga se conectar com o banco, é necessário que o banco fique com as tabelas e com pelo menos um administrador cadastrado.

Para executar a migration, deve ser executado este comando na pasta `server`:

`yarn sequelize db:migrate`

## 5. Baixar as dependências do projeto

Para isso, deve-se executar o seguinte comando também na pasta `server`:

`yarn install`

## 6. Subir o servidor da aplicação e do Redis

Para que seja possível usufruir de todos os serviços da aplicação é necessário subir os dois serviços em terminais diferentes. Executar os seguintes comandos:

`yarn dev`

`yarn queue`

