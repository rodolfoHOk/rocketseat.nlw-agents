import { fastify } from 'fastify';
import { fastifyCors } from '@fastify/cors';
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod';
import { env } from './env.ts';

const PORT = env.PORT;

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
  origin: 'http://localhost:5173',
});

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.get('/health', () => 'OK');

app
  .listen({ port: PORT })
  .then(() => console.log(`HTTP server running on port: ${PORT}!`));
