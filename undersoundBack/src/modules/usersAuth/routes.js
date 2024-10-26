const express = require('express');

const security = require('./security')
const response = require('../../red/responses');
const controller = require('./index');

const router = express.Router();

router.get('/getAll', getAll);
router.get('/getById/:id', getById);
router.post('/add',security(), add);
router.put('/deleteUser', security(),deleteUser);

async function getAll( req, res){
    try {
        const items = await controller.getAll();
        response.success(req, res, items, 200);
    } catch (error) {
        next(error);
    }

};

async function getById( req, res){
    try {
        const items = await controller.getById(req.params.id);
        response.success(req, res, items, 200);
    } catch (error) {
        next(error);
    }
    
};

async function add( req, res, next){
    try {
        const items = await controller.add(req.body);
        if(req.body.id == 0){
            message = 'Usuario guardado';
        }else{
            message = 'Usuario actualizado';
        }
        response.success(req, res, message, 201);
    } catch (error) {
        next(error);
    }
    
};

async function deleteUser( req, res, next){
    try {
        const items = await controller.deleteUser(req.body);
        response.success(req, res, 'item eliminado meloooo', 200);
    } catch (error) {
        next(error);
    }
    
};

module.exports = router;