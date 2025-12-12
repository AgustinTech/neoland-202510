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
setClass(homeAddPetButton, 'text-white rounded-xl bg-[black] px-1')
addChild(homeTopPanel, homeAddPetButton)

homeAddPetButton.addEventListener('click', function (event) {
    event.preventDefault()

    hideView(homeView)
    showView(addPetView)
})
const homeLogoutButton = createButton()
setTextContent(homeLogoutButton, 'Logout')
setType(homeLogoutButton, 'button')
setClass(homeLogoutButton, 'text-white rounded-xl bg-[black] px-1')
addChild(homeTopPanel, homeLogoutButton)

homeLogoutButton.addEventListener('click', function (event) {
    event.preventDefault()

    logic.logoutUser()

    clearHomePetList()

    hideView(homeView)
    showView(loginView)
})

const homePetList = createUnorderedList()
setClass(homePetList, 'flex flex-col gap-2 mt-2')
addChild(homeView, homePetList)

addChild(document.body, homeView)

const homeDeletePanel = createPanel()
hideView(homeDeletePanel)
setClass(homeDeletePanel, 'w-full h-full fixed top-0 left-0 bg-black/75 flex justify-center items-center')
addChild(homeView, homeDeletePanel)

const homeDeleteConfirmPanel = createPanel()
setClass(homeDeleteConfirmPanel,'bg-white border-black border-2 p-2')

const homeDeletePanelParagraph = createParagraph()
setClass(homeDeletePanelParagraph, 'text-center')
setTextContent(homeDeletePanelParagraph, 'Delete Pet?')
addChild(homeDeleteConfirmPanel, homeDeletePanelParagraph)

const homeDeleteButtonsPanel = createPanel()
setClass(homeDeleteButtonsPanel, 'flex justify-center gap-2')

const homeDeleteCancelButton = createButton()
setTextContent(homeDeleteCancelButton, '❌')
addChild(homeDeleteButtonsPanel, homeDeleteCancelButton)

homeDeleteCancelButton.addEventListener('click', function (event) {
    event.preventDefault()

    hideView(homeDeletePanel)
})

const homeDeleteConfirmButton = createButton()
setTextContent(homeDeleteConfirmButton, '✅')
addChild(homeDeleteButtonsPanel, homeDeleteConfirmButton)

addChild(homeDeleteConfirmPanel, homeDeleteButtonsPanel)

addChild(homeDeletePanel, homeDeleteConfirmPanel)

function renderHomePetList() {
    const pets = logic.getPets()

    for (let i = 0; i < pets.length; i++) {
        const pet = pets[i]

        const panel = createPanel()
        setClass(panel, 'flex items-center gap-4')

        const petItem = createListItem()
        setClass(petItem, 'flex items-center justify-between gap-4 mb-2 border-2 border-gray-600 p-2 m-6 rounded-md max-w-sm w-full ')

        const image = createImage()
        setSource(image, pet.image)
        setClass(image, 'rounded-full w-20 h-20 object-cover')
        addChild(panel, image)

        const name = createParagraph()
        setClass(name, 'font-bold')
        setTextContent(name, pet.name)
        addChild(panel, name)

        addChild(petItem, panel)

        const deleteButton = createButton()
        setTextContent(deleteButton, '🗑️')
        addClass(deleteButton, 'justify-self-end')
        addChild(petItem, deleteButton)

        deleteButton.addEventListener('click', function (event) {
            event.preventDefault()

            showView(homeDeletePanel)
        })

        addChild(homePetList, petItem)
    }
}

function clearHomePetList() {
    for (let i = homePetList.children.length - 1; i >= 0; i--) {
        const child = homePetList.children[i]

        removeChild(homePetList, child)
    }
}
