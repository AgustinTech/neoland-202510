import { Error } from 'mongoose'
import { UserModel, PetModel, database } from './models.js'

import { SystemError } from './errors.js'

// models

export class UserData {
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


export class PetData {
    constructor(id, ownerId, name, birthdate, weight, image) {
        this.id = id
        this.ownerId = ownerId
        this.name = name
        this.birthdate = birthdate
        this.weight = weight
        this.image = image

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

                return new UserData(id, name, email, username, password)
            })

    }

    findUserByUsername(username) {
        return UserModel.findOne({ username })
            .catch(error => { throw new SystemError(error.message) })
            .then(userModel => {
                if (!userModel) return null

                const { id, name, email, username, password } = userModel

                return new UserData(id, name, email, username, password)
            })
    }

    findUserById(userId) {
        return UserModel.findById(userId)
            .catch(error => { throw new SystemError(error.message) })
            .then(userModel => {
                if (!userModel) return null

                const { id, name, email, username, password, image, role } = userModel

                return new UserData(id, name, email, username, password, image, role)
            })
    }

    updateUser(user) {
        return UserModel.updateOne({ _id: user.id }, user)
            .catch(error => { throw new SystemError(error.message) })
            .then(userModel => { })
    }

    // pets
    insertPet(pet) {
        const { ownerId, name, birthdate, weight, image } = pet

        const petModel = new PetModel({ owner: ownerId, name, birthdate, weight, image })

        return petModel.save()
            .catch(error => { throw new SystemError(error.message) })
            .then(petModel => { })
    }


    findPetById(petId) {
        const pet = this.pets.find(pet => pet.id === petId)

        return pet || null
    }

    findPetsByUserId(userId) {
        return PetModel.find({ owner: userId })
            .then(petModels => petModels.map(petModel => {
                const { id, owner, name, birthdate, weight, image } = petModel

                return new PetData(id, owner.toString(), name, birthdate, weight, image)
            }))
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