const { Pool } = require('pg');
const configDb = {
    user: 'postgres',
    host: 'localhost',
    password: '****',
    database: 'library'
};
const pool = new Pool(configDb);
const getBooks = async () => {
    try {
        const librarys = await pool.query('select * from books');
        console.log(librarys.rows);
        pool.end();
    }
    catch (e) {
        console.log(e)
    }
}
const insertUser = async () => {
    try {
        const text = 'INSERT INTO users(username,password) VALUES($1,$2)'
        const values = ['jhon', 'jhon1234']
        const user = await pool.query(text, values)
        console.log(user)
        pool.end()
    }
    catch (e) {
        console.log(e)
    }
}
const deleteUSer = async () => {
    const text = 'DELETE FROM users WHERE username = $1';
    const values = ['jhon'];

    const userDelete = await pool.query(text, values);
    console.log(userDelete)
}

const editUser = async () => {
    const text = 'UPDATE users SET username = $1 WHERE username = $2';
    const values = ['owen', 'joe'];
    const res = await pool.query(text, values);
    console.log(res);
}
editUser()