// const { Pool } = require("pg");
// const pool = new Pool({
//   connectionString: process.env.POSTGRES_CONNECTION_URL,
// });

// module.exports = {
//   query: function (text, params) {
//     return pool.query(text, params);
//   },
// };

import pg from "pg";

export const pool = new pg.Pool({
    connectionString: process.env.POSTGRES_CONNECTION_URL,
});

export function query(text, params) {
    return pool.query(text, params);
}