
function recursiva (max) {
    console.log(max); // mostra
    if (max >= 10) return;//para aqui
    max++; // incrementa;    
    recursiva(max); // executa ela mesma
};

recursiva(-1);
