// o nome do arquivo é com letra maiúscula pois vamos trabalhar com classes e classes começam com letras maiusculas.
import Aluno from '../models/Aluno';

class HomeController {
  async index(rer, res) {
    const novoAluno = await Aluno.create({
      nome: 'Marcelo',
      sobrenome: 'Toller',
      email: 'marcelo@yahoo.com.br',
      idade: 42,
      peso: 80,
      altura: 1.73,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
