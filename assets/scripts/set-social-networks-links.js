function setSocialNetworksLinks() {
  let socialNetworks = {
    github: "Matheus-Pazinati",
    youtube: "rocketseat",
    instagram: "rocketseat_oficial",
    facebook: "rocketseat",
    twitter: "rocketseat"
  }
  const socialNetworksIcon = document.querySelectorAll('.links-redes')
  socialNetworksIcon.forEach(handleSocialLinks)
  return socialNetworks
}
  
  function handleSocialLinks(social){ //Para cada rede social, execute está função
    let socialNetwork = social.id //O id é o nome da rede social
    let socialNetworkLink = social.children[0] //Guardando a tag "a"
    socialNetworkLink.href = `https://${socialNetwork}.com/${setSocialNetworksLinks()[socialNetwork]}` //Conteudo do href da tag a
  }