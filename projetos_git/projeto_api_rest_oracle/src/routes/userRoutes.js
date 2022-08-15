import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// não preciso colocar /users pois já esta vindo da rota de user lá no App.js

router.get('/:id', userController.show);
router.get('/', userController.index);
// esses dois comando acima não deveriam existir na vida real pois ningém vai listar todos os usuários, ou ver apenas um pelo id.. mas fica aqui como exemplo

router.post('/', userController.store); // store ou create. Aqui não tem o middleware loginRequired pois precisa ser aberto para criar novos usuários
router.put('/', loginRequired, userController.update); // a linha abaixo foi comentada para mostrar que tinha um parametro de id que não vamos mais precisar pois vamos usar o id que vem do token
// router.put('/:id', userController.update); //

// a linha abaixo foi comentada para mostrar que tinha um parametro de id que não vamos mais precisar pois vamos usar o id que vem do token
router.delete('/', loginRequired, userController.delete);
// router.delete('/:id', userController.delete);

export default router;

/*
index (GET) -> lista todos os registros
store/create (POST) -> cria um registro
delete (DELETE) -> apaga um registro
show (GET) -> mostra um registro
update (PATH ou PUT) -> atualiza um registro
*/
