listarCid = () =>{
    return fetch('http://localhost:3001/api/cids')
    .then(res => {
        return res.json()
    })
    .then(json => {
        return json
    })

    }

    let corpoTabela = document.querySelector("#tabelaCid")
    
    exibeCid = (codigo, nome) => {
        let linha = document.createElement('tr')
        conteudoLinha = `
            <td>${codigo}</td>
            <td>${nome}</td>
        `

        linha.innerHTML = conteudoLinha
        console.log(linha)
        return linha
    }

    
        listarCid().forEach(indice => {
            corpoTabela.appendChild(exibeCid(indice.codigo, indice.nome))
        });
    
