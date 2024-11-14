const auth = require('../../authentication')
const tables= require('../../DB/tables');
const bcrypt = require('bcrypt');
module.exports = function (dbInyected) {
    
    let db = dbInyected;

    async function login(user, password) {
        const data = await db.query(tables.auth, { user: user });
    
        // Esperar a que bcrypt.compare termine usando await
        const result = await bcrypt.compare(password, data.password);
        if (result === true) {
            // Generar token
            const token = auth.assignToken({ ...data });
            const fullUser = await db.queryWithJoin(tables.auth, tables.usersauth,'auth.id = usersauth.id', { user: user });
            const roles = await db.queryWithJoin(tables.users_has_roles,tables.roles,'users_has_roles.id_rol = roles.id' ,{ id_user: data.id });
            const simplifiedRoles = roles.map(role => ({
                id: String(role.id_rol),
                name: role.name,
                image: role.image,
                route: role.route
            }));
            
            const response = {
                id: data.id,
                name: fullUser[0].name,
                email: data.user,
                phone: fullUser[0].phone,
                city: fullUser[0].city,
                image: fullUser[0].image,
                token,
                roles: simplifiedRoles
            }
    
            // Guardar el token en la base de datos
            await db.add(tables.auth, { id: data.id, session_token: token });
            return response; // Retornar el token
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

        return db.add(tables.auth, authData);
    }
    
    
    return {
        add,
        login
    }

}