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

      const { id, nome, email } = novoUser;

      return res.json({ id, nome, email });
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
      // agora sei quem é o usuário logado, este email e id vieram da descriptografia do token
      // no middleware loginRequired
      // const users = await User.findAll(); // posso deixar asim e ele mostra todos os campos ou posso decidir que campos mostar:
      console.log('passou aqui');
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.json(users);
    } catch {
      return res.json(null);
    }
  }

  // show
  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);

      const { id, nome, email } = user; // para mostrar somente esses 3 campos no insomnia
      return res.json({ id, nome, email });
    } catch {
      return res.json(null);
    }
  }

  // update
  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId); // esse userId vem do toquem, que foi extraíno no middleware loginRequired

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }

      const novosDados = await user.update(req.body);
      const { id, nome, email } = novosDados; // para mostrar somente esses 3 campos no insomnia
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // delete
  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId); // esse userId vem do toquem, que foi extraíno no middleware

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }

      await user.destroy();
      return res.json('Usuário excluído com sucesso');
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
