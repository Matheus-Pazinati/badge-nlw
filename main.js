const redesSociais = {
  github: "Matheus-Pazinati",
  youtube: "rocketseat",
  instagram: "rocketseat_oficial",
  facebook: "rocketseat",
  twitter: "rocketseat"
}

let sociais = document.querySelectorAll('.links-redes')
sociais.forEach(defineNovaRede)

function defineNovaRede(social){
  let plataforma = social.id
  let linkRede = social.children[0]
  linkRede.href = `https://${plataforma}.com/${redesSociais[plataforma]}`
}

function pegaDadosGithub(){
  const url = `https://api.github.com/users/${redesSociais.github}`
  fetch(url)
  .then(response => response.json())
  .then(data => {
     const bioGit = data.bio
     biografia.textContent = bioGit
     const fotoGit = data.avatar_url
     const fotoUsuário = document.querySelector('.avatar').children[1]
     fotoUsuário.src = fotoGit
     const linkGit = document.querySelector('.link-git')
     linkGit.children[1].textContent = data.login 
     linkGit.href = data.html_url
    })
}
pegaDadosGithub()

