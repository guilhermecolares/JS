fetch('https://api.github.com/users/guilhermecolares/repos')
    .then(dados => dados.json())
    .then(repositorios => {
        const repositoriosPublicos = repositorios.filter(repositorio => !repositorio.private);
        console.log(`Repositorios Publicos: ${repositoriosPublicos.map(repositorio => repositorio.name).join(', ')}`);
    })
    .catch(erro => console.log('Erro ao carregar os repositorios', erro));