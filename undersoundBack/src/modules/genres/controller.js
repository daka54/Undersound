const db = require('../../DB/mysql');

const TABLE = 'genres';
module.exports = function (dbInyected) {
    
    let db = dbInyected;

    if(!db){
        db = require('../../DB/mysql');
    }

    function getAll () {
        return db.getAll(TABLE);
    }
    
    function getById (id) {
        return db.getById(TABLE, id);
    }
    
    function add (body) {
        return db.add(TABLE, body);
    }
    

    
    return {
        getAll,
        getById,
        add
    }

}