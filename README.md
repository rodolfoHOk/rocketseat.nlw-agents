# NLW Agents

> Projeto desenvolvido durante o evento **NLW Agents** da **Rocketseat**

## Tecnologias 🚀

### Servidor API

- Node.js
- Fastify
- Drizzle ORM
- Zod
- Biome
- PostgreSQL
- Docker

### Frontend WEB

- Em Breve

## Como rodar o Servidor ⚙️

### Pré-requisitos

- Node.js 22
- Docker

### Etapas / Comandos

- git clone <url-do-repositorio>
- cd server
- docker-compose up -d
- Crie um arquivo `.env` seguindo o exemplo do `.env.example`
- npm install
- npx drizzle-kit migrate
- npm run db:seed (opcional)
- npm run dev **ou** npm run start

## Endpoints do Servidor API 🌐

A API estará disponível em `http://localhost:3333`

- `GET /health` - Health check da aplicação
- `GET /rooms` - Lista as salas disponíveis

## Como rodar o Frontend WEB ⚙️

### Pré-requisitos

- Em breve

### Etapas / Comandos

- Em breve
