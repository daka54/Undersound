const jwt = require('jsonwebtoken');
config = require('../config');
const error = require('../middleware/errors')

const secret = config.jwt.secret;

function assignToken(data){
    return jwt.sign(data, secret);
}

function verifyToken(token){
    return jwt.verify(token, secret);
}

const checkTocken = {
    confirmToken: function(req, id){
        const decod = decodHeader(req);

        //Aca puedo organizar permisos y privilegios
        if(decod.id !== id){
            throw error("NO puedes hacer esto te falta lv", 401)
        }
    }
}

function getToken(authorization){
    if(!authorization){
        throw error('y el  token papa', 401);
    }

    if(authorization.indexOf('Bearer') === -1){
        throw error('Formato invalido', 401);
    }

    let token = authorization.replace('Bearer ', '');
    return token;
}

function decodHeader(req){
    const authorization = req.headers.authorization || '';
    const token = getToken(authorization);
    const decodedToken = verifyToken(token);

    req.userAuth = decodedToken;

    return decodedToken;
}

module.exports = {
    assignToken,
    checkTocken
}