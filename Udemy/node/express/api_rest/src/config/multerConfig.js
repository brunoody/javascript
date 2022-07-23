import multer from 'multer';
import { extname, resolve } from 'path';

const aleatorio = () => Math.floor(Math.random() * 10000 + 10000); // retorna um valor entre 10 mil e 20 mil

export default {
  // recurso para filtrar somente determinadas extensões de arquivo
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return cb(new multer.MulterError('Arquivo precisa ser PNG ou JPG'));
    }
    return cb(null, true);
  },
  storage: multer.diskStorage({ // salva no disco, no servidor, não será salva no banco de dados
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads')); // cb = callback, primeiro parametro é caso dê algum erro, passamos null aqui. o segundo parametro é o caminho aone ficarão as imagens (pasta uploads)
    },
    filename: (req, file, cb) => { // aqui definimos um novo nome para o arquivo, tanto para ser único como, para evitar espaços, acentuação e caracteres especiais
      cb(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`); // concatena a data/hota/seg/miliseg atuais com a extensão do arquivo passado (o extname extrai o ponto e a extensão: .jpg). colocamos tb um numero aleatório depois da data para não haver duplicidade mesmo
    },
  }),
};
