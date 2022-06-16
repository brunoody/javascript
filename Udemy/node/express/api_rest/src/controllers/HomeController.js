// o nome do arquivo é com letre maiúscula pois vamos trabalhar com classes e classes começam com letras maiusculas.
class HomeController {
  index(rer, res) {
    res.json({
      'tudo certo': 'true',
    });
  }
}

export default new HomeController();
