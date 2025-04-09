console.log('Como consumir API usando fetch()')
cep = 13045120
url = `https://viacep.com.br/ws/${cep}/json/`

//Puxando os dados
dados = fetch(url).then(
    (response)=>{return response.json()}
).then(
    (dados)=>{
        console.log(dados)
        console.log('logradouro',dados.logradouro)

    }
)