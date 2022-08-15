"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable camelcase */
var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _multerConfig = require('../config/multerConfig'); var _multerConfig2 = _interopRequireDefault(_multerConfig);
var _Foto = require('../models/Foto'); var _Foto2 = _interopRequireDefault(_Foto);

const fs = require('fs');

// este ".single('foto')" habilita o recurso de req.file, somente par envio de 1 unico arquivo, tb dá p mandar vários..
// o 'foto' é um nome qualquer dado por nós, esse nome deve ser passado na requisição, no caso do insominia vai no campo "name" da opção Multipart form (aonde o "value" é do tipo file e escolhemos um arquivo)
const upload = _multer2.default.call(void 0, _multerConfig2.default).single('foto');

// o nome do arquivo é com letra maiúscula pois vamos trabalhar com classes e classes começam com letras maiusculas.
class FotoController {
  store(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        res.status(400).json({
          // esse error retorna 3 chaves e queremos só uma, o code:
          // "name": "MulterError",
          // "code": "Arquivo precisa ser PNG ou JPG",
          // "storageErrors": []

          errors: [error.code],
        });
      }

      try {
        const { originalname, filename } = req.file;
        const { aluno_id } = req.body; // passado por parametro no insomnia!!

        if (!aluno_id) {
          return res.status(400).json({ errors: ['ID do Aluno não informado'] });
        }

        const foto = await _Foto2.default.create({ originalname, filename, aluno_id });
        return res.json(foto);
      } catch (e) {
        return res.status(400).json({ errors: ['Aluno não existe'] }); // aqui estmamos tratando com try catch, mas o certo seria consultar na base se esse aluno existe...
      }
    });
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Faltando o ID da foto'],
        });
      }

      const foto = await _Foto2.default.findByPk(id);

      if (!foto) {
        return res.status(400).json({
          errors: ['foto não existe'],
        });
      }
      await foto.destroy();

      // delete a foto fisicamente, descobri e fiz sozinho
      const { filename } = foto;
      fs.unlink(`uploads/images/${filename}`, (err) => {
        if (err) throw err;
      });

      // return res.json({ statusExclusao: 'true' });
      return res.json({ foto });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

exports. default = new FotoController();
