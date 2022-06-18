// o nome do arquivo é com letra maiúscula pois vamos trabalhar com classes e classes começam com letras maiusculas.
import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body); // vem lá o insomnia escolhendo a opção BODY > JSON e digitando um json
      /* teste com valores fixos
      const novoUser = await User.create({
        nome: 'Usuario2',
        email: 'marcelo1@yahoo.com.br',
        password: '1234',
      }); */
      res.json(novoUser);
    } catch (e) {
      res.status(400).json({
        // criada uma chave chamada erros aonde o valo são as mensagens de erro retornadas pela exceção
        errors: e.errors.map((err) => err.message), // messagem traduzida no model
      });
    }
  }
}

export default new UserController();
