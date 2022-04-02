//no console:
// iniciar o npm: npm init -y
// instalar o express: npm instal express
// instalar o expre com dependenciaa de desenvolvedor em vez de dependencia do sistema: npm instal express --save-dev
// instlar versão específica: npm instal express@2.1.0

// versões: 
//exemplo: "express": "^4.17.3"
//o ^ quer dizer que eu sempre quero atualizar qdo houver alguma atualização,  se não quiser atualizar instalo com -E: npm instal express -E

//
// 4.     17.    3
//major  minor  patch
//incrementa o patch: Correção de bug: 
//incrementa a Minor: Alguma alteração que não influencie na compatibilidade do sistema, como um recurso novo
//incrementa a Major: Alguma alteração que mexe na compatibilidade das outras versoes

// o circunflexo atualiza sempre a minor e a patch
// o til ~ atualiza só a versão patch

// atualizar para a ultima versão de uma major: nom instal express@4.x
// nom update atualiza p ultima versao, sem mexer na major se tiver o ^

// Para desisntalar: npm uninstall express

// para listar os pacotes: npm ls
// para ver os niveis: nom ls --depth(0 ou 1 ou 2....)

// pcotes desatualizados: npm outdated
