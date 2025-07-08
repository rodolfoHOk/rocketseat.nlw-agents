# NLW Agents

> Projeto desenvolvido durante o evento **NLW Agents** da **Rocketseat**

## Tecnologias 🚀

### Servidor API

- TypeScript
- Node.js
- Fastify
- Drizzle ORM
- Zod
- Biome
- PostgreSQL
- Docker

### Frontend WEB

- TypeScript
- React (19.1)
- Vite
- Tailwind CSS
- Shadcn/ui
- Radix UI
- React Router Dom
- TanStack React Query
- Lucide React
- Biome

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

- Node.js 22

### Etapas / Comandos

- git clone <url-do-repositorio>
- cd web
- npm install
- npm run dev

## Acesso do Frontend Web 🌐

O App estará disponível em `http://localhost:5173`

#### Continua

- aula 01 -25:05
