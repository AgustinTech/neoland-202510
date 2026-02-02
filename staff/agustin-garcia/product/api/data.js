// models

class User {
    constructor(id, name, email, username, password, role) {
        this.id = id
        this.name = name
        this.email = email
        this.username = username
        this.password = password
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
        for (let i = 0; i < this.users.length; i++) {
            const user = this.users[i]

            if (user.email === email) return user
        }

        return null
    }
    findUserByUsername(username) {
        for (let i = 0; i < this.users.length; i++) {
            const user = this.users[i]

            if (user.username === username) return user
        }

        return null
    }

    findUserById(id) {
        for (let i = 0; i < this.users.length; i++) {
            const user = this.users[i]

            if (user.id === id) return user
        }

        return null
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


    findPetUserById(petId) {
        for (let i = 0; i < this.pets.length; i++) {
            const pet = this.pets[i]

            if (pet.id === id) return pet
        }

        return null
    }


    findPetById(petId) {
        for (let i = 0; i < this.pets.length; i++) {
            const pet = this.pets[i]

            if (pet.id === petId)
                return pet
        }

        return null
    }


    findPetByUserId(userId) {
        const foundPets = []
        for (let i = 0; i < this.pets.length; i++) {
            const pet = this.pets[i]

            if (pet.userId === userId)
                foundPets.push(pet)
        }

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