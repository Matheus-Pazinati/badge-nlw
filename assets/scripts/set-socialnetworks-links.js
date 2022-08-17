export const socialNetwork = {
  socialNetworksUsername: {
    github: "Matheus-Pazinati",
    youtube: "rocketseat",
    instagram: "rocketseat_oficial",
    facebook: "rocketseat",
    twitter: "rocketseat"
  },
  setSocialLinks: () => {
    const socialNetworksIcon = document.querySelectorAll('.links-redes')
    socialNetworksIcon.forEach(socialNetwork.handleSocialLinks)
  },
  handleSocialLinks: (social) => {
    let socialNetworkName = social.id
    let socialNetworkLink = social.children[0]
    socialNetworkLink.href = `https://${socialNetworkName}.com/${socialNetwork.socialNetworksUsername[socialNetworkName]}`
  }
}