const TABLE = 'auth';
const auth = require('../../authentication')
const bcrypt = require('bcrypt');
module.exports = function (dbInyected) {
    
    let db = dbInyected;

    async function login(user, password) {
        const data = await db.query(TABLE, { user: user });
    
        // Esperar a que bcrypt.compare termine usando await
        const result = await bcrypt.compare(password, data.password);
        if (result === true) {
            // Generar token
            const token = auth.assignToken({ ...data });
    
            // Guardar el token en la base de datos
            await db.add(TABLE, { id: data.id, session_token: token });
            return token; // Retornar el token
        } else {
            throw new Error('Papi mete bien la info pls');
        }
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