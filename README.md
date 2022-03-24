# Rosemary_API

Projeto final de módulo (IV) do curso de Web Dev Full Stack da [Resilia Educação](https://www.resilia.com.br/).

Projeto realizado utilizando o [Node.js](https://nodejs.org/en/) com framework [Express](https://expressjs.com/).

#

## Objetivo

Esse projeto tem como objetivo criar uma API REST para uma entidade (agenda) de um estúdio de tatuagem, onde deve ser possível aplicar as operações de CRUD.

#

## Pré-Requisitos

- Node.js v.16.14.0
- NPM v.8.3.1

#

## Pacotes utilizados

Dependências de produção:

- [Cors](https://www.npmjs.com/package/cors) v.2.8.5
- [Express](https://www.npmjs.com/package/express) v.4.17.3
- [SQLite](https://www.npmjs.com/package/sqlite3) v.5.0.0

Dependências de desenvolvimento:

- [Nodemon](https://www.npmjs.com/package/nodemon) v.2.0.15
- [Jest](https://jestjs.io/docs/getting-started) v.27.5.1
- [Supertest](https://www.npmjs.com/package/supertest) v.6.2.2

#

## Instalação da Aplicação

Abra o terminal/Powershell e rode os comandos abaixo:

Clonando o repositório:

```
git clone https://github.com/LeoAChaves/Rosemary_API.git
```

Entrando na pasta:

```
cd Rosemary_API
```

Instalando os pacotes necessários:

```
npm install express
```

```
npm install sqlite3
```

```
npm install cors
```

Criando e populando banco de dados:

```
npm run database
```

Iniciando o servidor:

```
npm start
```

#

## Rotas implementadas

- **GET /agenda**

Schema da resposta

```
{
	"agenda": [
        {
			"ID": <number>,
			"Cliente_ID": <number>,
			"Funcionario_ID": <number>,
			"Data": "YYYY-MM-DD",
			"Hora": "HH:MM:SS",
			"Servico": <string>,
			"Duracao": <number>
		}
	],
	"error": <boolean>
}
```

- **GET /agenda/cliente/{Cliente_ID}**

Schema da resposta

```
{
	"agenda": [
		{
			"ID": <number>,
			"Cliente_ID": {Cliente_ID},
			"Funcionario_ID": <number>,
			"Data": "YYYY-MM-DD",
			"Hora": "HH:MM:SS",
			"Servico": <string>,
			"Duracao": <number>
		}
	],
	"error": <boolean>
}
```

- **GET /agenda/funcionario/{Funcionario_ID}**

Schema da resposta

```
{
	"agenda": [
		{
			"ID": <number>,
			"Cliente_ID": <number>,
			"Funcionario_ID": {Funcionario_ID},
			"Data": "YYYY-MM-DD",
			"Hora": "HH:MM:SS",
			"Servico": <string>,
			"Duracao": <number>
		}
	],
	"error": <boolean>
}
```

- **GET /agenda/data/{Data}**

Schema da resposta

```
{
	"agenda": [
		{
			"ID": <number>,
			"Cliente_ID": <number>,
			"Funcionario_ID": <number>,
			"Data": {Data},
			"Hora": "HH:MM:SS",
			"Servico": <string>,
			"Duracao": <number>
		}
	],
	"error": <boolean>
}
```

- **POST /agenda**

Schema da requisição

```
{
  "Cliente_ID": <number>,
  "Funcionario_ID": <number>,
  "Data": "YYYY-MM-DD",
  "Hora": "HH:MM:SS",
  "Servico": <string>,
  "Duracao": <number>
}
```

Schema da resposta

```
{
	"message": "Novo agendamento criado com sucesso. Data:{Data}, Hora:{Hora}",
  "agenda": {
			"Cliente_ID": <number>,
			"Funcionario_ID": <number>,
			"Data": "YYYY-MM-DD",
			"Hora": "HH:MM:SS",
			"Servico": <string>,
			"Duracao": <number>
		},
	"error": <boolean>
}
```

- **PUT /agenda/id/{ID}**

Schema da requisição

```
{
  "Cliente_ID": <number>,
  "Funcionario_ID": <number>,
  "Data": "YYYY-MM-DD",
  "Hora": "HH:MM:SS",
  "Servico": <string>,
  "Duracao": <number>
}
```

Schema da resposta

```
{
  "message": "Agendamento de ID {ID} atualizado com sucesso",
  "agendamento": {
    "Cliente_ID": <number>,
    "Funcionario_ID": <number>,
    "Data": "YYYY-MM-DD",
    "Hora": "HH:MM:SS",
    "Servico": <string>,
    "Duracao": <number>
  },
  "error": <boolean>
}
```

- **DELETE /agenda/id/{ID}**

Schema da resposta

```
{
    "agenda": "Agendamento de ID {ID} deletado com sucesso",
    "error": <boolean>
}
```
