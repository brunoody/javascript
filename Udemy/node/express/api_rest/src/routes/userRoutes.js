import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// não preciso colocar /users pois já esta vindo da rota de user lá no App.js
router.post('/', userController.store); // store ou create
router.get('/', loginRequired, userController.index);
router.get('/:id', userController.show);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

export default router;

/*
index (GET) -> lista todos os registros
store/create (POST) -> cria um registro
delete (DELETE) -> apaga um registro
show (GET) -> mostra um registro
update (PATH ou PUT) -> atualiza um registro
*/
