import { UserModel, PetModel } from './models.js'

import { SystemError } from 'com'

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

                return new UserData(id, name, email, username, password, image, role)
            })

    }

    findUserByUsername(username) {
        return UserModel.findOne({ username })
            .catch(error => { throw new SystemError(error.message) })
            .then(userModel => {
                if (!userModel) return null

                const { id, name, email, username, password, image, role } = userModel

                return new UserData(id, name, email, username, password, image, role)
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

    updateUser(userData) {
        return UserModel.updateOne({ _id: userData.id }, { $set: userData })
            .catch(error => { throw new SystemError(error.message) })
            .then(userModel => { })
    }

    deleteAllUsers() {
        return UserModel.deleteMany()
            .catch(error => { throw new SystemError(error.message) })
            .then(result => { })
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
        return PetModel.findById(petId)
            .catch(error => { throw new SystemError(error.message) })
            .then(petModel => {
                if (!petModel) return null

                const { id, owner, name, birthdate, weight, image } = petModel

                return new PetData(id, owner.toString(), name, birthdate, weight, image)
            })
    }

    findPetsByUserId(userId) {
        return PetModel.find({ owner: userId })
            .catch(error => { throw new SystemError(error.message) })
            .then(petModels => petModels.map(petModel => {
                const { id, owner, name, birthdate, weight, image } = petModel

                return new PetData(id, owner.toString(), name, birthdate, weight, image)
            }))
    }

    updatePet(petData) {
        return PetModel.updateOne({ _id: petData.id }, { $set: petData })
            .catch(error => { throw new SystemError(error.message) })
            .then(result => { })
    }


    deletePet(petId) {
        return PetModel.deleteOne({ _id: petId })
            .catch(error => { throw new SystemError(error.message) })
            .then(result => { })
    }

    deleteAllPets() {
        return PetModel.deleteMany()
            .catch(error => { throw new SystemError(error.message) })
            .then(result => { })
    }

}
// instance
export const data = new Data()