import { reset, seed } from 'drizzle-seed';
import { db, sql } from './conection.ts';
import { schema } from './schemas/index.ts';

await reset(db, schema);

await seed(db, schema).refine((f) => ({
  rooms: {
    count: 5,
    columns: {
      name: f.companyName(),
      description: f.loremIpsum(),
    },
  },
  questions: {
    count: 20,
    columns: {
      question: f.loremIpsum(),
      answer: f.loremIpsum(),
    },
  },
}));

await sql.end();

console.log('Database seeded!');
