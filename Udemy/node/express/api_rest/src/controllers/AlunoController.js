// o nome do arquivo é com letra maiúscula pois vamos trabalhar com classes e classes começam com letras maiusculas.
// import { Op } from 'sequelize';
import Aluno from '../models/Aluno';

class AlunoController {
  async store(req, res) {
    const novoAluno = await Aluno.create(req.body);
    res.json(novoAluno);
  }

  async index(req, res) {
    try {
      // abaixo um exemplo de select between com query paremetros vindos da requisição!! Aprendi sozinho, professor não ensinou nada disso. Filtrei só os alunos com idade entre 42 e 43 anos, funcionou!
      // no insomnia usei a seguinte url: https://localhost:3001/alunos/?email=marcelo@yahoo.com.br&idadeini=42&idadefim=43
      // const { email, idadeini, idadefim } = req.query;
      // console.log(email, idadeini, idadefim);
      // const alunos = await Aluno.findAll(({ where: { idade: { [Op.between]: [idadeini, idadefim] } } }));
      // usar o    import { Op } from 'sequelize';

      const alunos = await Aluno.findAll();
      return res.json(alunos);
    } catch {
      return res.json(null);
    }
  }
}

export default new AlunoController();
