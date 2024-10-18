const auth = require("../../authentication")

module.exports = function checkAuth(){

    function middleware(req, res, next){
        //solo usuarios con un id especifico pueen realizar una tarea (a;adir id en confirm token)
        const id = req.body.id

        auth.checkTocken.confirmToken(req, id)
        next();
    }

    return middleware
}