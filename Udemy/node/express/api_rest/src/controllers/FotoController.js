// o nome do arquivo é com letra maiúscula pois vamos trabalhar com classes e classes começam com letras maiusculas.
class FotoController {
  async store(req, res) {
    res.json('foto');
  }
}

export default new FotoController();
