const KEY_API = "a4c762fcf7c145b7bfced3dea5a064f7";
const section = document.querySelector("#listaDeNoticias");
const form = document.querySelector("form");

// TODO: Estudar GET e POST

async function getNotices(query) {
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=${query}`,
      {
        method
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



// inputCep.onkeyup = async () => {
//   if (inputCep.value.length == 8) {
//     const resposta = await fetch(
//       `https://viacep.com.br/ws/${inputCep.value}/json/`
//     );

//     const dadosCep = await resposta.json();

//     inputRua.value = dadosCep.logradouro;
//     inputCidade.value = dadosCep.localidade;
//     inputBairro.value = dadosCep.bairro;
//     inputUF.value = dadosCep.uf;
//   }
// };

