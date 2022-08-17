import { socialNetwork } from './set-socialnetworks-links.js'

export async function getGithubData() {
  const userData = await fetch(`https://api.github.com/users/${socialNetwork.socialNetworksUsername.github}`);
  const userDataJson = await userData.json()

  biografia.textContent = userDataJson.bio

  const userPhoto = document.querySelector('.avatar').children[1]
  userPhoto.src = userDataJson.avatar_url

  const gitLink = document.querySelector('.link-git')
  gitLink.children[1].textContent = userDataJson.login
  gitLink.href = userDataJson.html_url
}