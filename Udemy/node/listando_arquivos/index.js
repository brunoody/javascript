
// módulos do próprio node
const fileSystem = require('fs').promises;
// este fs dá para criar, apagar, copiar arquivos..
const path = require('path');

// lista os arquivos da pasra
//fileSystem.readdir(path.resolve(__dirname))
//  .then(files => console.log(files))
//  .catch(e => console.log(e))

// fazendo com uma função:
async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname) // se rootDir estiver vazio pega o path
    const files = await fileSystem.readdir(rootDir)
    Walk(files, rootDir);
};

async function Walk(files, rootDir)  {
    for (let file of files) {
        const caminhoCompleto = path.resolve(rootDir, file);
        const stats = await fileSystem.stat(caminhoCompleto);

        // testar e ignorar pastas/arquivos com expressão regular
        // não quero nada com o termo anotacoes por exemplo:
        //if (/anotacoes.*/g.test(caminhoCompleto)) {
        //    continue;
        //};                
        
        // recursividade para listar os arquivos dentro das pastas:
        if (stats.isDirectory()) {
            readdir(caminhoCompleto);
            continue;
        }
        
        // quero somente os arquivos css:
        if (!/\.css$/g.test(caminhoCompleto)) {
            continue;              
        }            
        console.log(caminhoCompleto);
    }
}

readdir('../..');