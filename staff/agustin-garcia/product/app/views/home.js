const homeView = createView()
hideView(homeView)

const homeTitle = createTitle()
setTextContent(homeTitle, 'MyPet')
setClass(homeTitle, 'text-3xl font-bold')
addChild(homeView, homeTitle)

const homeSubtitle = createSubtitle()
setTextContent(homeSubtitle, 'Welcome Home')
addChild(homeView, homeSubtitle)

const homeTopPanel = createPanel()
setClass(homeTopPanel, 'flex justify-between')
addChild(homeView, homeTopPanel)

const homeAddPetButton = createButton()
setType(homeAddPetButton, 'button')
setTextContent(homeAddPetButton, '+ Pet')
setClass(homeAddPetButton, 'text-white border-yellow-500 border-2 rounded-xl bg-[dodgerblue] px-1')
addChild(homeTopPanel, homeAddPetButton)

homeAddPetButton.addEventListener('click', function (event) {
    event.preventDefault()

    hideView(homeView)
    showView(addPetView)
})

const homeLogoutButton = createButton()
setTextContent(homeLogoutButton, 'Logout')
setType(homeLogoutButton, 'button')
setClass(homeLogoutButton, 'text-white border-yellow-500 border-2 rounded-xl bg-[dodgerblue] ')
addChild(homeTopPanel, homeLogoutButton)

homeLogoutButton.addEventListener('click', function (event) {
    event.preventDefault()

    logic.logoutUser()

    clearHomePetList()

    hideView(homeView)
    showView(loginView)
})

const homePetList = createUnorderedList()
addChild(homeView, homePetList)

addChild(document.body, homeView)

function renderHomePetList() {
    const pets = logic.getPets()

    for (let i = 0; i < pets.length; i++) {
        const pet = pets[i]

        const petItem = createListItem()
        setClass(petItem, 'flex')

        const image = createImage()
        setSource(image, pet.image)
        setClass(image, 'rounded-[50%] w-20')
        addChild(petItem, image)

        const name = createParagraph()
        setTextContent(name, pet.name)
        addChild(petItem, name)

        addChild(homePetList, petItem)
    }
}

function clearHomePetList() {
    for (let i = homePetList.children.length - 1; i >= 0; i--) {
        const child = homePetList.children[i]

        removeChild(homePetList, child)
    }
}