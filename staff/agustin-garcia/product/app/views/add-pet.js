const addPetView = createView()
hideView(addPetView)

const addPetTitle = createTitle()
setTextContent(addPetTitle, 'MyPet')
setClass(addPetTitle, 'text-3xl font-bold')
addChild(addPetView, addPetTitle)

const addPetTopPanel = createPanel()
setClass(addPetTopPanel, 'flex justify-between')
addChild(addPetView, addPetTopPanel)

const addPetSubtitle = createSubtitle()
setTextContent(addPetSubtitle, 'Add Pet')
setClass(addPetSubtitle, 'text-2xl font-bold')
addChild(addPetView, addPetSubtitle)

const addPetBackLink = createLink()
setTextContent(addPetBackLink, '< Back')
addPetBackLink.href = ''
setClass(addPetBackLink, 'text-white border-yellow-500 border-2 rounded-xl bg-[dodgerblue]  px-2 underline')
addChild(addPetView, addPetBackLink)

addPetBackLink.addEventListener('click', function (event) {
    event.preventDefault()

    hideView(addPetView)
    showView(homeView)
})

const addPetForm = createForm()
setClass(addPetForm, 'flex flex-col')
const addPetNameLabel = createLabel()
setFor(addPetNameLabel, 'name')
setTextContent(addPetNameLabel, 'Name')
addChild(addPetForm, addPetNameLabel)

const addPetNameInput = createInput()
setType(addPetNameInput, 'text')
setId(addPetNameInput, 'Name')
setClass(addPetNameInput, 'border px-1 rounded-xl')
addChild(addPetForm, addPetNameInput)

const addBirthdateLabel = createLabel()
setFor(addBirthdateLabel, 'date')
setTextContent(addBirthdateLabel, 'Date of Birth')
addChild(addPetForm, addBirthdateLabel)

const addBirthdateInput = createInput()
setId(addBirthdateInput, 'date')
setType(addBirthdateInput, 'date')
setClass(addBirthdateInput, 'border px-1 rounded-xl')
addChild(addPetForm, addBirthdateInput)

const addPetWeightLabel = createLabel()
setFor(addPetWeightLabel, 'weight')
setTextContent(addPetWeightLabel, 'Weight (kg)')
addChild(addPetForm, addPetWeightLabel)

const addPetWeightInput = createInput()
setId(addPetWeightInput, 'weight')
setType(addPetWeightInput, 'number')
setStep(addPetWeightInput, '0.01')
setClass(addPetWeightInput, 'border px-1 rounded-xl')
addChild(addPetForm, addPetWeightInput)

const addpetImageLabel = createLabel()
setId(addpetImageLabel, 'image')
setTextContent(addpetImageLabel, 'Image')
addChild(addPetForm, addpetImageLabel)

const addPetImageInput = createInput()
setId(addPetImageInput, 'image')
setType(addPetImageInput, 'url')
setClass(addPetImageInput, 'border px-1 rounded-xl')
addChild(addPetForm, addPetImageInput)

const addPetSubmitButton = createButton()
setType(addPetSubmitButton, 'submit')
setTextContent(addPetSubmitButton, 'Add Pet')
setClass(addPetSubmitButton, 'text-white border-yellow-500 border-2 rounded-xl bg-[dodgerblue] self-center px-1 self-center mt-4')
addChild(addPetForm, addPetSubmitButton)
addChild(addPetView, addPetForm)

addPetForm.addEventListener('submit', function (event) {
    event.preventDefault()

    const name = getValue(addPetNameInput)
    const birthdate = getValue(addBirthdateInput)
    const weight = parseFloat(getValue(addPetWeightInput))
    const image = getValue(addPetImageInput)

    try {
        logic.addPet(name, birthdate, weight, image)

        reset(addPetForm)
        setTextContent(addPetFeedback, '')

        clearHomePetList()

        renderHomePetList()

        hideView(addPetView)
        showView(homeView)
    } catch (error) {
        setTextContent(addPetFeedback, error.message)
    }

})

const addPetFeedback = createParagraph()
addChild(addPetView, addPetFeedback)

addChild(document.body, addPetView)