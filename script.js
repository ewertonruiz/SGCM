window.onload = function() {
    
    let botoes = document.querySelectorAll("a.excluir");
    console.log(botoes);
    botoes.forEach(item => {
        item.addEventListener('click', () => {
            if (confirm("Deseja realmente excluir?")) {
                item.parentNode.parentNode.remove();
            }
        })
    });

    let xhr = new XMLHttpRequest();
    let botaoCarregar = document.querySelector("a#load");
    botaoCarregar.addEventListener("click", () => {
        let tabela = document.querySelector("table");
        let url = "http://my-json-server.typicode.com/danielnsilva/json/profissionais";

       // xhr.open("GET", url);
       // xhr.addEventListener("readystatechange", ()=> {
           // if (xhr.readyState == 4 && xhr.status == 200) {
               // let dados = JSON.parse(xhr.responseText);

               fetch(url)
               .then(resposta => resposta.json())
               .then(dados => {


                 for (let item in dados){
                    let linha = document.createElement("tr");
                    let id = document.createElement("td");
                    let nome = document.createElement("td");
                    let registro = document.createElement("td");
                    let especialidade = document.createElement("td");
                    let unidade = document.createElement("td");
                    let telefone = document.createElement("td");
                    let email = document.createElement("td");
                    let acoes = document.createElement("td");
                    id.classList.add("fit");
                    id.textContent = dados[item].id;
                    nome.textContent = dados[item].nome;
                    registro.textContent = dados[item].registro;
                    especialidade.textContent = dados[item].especialidade;
                    unidade.textContent = dados[item].unidade;
                    telefone.textContent = dados[item].telefone;
                    email.textContent = dados[item].email;
                    acoes.innerHTML = `<a href="javascript:void(0)" class="botao">Editar</a>
                                     <a href="javascript:void(0)" class="botao excluir">Excluir</a>`;

                    linha.appendChild(id);
                    linha.appendChild(nome);
                    linha.appendChild(registro);
                    linha.appendChild(especialidade);
                    linha.appendChild(unidade);
                    linha.appendChild(telefone);
                    linha.appendChild(email);
                    linha.appendChild(acoes);
                    tabela.tBodies[0].appendChild(linha);

                }
            });
         //   }
      //  });
       // xhr.send();
        
    });

}


