import { getDatabase } from '../src/lib/server/database.js';

async function run() {
  const db = await getDatabase();
  await db.migrate();
}

run()
  .then(() => {
    console.log('Run Migration Successfully');
    process.exit(0);
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
