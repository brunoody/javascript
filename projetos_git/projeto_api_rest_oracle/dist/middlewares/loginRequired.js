"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

exports. default = async (req, res, next) => {
  const { authorization } = req.headers; // esse authorization é uma palavra que criei no insomnia na opçõ Header

  if (!authorization) {
    return res.status(401).json({
      errors: ['Requisição não autorizada'],
    });
  }

  const [, token] = authorization.split(' '); // é necessário separar a palavra bearer que vem na req. do token

  try {
    const dados = _jsonwebtoken2.default.verify(token, process.env.TOKEN_SECRET);

    const { id, email } = dados;

    // verificamos na Base se esse id e e-mail ainda correspondem a um usuário válido/existente:
    const user = await _User2.default.findOne({
      where: {
        id,
        email,
      },
    });

    if (!user) {
      return res.status(401).json({
        errors: ['Usuário inválido ou inexistente'],
      });
    }

    const { nome } = user;
    const { exp } = dados; // atributo de expiração do toquen

    const data = new Date(exp * 1000);

    if (data) {
      req.tokenExpira = data.toLocaleDateString('pt-br', { // isso aqui é um objeto passado por parametro para configurar a hora, tm o de data tb
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',
      });
    } else {
      req.tokenExpira = '';
    }

    req.userId = id;
    req.userEmail = email;
    req.userName = nome;
    return next();
  } catch (e) {
    return res.status(401).json({
      errors: ['Token expirado ou inválido'],
    });
  }
};
// esse middleware vai ser usado nas rotas do usuário!!
