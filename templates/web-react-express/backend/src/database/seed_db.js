const { initializeDatabase, closeDb } = require('./init_db');

async function seedDatabase() {
  // Compatibility/CLI entrypoint: initialization already applies validated seed.sql.
  await initializeDatabase();
}

if (require.main === module) {
  seedDatabase()
    .catch((error) => {
      console.error('Database seed failed:', error);
      process.exitCode = 1;
    })
    .finally(() => closeDb());
}

module.exports = seedDatabase;
module.exports.seedDatabase = seedDatabase;
module.exports.seed = seedDatabase;
