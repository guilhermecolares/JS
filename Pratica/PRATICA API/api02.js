fetch('https://api.github.com/users/rubenstadeureis')
    .then(dados => dados.json())
    .then(dados => {
        console.log(`Nome de Usuario: ${dados.login}`);
        console.log(`Repositorios Publicos: ${dados.public_repos}`);
    })