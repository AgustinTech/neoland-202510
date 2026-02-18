// models

class User {
    constructor(id, name, email, username, password, image, role) {
        this.id = id
        this.name = name
        this.email = email
        this.username = username
        this.password = password
        this.image = image
        this.role = role
    }
}

class Owner {

    constructor(passport, name, surname, address, phone, email) {
        this.id = id
        this.passport = passport
        this.name = name
        this.surname = surname
        this.address = address
        this.phone = phone
        this.email = email
        this.active = true
    }
}

class Pet {
    constructor(id, userId, /* chip, */ name, /* gender, */ birthdate, weight, image, /* species, */ /*  race, */ /* colors */) {
        this.id = id
        this.userId = userId
        // this.chip = chip
        this.name = name
        // this.gender = gender
        this.birthdate = birthdate
        this.weight = weight
        this.image = image
        // this.species = species
        // this.race = race
        // this.colors = colors
    }
}
class Vaccine {
    constructor(id, name, description) {
        this.id = id
        this.name = name
        this.description = description
    }
}


// manager
class Data {
    constructor() {
        this.users = []
        this.usersCount = 0
        this.owners = []
        this.ownersCount = 0
        this.pets = []
        this.petsCount = 0
        this.vaccines = []
        this.loggedInUserId = null
    }


    // users
    insertUser(user) {
        this.users.push(user)
        this.usersCount++
    }

    findUserByEmail(email) {
        const user = this.users.find(user => user.email === email)

        return user || null
    }

    findUserByUsername(username) {
        const user = this.users.find(user => user.username === username)

        return user || null
    }

    findUserById(userId) {
        const user = this.users.find(user => user.id === userId)

        return user || null
    }

    updateUser(updatedUser) {
        const index = this.users.findIndex(user => user.id === updatedUser.id)

        this.users[index] = updatedUser
    }

    // owner 

    insertOwner(owner) {
        this.owners.push(owner)
        this.ownersCount++
    }

    findOwnerById(ownerId) {
        for (let i = 0; i < this.owners.length; i++) {
            const owner = this.owners[i]

            if (owner.id === ownerId)
                return owner
        }

        return null
    }

    findOwnerByPassport(ownerPassport) {
        for (let i = 0; i < this.owners.length; i++) {
            const owner = this.owners[i]

            if (owner.passport === ownerPassport)
                return owner
        }

        return null
    }
    // pets
    insertPet(pet) {
        this.pets.push(pet)
        this.petsCount++
    }

    findPetsByOwnerPassport(passport) {
        const foundPets = []

        for (let i = 0; i < this.pets.length; i++) {
            const pet = this.pets[i]

            if (pet.ownerId === passport)
                foundPets.push(pet)
        }

        return foundPets
    }


    findPetById(petId) {
        const pet = this.pets.find(pet => pet.id === petId)

        return pet || null
    }


    findPetsByUserId(userId) {
        const foundPets = this.pets.filter(pet => pet.userId === userId)

        return foundPets
    }

    findPetByPassport(passport) {
        for (let i = 0; i < this.pets.length; i++) {
            const pet = this.pets[i]

            if (pet.passport === passport)
                return pet
        }

        return null
    }

    updatePet(updatedPet) {
        const index = this.pets.findIndex(pet => pet.id === updatedPet.id)

        this.pets[index] = updatedPet
    }

    deletePet(petId) {
        const index = this.pets.findIndex(pet => pet.id === petId)

        data.pets.splice(index, 1)
    }

    // vaccine 
    insertVaccine(vaccine) {
        this.vaccines.push(vaccine)
    }

}
// instance
const data = new Data()

module.exports = {
    User,
    Pet,
    data
}