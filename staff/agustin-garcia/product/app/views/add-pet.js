const addPetView = document.createElement('div')
addPetView.style.display = 'none'

const addPetTitle = document.createElement('h1')
addPetTitle.textContent = 'MyPet'
addPetTitle.className = 'text-3xl font-bold'
addPetView.appendChild(addPetTitle)

const addPetTopPanel = document.createElement('div')
addPetTopPanel.className = 'flex justify-between'
addPetView.appendChild(addPetTopPanel)

const addPetSubtitle = document.createElement('h2')
addPetSubtitle.textContent = 'Add Pet'
addPetSubtitle.className = 'text-2xl font-bold'
addPetView.appendChild(addPetSubtitle)

const addPetBackLink = document.createElement('a')
addPetBackLink.textContent = '< Back'
addPetBackLink.href = ''
addPetBackLink.className = 'text-white border-yellow-500 border-2 rounded-xl bg-[dodgerblue]  px-2 underline'
addPetView.appendChild(addPetBackLink)

addPetBackLink.addEventListener('click', function (event) {
    event.preventDefault()

    addPetView.style.display = 'none'
    homeView.style.display = ''
})

const addPetForm = document.createElement('form')
addPetForm.className = 'flex flex-col'
const addPetNameLabel = document.createElement('label')
addPetNameLabel.htmlFor = 'name'
addPetNameLabel.textContent = 'Name'
addPetForm.appendChild(addPetNameLabel)
const addPetNameInput = document.createElement('input')
addPetNameInput.type = 'text'
addPetNameInput.id = 'Name'
addPetNameInput.className = 'border px-1 rounded-xl'
addPetForm.appendChild(addPetNameInput)
const addBirthdateLabel = document.createElement('label')
addBirthdateLabel.htmlFor = 'date'
addBirthdateLabel.textContent = 'Date of Birth'
addPetForm.appendChild(addBirthdateLabel)
const addBirthdateInput = document.createElement('input')
addBirthdateInput.id = 'date'
addBirthdateInput.type = 'date'
addBirthdateInput.className = 'border px-1 rounded-xl'
addPetForm.appendChild(addBirthdateInput)
const addPetWeightLabel = document.createElement('label')
addPetWeightLabel.htmlFor = 'weight'
addPetWeightLabel.textContent = 'Weight (kg)'
addPetForm.appendChild(addPetWeightLabel)
const addPetWeightInput = document.createElement('input')
addPetWeightInput.id = 'weight'
addPetWeightInput.type = 'number'
addPetWeightInput.className = 'border px-1 rounded-xl'
addPetForm.appendChild(addPetWeightInput)
const addpetImageLabel = document.createElement('label')
addpetImageLabel.id = 'image'
addpetImageLabel.textContent = 'Image'
addPetForm.appendChild(addpetImageLabel)
const addPetImageInput = document.createElement('input')
addPetImageInput.id = 'image'
addPetImageInput.type = 'url'
addPetImageInput.className = 'border px-1 rounded-xl'
addPetForm.appendChild(addPetImageInput)
const addPetSubmitButton = document.createElement('button')
addPetSubmitButton.type = 'submit'
addPetSubmitButton.textContent = 'Add Pet'
addPetSubmitButton.className = 'text-white border-yellow-500 border-2 rounded-xl bg-[dodgerblue] self-center px-1 self-center mt-4'
addPetForm.appendChild(addPetSubmitButton)
addPetView.appendChild(addPetForm)

addPetForm.addEventListener('submit', function (event) {
    event.preventDefault()

    const name = addPetNameInput.value
    const birthdate = addBirthdateInput.value
    const weight = parseFloat(addPetWeightInput.value)
    const image = addPetImageInput.value

    try {
        logic.addPetUser(name, birthdate, weight, image)

        addPetForm.reset()
        addPetFeedback.textContent = ''

        addPetView.style.display = 'none'
        homeView.style.display = ''
    } catch (error) {
        addPetFeedback.textContent = error.message
    }

})

const addPetFeedback = document.createElement('p')
addPetView.appendChild(addPetFeedback)

document.body.appendChild(addPetView)