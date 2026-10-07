const { initializeDatabase, closeDb, getDbPath } = require('./init_db');

async function prepareE2EDatabase(options = {}) {
  // ARC supplies an isolated ARC_DB_FILE. Use the same bootstrap as production.
  try {
    await initializeDatabase({ dbPath: options.dbPath, reset: true });
    return { dbPath: getDbPath(), seeded: true };
  } finally {
    await closeDb();
  }
}

if (require.main === module) {
  prepareE2EDatabase()
    .then((result) => {
      console.log(`E2E database prepared at: ${result.dbPath}`);
      console.log(`Seed default: ${result.seeded ? 'yes' : 'no'}`);
    })
    .catch((error) => {
      console.error('E2E database preparation failed:', error);
      process.exitCode = 1;
    });
}

module.exports = prepareE2EDatabase;
module.exports.prepareE2EDatabase = prepareE2EDatabase;
