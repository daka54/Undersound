const TABLE = 'auth';
const auth = require('../../authentication')
const bcrypt = require('bcrypt');
module.exports = function (dbInyected) {
    
    let db = dbInyected;

    async function login(user, password){
        const data = await db.query(TABLE, {user: user});

        return bcrypt.compare(password, data.password).
            then(result =>{
                if(result === true){
                    //Generar token
                    return auth.assignToken({ ...data})
                }else{
                    throw new Error('Papi mete bien la info pls');
                }
            })
    }

    async function add (data) {
        const authData = {
            id: data.id,
        }

        if(data.user){
            authData.user = data.user
        }

        if(data.password){
            authData.password = await bcrypt.hash(data.password.toString(), 5);
        }

        return db.add(TABLE, authData);
    }
    
    
    return {
        add,
        login
    }

}