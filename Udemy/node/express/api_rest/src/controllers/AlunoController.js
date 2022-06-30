// o nome do arquivo é com letra maiúscula pois vamos trabalhar com classes e classes começam com letras maiusculas.
import Aluno from '../models/Aluno';

class AlunoController {
  async store(req, res) {
    const novoAluno = await Aluno.create(req.body);
    res.json(novoAluno);
  }

  async index(req, res) {
    try {
      const alunos = await Aluno.findAll();
      return res.json(alunos);
    } catch {
      return res.json(null);
    }
  }
}

export default new AlunoController();
