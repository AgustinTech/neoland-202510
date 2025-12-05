// Home View

const homeView = document.createElement('div')
homeView.style.display = ''

const homeTitle = document.createElement('h1')
homeTitle.textContent = 'MyPet'
homeTitle.className = 'text-3xl font-bold'
homeView.appendChild(homeTitle)

const homeSubtitle = document.createElement('h2')
homeSubtitle.textContent = 'Welcome Home'
homeView.appendChild(homeSubtitle)

const homePetTopPanel = document.createElement('div')
homePetTopPanel.className = 'flex justify-between'
homeView.appendChild(homePetTopPanel)

const homeAddPetButton = document.createElement('button')
homeAddPetButton.type = 'button'
homeAddPetButton.textContent = '+Pet'
homeAddPetButton.className = 'text-white border-yellow-500 border-2 rounded-xl bg-[dodgerblue] px-1'
homePetTopPanel.appendChild(homeAddPetButton)

homeAddPetButton.addEventListener('click', function (event) {
    event.preventDefault()

    homeView.style.display = 'none'
    addPetView.style.display = ''
})

const homeLogoutButton = document.createElement('button')
homeLogoutButton.textContent = 'Logout'
homeLogoutButton.className = 'text-white border-yellow-500 border-2 rounded-xl bg-[dodgerblue] '
homePetTopPanel.appendChild(homeLogoutButton)

homeLogoutButton.addEventListener('click', function (event) {
    event.preventDefault()

    logic.logoutUser()

    homeView.style.display = 'none'
    loginView.style.display = ''
})



document.body.appendChild(homeView)