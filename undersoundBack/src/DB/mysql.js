const mysql = require('mysql');
const config = require('../config');
const { error } = require('../red/responses');

const dbconfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database
}

let connection;

function connectionMysql(){
    connection = mysql.createConnection(dbconfig);

    connection.connect((err) => {
        if(err){
            console.log('[db err]', err);
            setTimeout(connectionMysql, 200);
        }else{
            console.log('DB conectada');
        }
    });
    connection.on('error', err => {
        console.log('[db err]', err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            connectionMysql();
        }else{
            throw err;
        }
    });
}

connectionMysql();

function getAll(table){
    return new Promise( (resolve, reject) => {
        connection.query(`SELECT * FROM ${table}`, (error, result) =>{
            return error? reject(error) : resolve(result);
        })
    });
}

function getById(table, id){
    return new Promise( (resolve, reject) => {
        connection.query(`SELECT * FROM ${table} WHERE id=${id}`, (error, result) =>{
            return error? reject(error) : resolve(result);
        })
    });
}

function add(table, data){
    return new Promise( (resolve, reject) => {
        connection.query(`INSERT INTO ${table} SET ? ON DUPLICATE KEY UPDATE ?`, [data, data] ,(error, result) =>{
            return error? reject(error) : resolve(result);
        })
    });
}

function deleteUser(table, data){
    return new Promise( (resolve, reject) => {
        connection.query(`DELETE FROM ${table} WHERE id = ?`, data.id ,(error, result) =>{
            return error? reject(error) : resolve(result);
        })
    });
}

function query(table, consult){
    return new Promise( (resolve, reject) => {
        connection.query(`SELECT * FROM ${table} WHERE ?`, consult ,(error, result) =>{
            return error? reject(error) : resolve(result[0]);
        })
    });
}

module.exports = {
    getById,
    getAll,
    add,
    deleteUser,
    query
}