
// Pelo que entendi é um recurso para executar funções na ordem mesmo que uma seja mais rápida ou mais lenta que as outras, não é como no Delphi que espera terminar uma para executar a outra na ordem que foi digitada

function f1 (funcaoCallback) {
    setTimeout(function () {
        console.log('f1');
        if (funcaoCallback ) funcaoCallback(); // se passou uma função calback, executa ela..
    }, 1000)
};

function f2 (funcaoCallback) {
    setTimeout(function () {
        console.log('f2');
        if (funcaoCallback ) funcaoCallback(); // se passou uma função calback, executa ela..
    }, 500);
};


function f3 (funcaoCallback) {
    setTimeout(function () {
        console.log('f3');
        if (funcaoCallback ) funcaoCallback(); // se passou uma função calback, executa ela..
    }, 1500)
};


//f1(); //vai executar em 3 lugar
//f2(); //vai executar em 2 lugar
//f3(); //vai executar em 4 lugar
//console.log('teste'); // vai executar primeiro pois não tem timmer


// para executar na ordem usando callback seria assim :
// f1(function () {
//     f2(function() {
//         f3(function() {
//             console.log('teste');
//         });
//     });
// });

// Dá para melhorarp ara não ficar um denro do outro chamando as outras:
f1(f1Callback);

function f1Callback() {
    f2(f2Callback)
};

function f2Callback() {
    f3(f3Callback)
};

function f3Callback() {
    console.log('teste')
};