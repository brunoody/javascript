// o nome do arquivo é com letra maiúscula pois vamos trabalhar com classes e classes começam com letras maiusculas.
import jwt from 'jsonwebtoken';
import User from '../models/User';

class TokenController {
  async store(req, res) {
    // pega o e-mail e senha vindo do json enviado
    const { email = '', password = '' } = req.body;

    console.log(req.body);
    // valida se enviou email e senha:
    if (!email || !password) {
      return res.status(401).json({
        errors: ['e-mail ou senha não enviado'],
      });
    }

    // verifica se o email existe na base:
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({
        errors: ['Usuário não cadastrado'],
      });
    }

    if (!(await user.passwordIsValid(password))) {
      return res.status(401).json({
        errors: ['Senha inválida'],
      });
    }

    const { id } = user;

    // payload: dados que estarão "criptografados" no token e que serão recuperados depois para uso
    const token = jwt.sign(
      { id, email }, // payload
      process.env.TOKEN_SECRET, // espécie de chave de criptografia que podemos colocar qualquer coisa, ver aquivo .env
      { expiresIn: process.env.TOKEN_EXPIRATION }, // prazo de expiração do token, ver aquivo .env
    );

    return res.json({ token });
  }
}

export default new TokenController();
