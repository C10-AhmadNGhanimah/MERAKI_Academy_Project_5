const { Pool } = require("pg");

const connectionString = process.env.CONNECTION_STRING;

const pool = new Pool({
  // the line below is equivalent to connectionString: connectionString,
  connectionString,
});

// export the pool to be able to use it to run Queries
module.exports = {
  pool,
};
