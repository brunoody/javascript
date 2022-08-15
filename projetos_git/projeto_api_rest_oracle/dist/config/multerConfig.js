"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _path = require('path');

const aleatorio = () => Math.floor(Math.random() * 10000 + 10000); // retorna um valor entre 10 mil e 20 mil

exports. default = {
  // recurso para filtrar somente determinadas extensões de arquivo
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return cb(new _multer2.default.MulterError('Arquivo precisa ser PNG ou JPG'));
    }
    return cb(null, true);
  },
  storage: _multer2.default.diskStorage({ // salva no disco, no servidor, não será salva no banco de dados
    destination: (req, file, cb) => {
      cb(null, _path.resolve.call(void 0, __dirname, '..', '..', 'uploads', 'images')); // cb = callback, primeiro parametro é caso dê algum erro, passamos null aqui. o segundo parametro é o caminho aone ficarão as imagens (pasta uploads)
    },
    filename: (req, file, cb) => { // aqui definimos um novo nome para o arquivo, tanto para ser único como, para evitar espaços, acentuação e caracteres especiais
      cb(null, `${Date.now()}_${aleatorio()}${_path.extname.call(void 0, file.originalname)}`); // concatena a data/hota/seg/miliseg atuais com a extensão do arquivo passado (o extname extrai o ponto e a extensão: .jpg). colocamos tb um numero aleatório depois da data para não haver duplicidade mesmo
    },
  }),
};
