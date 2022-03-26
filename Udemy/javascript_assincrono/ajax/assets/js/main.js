
// o que entendi: Tem uma página com 3 links para outras páginas do meu site, quando clicar no link não vai chamar a página do link e sim o meu codigo JS vai fazer uma requisição e vai abrir a página dentro de um outro objeto dentro da página principal

/////////////////// IMPORTANTE! TEM QUE ABRIR PELO LIVE SERVER PARA FUNCIONAR ///////////////

const request = obj => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();

    xhr.addEventListener('load', () => {
      if(xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText);
      } else {
        reject(xhr.statusText);
      }
    });
  });
};

document.addEventListener('click', e => {
  const el = e.target;
  const tag = el.tagName.toLowerCase(); // PEHA A TAG DO ELEMENTO CLICADO, NO CADO DE LINK É A TAG <a>

  if (tag === 'a') {
    e.preventDefault(); // IMPEDE DE O MEU CLICK ABRIR O LINK
    carregaPagina(el);
  }
});

async function carregaPagina(el) {
  const href = el.getAttribute('href'); // aqui pega o link passado no href da tag a

  const objConfig = {
    method: 'GET',
    url: href
  };

  try {
    const response = await request(objConfig);
    carregaResultado(response);
  } catch(e) {
    console.log(e);
  }
}

function carregaResultado(response) {
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = response;
}
