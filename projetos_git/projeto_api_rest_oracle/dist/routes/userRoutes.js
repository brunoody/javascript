"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

// não preciso colocar /users pois já esta vindo da rota de user lá no App.js

router.get('/:id', _UserController2.default.show);
router.get('/', _UserController2.default.index);
// esses dois comando acima não deveriam existir na vida real pois ningém vai listar todos os usuários, ou ver apenas um pelo id.. mas fica aqui como exemplo

router.post('/', _UserController2.default.store); // store ou create. Aqui não tem o middleware loginRequired pois precisa ser aberto para criar novos usuários
router.put('/', _loginRequired2.default, _UserController2.default.update); // a linha abaixo foi comentada para mostrar que tinha um parametro de id que não vamos mais precisar pois vamos usar o id que vem do token
// router.put('/:id', userController.update); //

// a linha abaixo foi comentada para mostrar que tinha um parametro de id que não vamos mais precisar pois vamos usar o id que vem do token
router.delete('/', _loginRequired2.default, _UserController2.default.delete);
// router.delete('/:id', userController.delete);

exports. default = router;

/*
index (GET) -> lista todos os registros
store/create (POST) -> cria um registro
delete (DELETE) -> apaga um registro
show (GET) -> mostra um registro
update (PATH ou PUT) -> atualiza um registro
*/
