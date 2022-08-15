"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// o nome do arquivo é com letra maiúscula pois vamos trabalhar com classes e classes começam com letras maiusculas.
var _sequelize = require('sequelize');
var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);
var _Foto = require('../models/Foto'); var _Foto2 = _interopRequireDefault(_Foto);

const fs = require('fs');

class AlunoController {
  async store(req, res) {
    try {
      // console.log(req.body);
      const novoAluno = await _Aluno2.default.create(req.body);
      return res.json({ aluno: novoAluno });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    // console.log('aquiiiiiiiii', req.id);
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Faltando o ID'],
        });
      }

      const aluno = await _Aluno2.default.findByPk(id);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }

      const novosDados = await aluno.update(req.body);
      // const { id, nome, email } = novosDados; // para mostrar somente esses 3 campos no insomnia
      return res.json({ aluno: novosDados });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      // abaixo um exemplo de select between com query paremetros vindos da requisição!! Aprendi sozinho, professor não ensinou nada disso. Filtrei só os alunos com idade entre 42 e 43 anos, funcionou!
      // no insomnia usei a seguinte url: https://localhost:3001/alunos/?email=marcelo@yahoo.com.br&idadeini=42&idadefim=43
      // usar o   import { Op } from 'sequelize';

      const { idadeini, idadefim } = req.query;
      console.log(idadeini, idadefim);

      let alunos;

      if (idadeini && idadefim) {
        // pelo que entendi não tem como fazer um where e ao mesmo tempo dizer quais campos se quer retornar
        // é um overload, ou se passa um ou outro parametro, mas pelo que vi num site dá para montar um sql literal
        alunos = await _Aluno2.default.findAll({ where: { idade: { [_sequelize.Op.between]: [idadeini, idadefim] } } });
      } else {
        alunos = await _Aluno2.default.findAll({
          attributes: [['id', 'aluno_id'], 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
          // order: [['id', 'DESC'], [Foto, 'id', 'DESC']], // Ordenado pelo id do Aluno e depois pelos ids das fotos
          order: [['id'], [_Foto2.default, 'id', 'DESC']], // Ordenado pelo id do Aluno e depois pelos ids das fotos

          include: {
            model: _Foto2.default, // isto aqui funciona como um join, trazendo as fotos da tabela de fotos associadas ao aluno, desde que tenha a relação do método associate lá em baixo
            attributes: ['aluno_id', 'id', 'filename', 'originalname', 'url'],
          },

        });
      }

      return res.json(alunos);
    } catch (e2) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Faltando o ID'],
        });
      }

      const aluno = await _Aluno2.default.findByPk(id, {
        attributes: [['id', 'aluno_id'], 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [_Foto2.default, 'id', 'DESC']], // Ordenado pelo id do Aluno e depois pelos ids das fotos
        include: {
          model: _Foto2.default, // isto aqui funciona como um join, trazendo as fotos da tabela de fotos associadas ao aluno, desde que tenha a relação do método associate lá em baixo
          attributes: ['aluno_id', 'id', 'filename', 'originalname', 'url'],
        },

      });

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }
      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Faltando o ID'],
        });
      }

      const aluno = await _Aluno2.default.findByPk(id, {
        include: {
          model: _Foto2.default,
          attributes: ['filename'],
        },
      });

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }
      await aluno.destroy();

      const { Fotos } = aluno;

      Fotos.forEach((element) => {
        const { filename } = element;
        fs.unlink(`uploads/images/${filename}`, (err) => {
          if (err) throw err;
        });
      });

      // return res.json({ statusExclusao: 'true' });
      return res.json({ aluno });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

exports. default = new AlunoController();
