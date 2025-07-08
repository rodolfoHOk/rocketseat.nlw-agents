import { reset, seed } from 'drizzle-seed';
import { db, sql } from './conection.ts';
import { schema } from './schemas/index.ts';
import { rooms } from './schemas/rooms.ts';

await reset(db, schema);

await seed(db, schema).refine(f => ({
    rooms: {
        count: 20,
        columns: {
            name: f.companyName(),
            description: f.loremIpsum(),
        },
    }
}));

await sql.end();

console.log('Database seeded!');
