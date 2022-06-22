// o nome do arquivo é com letra maiúscula pois vamos trabalhar com classes e classes começam com letras maiusculas.
import User from '../models/User';

class UserController {
  // sempre vai ser async await pois estamos lidando com a base de dados!
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body); // vem lá o insomnia escolhendo a opção BODY > JSON e digitando um json
      /* teste com valores fixos
      const novoUser = await User.create({
        nome: 'Usuario2',
        email: 'marcelo1@yahoo.com.br',
        password: '1234',
      }); */
      return res.json(novoUser);
    } catch (e) {
      return res.status(400).json({
        // criada uma chave chamada erros aonde o valo são as mensagens de erro retornadas pela exceção
        errors: e.errors.map((err) => err.message), // messagem traduzida no model
      });
    }
  }

  // fazendo um CRUD de usuários, acima já tem o store faltam alguns:
  /*
  index (GET) -> lista todos os registros
  store/create (POST) -> cria um registro
  delete (DELETE) -> apaga um registro
  show (GET) -> mostra um registro
  update (PATH ou PUT) -> atualiza um registro
  */

  // index
  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch {
      return res.json(null);
    }
  }

  // show
  async show(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      return res.json(user);
    } catch {
      return res.json(null);
    }
  }

  // update
  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['ID não enviado'],
        });
      }
      const user = await User.findByPk(id);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }

      const novosDados = await user.update(req.body);
      return res.json(novosDados);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // delete
  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['ID não enviado'],
        });
      }

      const user = await User.findByPk(id);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }

      await user.destroy();
      return res.json(user);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
