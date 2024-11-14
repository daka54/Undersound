
const TABLE = 'usersauth';
const TABLE_fk = 'users_has_roles';
const auth = require('../auth');
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
    
    async function add (body) {
        const userAuth = {
            id: body.id,
            name: body.name,
            email: body.email,
            phone: body.phone,
            city: body.city,
            image: body.image,
            active: 1,            
        }

        const response = await db.add(TABLE, userAuth);

        var insertId = 0;
        if(body.id == 0){
            insertId = response.insertId;
            const addRol = await db.add(TABLE_fk, {
                id_user: insertId,
                id_rol: 2
            });
        }else{
            insertId = body.id;
        }

        var response2 = '';
        if(body.email || body.password){
            response2 = await auth.add({
                id: insertId,
                user: body.email,
                password: body.password
            });
        }
        return response2;
    }
    
    function deleteUser (body) {
        return db.deleteUser(TABLE, body);
    }
    
    return {
        getAll,
        getById,
        deleteUser,
        add
    }

}