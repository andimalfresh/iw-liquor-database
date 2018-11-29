// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: "postgresql://localhost/iwspirits"
  },
  production: {
    client: "postgresql",
    connection: process.env.DATABASE_URL
  }
};
