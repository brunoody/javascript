"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// o nome do arquivo é com letra maiúscula pois vamos trabalhar com classes e classes começam com letras maiusculas.
var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);

class HomeController {
  async store(req, res) {
    const novoAluno = await _Aluno2.default.create(req.body);
    res.json(novoAluno);
  }

  async index(req, res) {
    try {
      const alunos = await _Aluno2.default.findAll();
      return res.json(alunos);
    } catch (e) {
      return res.json(null);
    }
  }
}

exports. default = new HomeController();
