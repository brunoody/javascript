import dotenv from 'dotenv';

dotenv.config();

import './src/database';

import express from 'express';
import { resolve } from 'path';
import homeRoutes from './src/routes/homeRoutes';
import userRoutes from './src/routes/userRoutes';
import tokenRoutes from './src/routes/tokenRoutes';
import alunoRoutes from './src/routes/alunoRoutes';
import fotoRoutes from './src/routes/fotoRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    // A opção "extended" diz para o express qual biblioteca ele deve utilizar para fazer o parsing do conteúdo das requisições que ele recebe.
    // Quando extended : true vai utilizar a biblioteca qs e quando for false ele vai utilizar a biblioteca querystring.
    // A diferença entre elas é que a biblioteca qs permite o aninhamento de objetos (nested objects), que é praticamente como o JSON trabalha:
    // E a biblioteca querystring não suporta nested objects.
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads'))); // permite abrir os arquivos estaticos (fotos neste caso) no navegador através da url do caminho dele, ver campo url no model de Foto
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/alunos/', alunoRoutes);
    this.app.use('/fotos/', fotoRoutes);
  }
}

// vamos exportar somente o app que é o express em sí mesmo:
export default new App().app;
