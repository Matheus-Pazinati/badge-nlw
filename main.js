const redesSociais = { //Objeto que guarda os nomes de usuário de cada plataforma
  github: "Matheus-Pazinati",
  youtube: "rocketseat",
  instagram: "rocketseat_oficial",
  facebook: "rocketseat",
  twitter: "rocketseat"
}

let sociais = document.querySelectorAll('.links-redes') //Variável pegando todas as li de redes sociais
sociais.forEach(defineNovaRede)

function defineNovaRede(social){ //Para cada rede social, execute está função
  let plataforma = social.id //O id é o nome da rede social
  let linkRede = social.children[0] //Guardando a tag "a"
  linkRede.href = `https://${plataforma}.com/${redesSociais[plataforma]}` //Conteudo do href da tag a
}

function pegaDadosGithub(){ //Função para pegar os dados da API do Github
  const url = `https://api.github.com/users/${redesSociais.github}` //Url da api, passando o nome do usuário
  fetch(url) //Pegue o conteudo que está na url...
  .then(response => response.json())//Depois, transforme o conteudo da url em um arquivo JSON...
  .then(data => { //Depois, pegue este JSON e guarda em "data"
     const bioGit = data.bio //Guardando a bio do usuário no Github
     biografia.textContent = bioGit //biografia é o id do componente no HTML
     const fotoGit = data.avatar_url //Guardando a foto do usuário
     const fotoUsuário = document.querySelector('.avatar').children[1] //Selecionando o componente do HTML da foto 
     fotoUsuário.src = fotoGit
     const linkGit = document.querySelector('.link-git')
     linkGit.children[1].textContent = data.login 
     linkGit.href = data.html_url
    })
}
pegaDadosGithub()

