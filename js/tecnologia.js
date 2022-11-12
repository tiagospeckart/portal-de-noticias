const KEY_API = "a4c762fcf7c145b7bfced3dea5a064f7";
const section = document.querySelector("#listaDeNoticias");

async function getNotices() {
  const response = await fetch(
    // Eis aqui a única diferença para o notícias.js
    // TODO: juntar os arquivos JS num só
    `https://newsapi.org/v2/top-headlines?country=br&category=technology`,
      {
        headers: {
          Authorization: KEY_API,
        },
      }
    );

  const notices = await response.json();

  notices.articles.forEach((notice) => {
   
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

    section.innerHTML += cardNoticias;
  });
}

getNotices();
