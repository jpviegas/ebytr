# ebytr

## Tecnologias utilizadas: :+1:

## Front-End
### React

## Back-End
### Node
### Express

## Database
### MySQL

> ## Criando banco de dados:
Rode o script `app/backend/db.sql`:

*CREATE DATABASE IF NOT EXISTS ebytr;*

*USE ebytr;*

*CREATE TABLE tasks
(
	id INT NOT NULL AUTO_INCREMENT,
	task VARCHAR(30) NOT NULL,
	status VARCHAR(15) NOT NULL,
	date VARCHAR(20) NOT NULL,
	PRIMARY KEY(id)
);*

Rode os respectivos comandos:

entre na pasta `app/backend` e rode `npm run dev` (no prompt de comando)

entre na pasta `app/frontend` e rode `npm run dev` (no prompt de comando)

> ## Rodando o App:
Configure no seguinte padrão:
crie o arquivo `.env`

PORT= {a rota em que irá rodar o frontend}

DB_HOST= localhost

DB_USER= {usuário do banco de dados (mysql workbench)}

DB_PASS= {senha do banco de dados}

DB_NAME= ebytr
