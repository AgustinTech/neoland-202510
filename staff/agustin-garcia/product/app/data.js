// models

function User(id, name, email, username, password, role) {
    this.id = id
    this.name = name
    this.email = email
    this.username = username
    this.password = password
    this.role = role
}


function Owner(passport, name, surname, address, phone, email) {
    this.id = id
    this.passport = passport
    this.name = name
    this.surname = surname
    this.address = address
    this.phone = phone
    this.email = email
    this.active = true
}


function Pet(id, userId, chip, name, gender, birthdate, species, race, colors) {
    this.id = id
    this.userId = userId
    this.chip = chip
    this.name = name
    this.gender = gender
    this.birthdate = birthdate
    this.species = species
    this.race = race
    this.colors = colors
}

function Vaccine(id, name, description) {
    this.id = id
    this.name = name
    this.description = description
}


// manager

function Data() {
    this.users = []
    this.userCount = 0
    this.owners = []
    this.ownersCount = 0
    this.pets = []
    this.petsCount = 0
    this.vaccines = []
    this.loggerInUserId = null
}

// users
Data.prototype.insertUser = function (user) {
    this.users.push(user)
    this.userCount++
}

Data.prototype.findUserByEmail = function (email) {
    for (let i = 0; i < this.users.length; i++) {
        const user = this.users[i]

        if (user.email === email)
            return email
    }

    return null
}
Data.prototype.findUserByUsername = function (username) {
    for (let i = 0; i < this.users.length; i++) {
        const user = this.users[i]

        if (user.username === username)
            return user
    }

    return null
}


// owner 

Data.prototype.insertOwner = function (owner) {
    this.owners.push(owner)
    this.ownersCount++
}

Data.prototype.findOwnerById = function (ownerId) {
    for (let i = 0; i < this.owners.length; i++) {
        const owner = this.owners[i]

        if (owner.id === ownerId)
            return owner
    }

    return null
}

Data.prototype.findOwnerByPassport = function (ownerPassport) {
    for (let i = 0; i < this.owners.length; i++) {
        const owner = this.owners[i]

        if (owner.passport === ownerPassport)
            return owner
    }

    return null
}
// pets
Data.prototype.insertPet = function (pet) {
    this.pets.push(pet)
    this.petsCount++
}

Data.prototype.setLoggedInUserId = function(userId){
    this.loggerInUserId = userId
}

Data.prototype.getLoggedInUserId = function(){
    return this.loggerInUserId
}

Data.prototype.findPetsByOwnerPassport = function (passport) {
    const foundPets = []

    for (let i = 0; i < this.pets.length; i++) {
        const pet = this.pets[i]

        if (pet.ownerId === passport)
            foundPets.push(pet)
    }

    return foundPets
}


Data.prototype.findPetById = function (petId) {
    for (let i = 0; i < this.pets.length; i++) {
        const pet = this.pets[i]

        if (pet.id === petId)
            return pet
    }

    return null
}

Data.prototype.findPetByPassport = function (passport) {
    for (let i = 0; i < this.pets.length; i++) {
        const pet = this.pets[i]

        if (pet.passport === passport)
            return pet
    }

    return null
}

// vaccine 
Data.prototype.insertVaccine = function (vaccine) {
    this.vaccines.push(vaccine)
}



function Logic() {

}
// instance
const data = new Data()
