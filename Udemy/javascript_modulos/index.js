////////////////////////import default e outros:
import MinhafuncaoDefault, {soma, numero1, numero3}  from './modulo1.js';


////////////////////////import default: Posso eleger apenas uma função, constante, variavel, classe.. para ser a defaul:
import MinhafuncaoDefault from './modulo1.js';
console.log(MinhafuncaoDefault);


//////////////////////// posso importar tudo de uma só vez e essa importação coloca tudo dentro de um objeto: 
import * as MeuModulo from './modulo1.js';

console.log(MeuModulo);
console.log(MeuModulo.soma(1000,2151));

//////////////////////// importar somente o que precisar: 
// tem que executar pelo console do chrome!! e no html, na chamada no script, tem que informar que o type="module"
import  {numero1 as numeroImport , objetoExport, soma, multiplica, Pessoa as PessoaImport} from './modulo1.js';

// se eu já tiver uma constante, variavel, objeto com o mesmo nome vai dar erro. Para resolver isso podemos renomear no próprio import acima:
// posso tb já nomar no export!!
const numero1 = 1;

const objeto = {
    nome: 'Marcelo2',
    sobrenome: 'Toller2'
}

const resultadoSoma = soma(1,2);
const classePessoaImport = new PessoaImport('Marcelo3', 'Toller3');

console.log(resultadoSoma, numero1, numeroImport, objeto, objetoExport, multiplica(3,9));
console.log(classePessoaImport)
