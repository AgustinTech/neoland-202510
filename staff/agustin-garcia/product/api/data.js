import { Error } from 'mongoose'
import { UserModel, PetModel, database } from './models.js'

import { SystemError } from './errors.js'

// models

export class User {
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


export class Pet {
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

// manager
export class Data {
    // users
    insertUser(user) {
        const userModel = new UserModel(user)

        return userModel.save()
            .catch(error => { throw new SystemError(error.message) })
            .then(UserModel => { })
    }

    findUserByEmail(email) {
        return UserModel.findOne({ email })
            .catch(error => { throw new SystemError(error.message) })
            .then(userModel => {
                if (!userModel) return null

                const { id, name, email, username, password } = userModel

                return new User(id, name, email, username, password)
            })

    }

    findUserByUsername(username) {
        return UserModel.findOne({ username })
            .catch(error => { throw new SystemError(error.message) })
            .then(userModel => {
                if (!userModel) return null

                const { id, name, email, username, password } = userModel

                return new User(id, name, email, username, password)
            })
    }

    findUserById(userId) {
        return UserModel.findById(userId)
            .catch(error => { throw new SystemError(error.message) })
            .then(userModel => {
                if (!userModel) return null

                const { id, name, email, username, password, image, role } = userModel

                return new User(id, name, email, username, password, image, role)
            })
    }

    updateUser(user) {
        return UserModel.updateOne({ _id: user.id }, user)
            .catch(error => { throw new SystemError(error.message) })
            .then(userModel => { })
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

}
// instance
export const data = new Data()