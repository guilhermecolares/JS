fetch('https://jsonplaceholder.typicode.com/posts')
    .then(dados => dados.json())
    .then(postagens => {
        console.log('As 5 Primeiras postagens:');
        postagens.slice(0, 5).forEach(postagem => console.log(postagem.title))

        const filtrarPostagens = postagens.filter(postagem => postagem.title.includes('qui'));

    console.log("Numeros de Postagens com 'quia' no titulo:");
    filtrarPostagens.forEach(postagem => {
        console.log(postagem.title);
        });
    })
    .catch(erro => console.log('Erro ao carregar as postagens', erro));