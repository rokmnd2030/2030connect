import mariadb from 'mariadb';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const tables = ['users'];
const schema = {
    users: `CREATE TABLE users (
                sid INT AUTO_INCREMENT PRIMARY KEY,
                uuid UUID NOT NULL,
                password VARCHAR(255) CHARACTER SET utf8 NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                deleted_at TIMESTAMP
            ) CHARACTER SET=utf8;`,
}

const pool = mariadb.createPool({
    host: process.env.MARIADB_HOST,
    user: process.env.MARIADB_USER,
    password: process.env.MARIADB_PASSWORD,
    database: process.env.MARIADB_DATABASE,
    connectionLimit: 5,
});

const init_mariadb = async () => {
    try {
        const connection = await pool.getConnection();
        console.log('Connected to MariaDB');
        connection.release();
    } catch (err) {
        console.log('MariaDB connection error: ', err);
    }
}

const check_table = async () => {
    let connection, result;
    try {
        connection = await pool.getConnection();
        for (const table of tables) {
            result = await connection.query(`SELECT COUNT(*) AS count FROM information_schema.tables WHERE table_schema = '${process.env.MARIADB_DATABASE}' AND table_name = '${table}'`);
            if (Number(result[0].count) === 0) {
                await connection.query(schema[table]);
            }
        }
    } catch (err) {
        console.error(err);
    } finally {
        if (connection) connection.release();
    }
}

export { pool, init_mariadb, check_table }