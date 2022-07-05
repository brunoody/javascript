// o nome do arquivo é com letra maiúscula pois vamos trabalhar com classes e classes começam com letras maiusculas.
import { Op } from 'sequelize';
import Aluno from '../models/Aluno';

class AlunoController {
  
  async store(req, res) {
    try {
      // console.log(req.body);
      const novoAluno = await Aluno.create(req.body);
      res.json(novoAluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });    
    }
  }

  async update(req, res) {
    // console.log('aquiiiiiiiii', req.id);
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Faltando o ID'],
        });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }

      const novosDados = await aluno.update(req.body);
      // const { id, nome, email } = novosDados; // para mostrar somente esses 3 campos no insomnia
      return res.json(novosDados);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      // abaixo um exemplo de select between com query paremetros vindos da requisição!! Aprendi sozinho, professor não ensinou nada disso. Filtrei só os alunos com idade entre 42 e 43 anos, funcionou!
      // no insomnia usei a seguinte url: https://localhost:3001/alunos/?email=marcelo@yahoo.com.br&idadeini=42&idadefim=43
      // usar o   import { Op } from 'sequelize';

      const { idadeini, idadefim } = req.query;
      console.log(idadeini, idadefim);

      let alunos;

      if (idadeini && idadefim) {
        // pelo que entendi não tem como fazer um where e ao mesmo tempo dizer queis campos se quer retornar
        // é um overload, ou se passa um ou outro parametro, mas pelo que vi num site dá para montar um sql literal
        alunos = await Aluno.findAll({ where: { idade: { [Op.between]: [idadeini, idadefim] } } });
      } else {
        alunos = await Aluno.findAll({ attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'] });        
      }

      return res.json(alunos);
    } catch {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Faltando o ID'],
        });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }
      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Faltando o ID'],
        });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }
      await aluno.destroy();
      return res.json({ statusExclusao: 'Sucesso' });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new AlunoController();
