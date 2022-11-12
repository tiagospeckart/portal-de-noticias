// chave API de https://newsapi.org
const KEY_API = "a4c762fcf7c145b7bfced3dea5a064f7";

// <section> via ID
const section = document.querySelector("#listaDeNoticias");


// Função getNotices é uma função assíncrona para consumo da API getnotices. 
// Há uma requisição para topheadlines do Brasil.
async function getNotices() {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=br`,
      {
        headers: {
          Authorization: KEY_API,
        },
      }
    );
  // A resposta é então processada pelo método .json() que pega a response
  // e a transforma em um objeto em JS notices
  const notices = await response.json();

  // buscar dentro do objeto o nível onde estão os dados que vamos acessar. Ver https://newsapi.org/docs/endpoints/top-headlines
  // para cada "notice" dentro de notices, ir para seu "article"
  notices.articles.forEach((notice) => {
    // const cardNotícias = seguinte HTML alterado com template string que recebe parâmetro notice
    const cardNoticias = `
        <article class="col-6">
          <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src="${notice.urlToImage}"
                  class="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">
                    ${notice.title}
                  </h5>
                  <p class="card-text">
                  ${notice.description}
                  </p>
                  <a
                    href="${notice.url}"
                    class="btn btn-primary"
                    >Ir para noticia</a
                  >
                </div>
              </div>
            </div>
          </div>
        </article>
        `;
    // HTML de section += HTML anterior + HTML do loop atual
    // É um append
    section.innerHTML += cardNoticias;
  });
}

getNotices();
