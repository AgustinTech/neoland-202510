import { data } from './data'
import { SystemError, ValidationError, errorMap } from './errors'

const USER_ID_REGEX = /^\user-[0-9]+$/
const PET_ID_REGEX = /^\pet-[0-9]+$/
const URL_REGEX = /(www|http:|https:)+[^\s]+[\w]/
const ISODATE_REGEX = /^\d{4}-\d{2}-\d{2}$/

class Logic {
    constructor() {
    }

    registerUser(name, email, username, password, passwordRepeat) {
        if (typeof name !== 'string') throw new ValidationError('invalid name type')
        if (name.length < 1) throw new ValidationError('invalid name length')

        if (typeof email !== 'string') throw new ValidationError('invalid email type')
        if (email.length < 6) throw new ValidationError('invalid email length')

        if (typeof username !== 'string') throw new ValidationError('invalid username type')
        if (username.length < 4) throw new ValidationError('invalid username length')

        if (typeof password !== 'string') throw new ValidationError('invalid password type')
        if (password.length < 8) throw new ValidationError('invalid password length')

        if (typeof passwordRepeat !== 'string') throw new ValidationError('invalid passwordRepeat type')
        if (passwordRepeat.length < 8) throw new ValidationError('invalid passwordRepeat length')

        if (password !== passwordRepeat) throw new ValidationError('passwords do not match')

        return fetch('http://localhost:8080/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, username, password, passwordRepeat })
        })
            .catch(error => { throw new SystemError('connection error') })
            .then(res => {
                const { status } = res

                if (status === 201)
                    return

                return res.json()
                    .catch(error => { throw new SystemError('json error') })
                    .then(body => {
                        const { error, message } = body

                        const constructor = errorMap[error] || SystemError

                        throw new constructor(message)
                    })
            })
    }


    authenticateUser(username, password) {

        if (typeof username !== 'string') throw new ValidationError('invalid username type')
        if (username.length < 3) throw new ValidationError('invalid username length')

        if (typeof password !== 'string') throw new ValidationError('invalid password type')

        if (password.length < 8) throw new ValidationError('invalid password length')


        return fetch('http://localhost:8080/users/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
            .catch(error => { throw new SystemError('connection error') })
            .then(res => {
                const { status } = res

                if (status === 200)
                    return res.json()
                        .then(({ token }) => {
                            data.setLoggedToken(token)
                        })

                return res.json()
                    .catch(error => { throw new SystemError('json error') })
                    .then(body => {
                        const { error, message } = body

                        const constructor = errorMap[error] || SystemError

                        throw new constructor(message)
                    })
            })
    }


    logoutUser() {
        data.removeLoggedInToken()
    }

    isUserLoggedIn() {
        return !!data.getLoggedInToken()
    }

    changeEmail(email, newEmail, newEmailRepeat) {

        if (data.getLoggedInToken() === null) throw new ValidationError('user not logged in')

        if (typeof email !== 'string') throw new ValidationError('invalid current email type')

        if (email.length < 6) throw new ValidationError('invalid email length')

        if (typeof newEmail !== 'string') throw new ValidationError('invalid newEmail type')

        if (newEmail.length < 6) throw new ValidationError('invalid newEmail length')

        if (newEmail !== newEmailRepeat) throw new ValidationError('newEmailRepeat do not match')

        return fetch('http://localhost:8080/users/email', {
            method: 'PATCH',
            headers: {
                Authorization: 'Bearer ' + data.getLoggedInToken(),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, newEmail, newEmailRepeat })
        })
            .catch(error => { throw new SystemError('connection error') })
            .then(res => {
                const { status } = res

                if (status === 204)
                    return

                return res.json()
                    .catch(error => { throw new SystemError('json error') })
                    .then(body => {
                        const { error, message } = body

                        const constructor = errorMap[error] || SystemError

                        throw new constructor(message)
                    })
            })
    }

    changePassword(password, newPassword, newPasswordRepeat) {

        if (data.getLoggedInToken() === null) throw new ValidationError('user not logged in')

        if (typeof password !== 'string') throw new ValidationError('invalid current password type')

        if (typeof newPassword !== 'string') throw new ValidationError('invalid newPassword type')

        if (newPassword.length < 8) throw new ValidationError('invalid newPassword length')

        if (newPassword !== newPasswordRepeat) throw new ValidationError('newPasswordRepeat do not match')

        return fetch('http://localhost:8080/users/password', {
            method: 'PATCH',
            headers: {
                Authorization: 'Bearer ' + data.getLoggedInToken(),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ password, newPassword, newPasswordRepeat })
        })
            .catch(error => { throw new SystemError('connection error') })
            .then(res => {
                const { status } = res

                if (status === 204)
                    return

                return res.json()
                    .catch(error => { throw new SystemError('json error') })
                    .then(body => {
                        const { error, message } = body

                        const constructor = errorMap[error] || SystemError

                        throw new constructor(message)
                    })
            })
    }


    getLoggedInUser() {
        if (data.getLoggedInToken() === null) throw new ValidationError('user not logged in')

        return fetch('http://localhost:8080/users/me', {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + data.getLoggedInToken()
            }
        })
            .then(res => {
                const { status } = res

                if (status === 200)
                    return res.json()

                return res.json()
                    .then(body => {
                        const { error, message } = body

                        throw new constructor(message)
                    })
            })
    }

    changeUserImage(image) {
        if (data.getLoggedInToken() === null) throw new ValidationError('user not logged in')

        if (typeof image !== 'string') throw new ValidationError('invalid image type')
        if (!URL_REGEX.test(image)) throw new ValidationError('invalid image format')

        return fetch('http://localhost:8080/users/me/image', {
            method: 'PATCH',
            headers: {
                Authorization: 'Bearer ' + data.getLoggedInToken(),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ image })
        })
            .catch(error => { throw new SystemError('connection error') })
            .then(res => {
                const { status } = res

                if (status === 204)
                    return

                return res.json()
                    .catch(error => { throw new SystemError('json error') })

                    .then(body => {
                        const { error, message } = body

                        const constructor = errorMap[error] || SystemError

                        throw new constructor(message)
                    })
            })

    }

    addPet(name, birthdate, weight, image) {

        if (data.getLoggedInToken() === null) throw new ValidationError('user not logged in')

        if (typeof name !== 'string') throw new ValidationError('invalid name type')
        if (name.length < 1) throw new ValidationError('invalid name length')

        if (typeof birthdate !== 'string') throw new ValidationError('invalid birthdate type')

        if (!ISODATE_REGEX.test(birthdate)) throw new ValidationError('invalid birthdate format')

        if (typeof weight !== 'number' || isNaN(weight)) throw new ValidationError('invalid weight type')

        if (typeof image !== 'string') throw new ValidationError('invalid image type')

        if (!URL_REGEX.test(image)) throw new ValidationError('invalid image format')

        return fetch('http://localhost:8080/pets', {
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + data.getLoggedInToken(),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, birthdate, weight, image })
        })
            .catch(error => { throw new SystemError('connection error') })
            .then(res => {
                const { status } = res

                if (status === 201)
                    return

                return res.json()
                    .catch(error => { throw new SystemError('json error') })

                    .then(body => {
                        const { error, message } = body

                        const constructor = errorMap[error] || SystemError

                        throw new constructor(message)
                    })
            })
    }


    getPets() {
        if (data.getLoggedInToken() === null) throw new ValidationError('user not logged in')

        return fetch('http://localhost:8080/pets', {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + data.getLoggedInToken()
            }
        })
            .catch(error => { throw new SystemError('connection error') })
            .then(res => {
                const { status } = res

                if (status === 200)
                    return res.json()

                return res.json()
                    .catch(error => { throw new SystemError('json error') })
                    .then(body => {
                        const { error, message } = body

                        const constructor = errorMap[error] || SystemError

                        throw new constructor(message)
                    })
            })
    }

    getPet(petId) {
        if (data.getLoggedInToken() === null) throw new ValidationError('user not logged in')

        if (typeof petId !== 'string') throw new ValidationError('invalid pet-id type')

        if (!PET_ID_REGEX.test(petId)) throw new ValidationError('ivalid pet-id format')

        return fetch('http://localhost:8080/pets/' + petId, {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + data.getLoggedInToken()
            }
        })
            .catch(error => { throw new SystemError('connection error') })
            .then(res => {
                const { status } = res

                if (status === 200)
                    return res.json()

                return res.json()
                    .catch(error => { throw new SystemError('json error') })
                    .then(body => {
                        const { error, message } = body

                        const constructor = errorMap[error] || SystemError

                        throw new constructor(message)
                    })
            })
    }

    deletePet(petId) {

        if (data.getLoggedInToken() === null) throw new ValidationError('user not logged in')

        if (typeof petId !== 'string') throw new ValidationError("invalid pet-id type")


        if (!PET_ID_REGEX.test(petId)) throw new ValidationError('invalid pet-id format')

        return fetch('http://localhost:8080/pets/' + petId, {
            method: 'DELETE',
            headers: {
                Authorization: 'Bearer ' + data.getLoggedInToken()
            }
        })
            .catch(error => { throw new SystemError('connection error') })
            .then(res => {
                const { status } = res

                if (status === 204)
                    return

                return res.json()
                    .catch(error => { throw new SystemError('json error') })
                    .then(body => {
                        const { error, message } = body

                        const constructor = errorMap[error] || SystemError

                        throw new constructor(message)
                    })
            })
    }

    registerPet(id, userId, chip, name, gender, birthdate, species, race, colors) {
        if (typeof id !== 'string') throw new Error('invalid id type')
        if (id.length < 5) throw new Error('invalid id length')

        if (typeof userId !== 'string') throw new Error('invalid userId type')
        if (userId.length < 7) throw new Error('invalid userId length')

        if (typeof chip !== 'string') throw new Error('invalid chip type')
        if (chip.length < 5) throw new Error('invalid chip length')

        if (typeof name !== 'stirng') throw new Error('invalid name type')
        if (name.length < 2) throw new Error('invalid name length')

        if (typeof gender !== 'string') throw new Error('invalid gender type')
        if (gender !== 'female' && gender !== 'male') throw new Error('invalid gender value')

        if (typeof birthdate !== 'number') throw new Error('invalid birthdate type')
        if (birthdate < 1900) throw new Error('invalid birthdate value')

        if (typeof species !== 'string') throw new Error('invalid species type')
        if (species.length < 3) throw new Error('invalid species length')

        if (typeof race !== 'string') throw new Error('invalid race type')
        if (race.length < 3) throw new Error('invalid race length')

        if (typeof colors !== 'string') throw new Error('invalid colors type')
        if (colors.length < 1) throw new Error('invalid colors length')

        const owner = data.findOwnerByPassport(passport)

        if (owner === null) throw new Error('owner of pet not found')

        let pet = data.findPetByPassport(passport)

        if (pet !== null) throw new Error('pet already exists')

        pet = new Pet('pet-' + data.petsCount, data.getLoggedInToken(), chip, name, gender, birthdate, species, race, colors)

        data.insertPet(pet)
    }


    modifyPet(petId, name, birthdate, weight, image) {

        if (data.getLoggedInToken() === null) throw new ValidationError('user not logged in')

        if (typeof petId !== 'string') throw new ValidationError('invalid pet-id type')
        if (!PET_ID_REGEX.test(petId)) throw new ValidationError('invalid pet-id format')

        if (typeof name !== 'string') throw new ValidationError('invalid name type')
        if (name.length < 1) throw new ValidationError('invalid name length')

        if (typeof birthdate !== 'string') throw new ValidationError('invalid birthdate type')

        if (!ISODATE_REGEX.test(birthdate)) throw new ValidationError('invalid birthdate format')

        if (typeof weight !== 'number' || isNaN(weight)) throw new ValidationError('invalid weight type')

        if (typeof image !== 'string') throw new ValidationError('invalid image type')

        if (!URL_REGEX.test(image)) throw new ValidationError('invalid image format')

        return fetch('http://localhost:8080/pets/' + petId, {
            method: 'PUT',
            headers: {
                Authorization: 'Bearer ' + data.getLoggedInToken(),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, birthdate, weight, image })
        })
            .catch(error => { throw new SystemError('connection error') })
            .then(res => {
                const { status } = res

                if (status === 204)
                    return

                return res.json()
                    .catch(error => { throw new SystemError('json error') })
                    .then(body => {
                        const { error, message } = body

                        const constructor = errorMap[error] || SystemError

                        throw new constructor(message)
                    })
            })
    }

}
// instance

export const logic = new Logic()