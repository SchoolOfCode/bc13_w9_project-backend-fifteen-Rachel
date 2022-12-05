// This file imports the pg module which allows node.js to connect with the postgreSQL database
import pg from "pg";

// This is where node.js is connected to the postgreSQL with the url link kept in .env file
export const pool = new pg.Pool({
    connectionString: process.env.POSTGRES_CONNECTION_URL,
});

// This function allows queries that are params to be passed to the postgreSQL without the risk of string concatenation
export function query(text, params) {
    return pool.query(text, params);
}