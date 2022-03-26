
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

// mesma função que a comentada abaixo mas async:
async function carregaPagina(el) {

  try {
    const href = el.getAttribute('href'); // aqui pega o link passado no href da tag a
    const resposta = await fetch(href); // fetch retorna uma promise

    if (resposta.status !== 200) {
      throw new Error('erro!') // faz cair no catch 
    };
    const html = await resposta.text();// esse text tb retorna uma promisse!
    carregaResultado(html);
  } catch (erro) {
    console.log(erro);
  };    

}

/* function carregaPagina(el) {
  const href = el.getAttribute('href'); // aqui pega o link passado no href da tag a

  fetch(href) // isso aqui retorna uma promisse! Passei o link da página
    .then(resposta => {
      if (resposta.status !== 200) {
        throw new Error('erro!') // faz cair no catch
      }
      return resposta.text()// isso aqui é outra promisse que retorna o texto do html, preciso capturar isso em outro then 
    }).then(html => {
      carregaResultado(html); // captura o html (response.Text() acima)
    }).catch(e => console.log(e));  
}
 */
function carregaResultado(response) {
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = response;
}
