
// aqui vamos exportar um midlleware global. ver no server.js    
module.exports = (req, res, next) => {    
    // posso perguntar por um nome de campo por exemplo neste midlleware global: 
    // no do professor funcionou mas aqui nada, não reconhece o cliente e dá erro   
    if (req.body.cliente) {
        console.log(`nome do cliente: ${req.body.cliente}`);
    };
    console.log('passei no midlleware global');
    console.log(req.body);
    next(); //midllewares SEMPRE precisam de next
}