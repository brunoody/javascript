

function checkChar (e) {
// quando uma tecla é pressionada o que obtemos no e.keyCode é o char, e para sabermos qual
// caractere realmente é usamos:    
    const char = String.fromCharCode(e.keyCode); // aqui retorna se é a, b, c, 1, 2, 3 literam e não o codigo char da tecla 

// verificar se este caractere esta numa expressão regular:
    const expressao = '[a-zA-Z0-9]';

    if (char.match(expressao)) {
        return true;
    }
}