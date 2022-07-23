import multer from 'multer';
import multerConfig from '../config/multerConfig';

// este ".single('foto')" habilita o recurso de req.file, somente par envio de 1 unico arquivo, tb dá p mandar vários..
// o 'foto' é um nome qualquer dado por nós, esse nome deve ser passado na requisição, no caso do insominia vai no campo "name" da opção Multipart form (aonde o "value" é do tipo file e escolhemos um arquivo)
const upload = multer(multerConfig).single('foto');

// o nome do arquivo é com letra maiúscula pois vamos trabalhar com classes e classes começam com letras maiusculas.
class FotoController {
  async store(req, res) {
    return upload(req, res, (error) => {
      if (error) {
        res.status(400).json({
          // esse error retorna 3 chaves e queremos só uma, o code:
          // "name": "MulterError",
          // "code": "Arquivo precisa ser PNG ou JPG",
          // "storageErrors": []

          errors: [error.code],
        });
      }
      return res.json(req.file);
    });
  }
}

export default new FotoController();
