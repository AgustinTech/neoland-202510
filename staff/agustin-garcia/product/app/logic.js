import { data } from './data'

const USER_ID_REGEX = /^\user-[0-9]+$/
const PET_ID_REGEX = /^\pet-[0-9]+$/
const URL_REGEX = /(www|http:|https:)+[^\s]+[\w]/
const ISODATE_REGEX = /^\d{4}-\d{2}-\d{2}$/

class Logic {
    constructor() {
    }

    registerUser(name, email, username, password, passwordRepeat) {

        if (typeof name !== 'string') throw new Error('invalid name type')
        if (name.length < 1) throw new Error('invalid name length')

        if (typeof email !== 'string') throw new Error('invalid email type')
        if (email.length < 6) throw new Error('invalid email length')

        if (typeof username !== 'string') throw new Error('invalid username type')
        if (username.length < 4) throw new Error('invalid username length')

        if (typeof password !== 'string') throw new Error('invalid password type')
        if (password.length < 8) throw new Error('invalid password length')

        if (typeof passwordRepeat !== 'string') throw new Error('invalid passwordRepeat type')
        if (passwordRepeat.length < 8) throw new Error('invalid passwordRepeat length')

        if (password !== passwordRepeat) throw new Error('passwords do not match')

        return fetch('http://localhost:8080/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, username, password, passwordRepeat })
        })
            .then(res => {
                const { status } = res

                if (status === 201)
                    return

                return res.json()
                    .then(body => {
                        const { error, message } = body

                        throw new Error(message)
                    })
            })
    }


    authenticateUser(username, password) {

        if (typeof username !== 'string') throw new Error('invalid username type')
        if (username.length < 3) throw new Error('invalid username length')

        if (typeof password !== 'string') throw new Error('invalid password type')

        if (password.length < 8) throw new Error('invalid password length')


        return fetch('http://localhost:8080/users/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
            .then(res => {
                const { status } = res

                if (status === 200)
                    return res.json()
                        .then(userId => {
                            data.setLoggedInUserId(userId)
                        })

                return res.json()
                    .then(body => {
                        const { error, message } = body

                        throw new Error(message)
                    })
            })
    }


    logoutUser() {
        data.removeLoggedInUserId()
    }

    isUserLoggedIn() {
        return !!data.getLoggedInUserId()
    }


    changePassword(password, newPassword, newPasswordRepeat) {
        const userId = data.getLoggedInUserId()

        if (userId === null) throw new Error('user not logged in')

        if (typeof password !== 'string') throw new Error('invalid current password type')

        if (typeof newPassword !== 'string') throw new Error('invalid newPassword type')

        if (newPassword.length < 8) throw new Error('invalid newPassword length')

        if (newPassword !== newPasswordRepeat) throw new Error('newPasswordRepeat do not match')

        return fetch('http://localhost:8080/users/password', {
            method: 'PATCH',
            headers: {
                Authorization: 'Basic ' + userId,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ password, newPassword, newPasswordRepeat })
        })
            .then(res => {
                const { status } = res

                if (status === 204)
                    return

                return res.json()
                    .then(body => {
                        const { error, message } = body

                        throw new Error(message)
                    })
            })
    }

    changeEmail(email, newEmail, newEmailRepeat) {
        const userId = data.getLoggedInUserId()

        if (userId === null) throw new Error('user not logged in')

        if (typeof email !== 'string') throw new Error('invalid current email type')

        if (email.length < 6) throw new Error('invalid email length')

        if (typeof newEmail !== 'string') throw new Error('invalid newEmail type')

        if (newEmail.length < 6) throw new Error('invalid newEmail length')

        if (newEmail !== newEmailRepeat) throw new Error('newEmailRepeat do not match')

        return fetch('http://localhost:8080/users/email', {
            method: 'PATCH',
            headers: {
                Authorization: 'Basic ' + userId,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, newEmail, newEmailRepeat })
        })
            .then(res => {
                const { status } = res

                if (status === 204)
                    return

                return res.json()
                    .then(body => {
                        const { error, message } = body

                        throw new Error(message)
                    })
            })
    }

    getUsername() {
        for (let i = 0; i < data.users.length; i++) {
            const user = data.users[i]

            if (data.getLoggedInUserId() === user.id) {
                return user.name
            }
        }

        throw new Error('user not found')
    }


    addPet(name, birthdate, weight, image) {
        const userId = data.getLoggedInUserId()

        if (userId === null) throw new Error('user not logged in')

        if (typeof name !== 'string') throw new Error('invalid name type')
        if (name.length < 1) throw new Error('invalid name length')

        if (typeof birthdate !== 'string') throw new Error('invalid birthdate type')

        if (!ISODATE_REGEX.test(birthdate)) throw new Error('invalid birthdate format')

        if (typeof weight !== 'number' || isNaN(weight)) throw new Error('invalid weight type')

        if (typeof image !== 'string') throw new Error('invalid image type')

        if (!URL_REGEX.test(image)) throw new Error('invalid image format')

        return fetch('http://localhost:8080/pets', {
            method: 'POST',
            headers: {
                Authorization: 'Basic ' + userId,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, birthdate, weight, image })
        })
            .then(res => {
                const { status } = res

                if (status === 201)
                    return

                return res.json()
                    .then(body => {
                        const { error, message } = body

                        throw new Error(message)
                    })
            })
    }


    deletePet(petId) {
        const userId = data.getLoggedInUserId()

        if (userId === null) throw new Error('user not logged in')

        if (typeof petId !== 'string') throw new Error("invalid pet-id type")


        if (!PET_ID_REGEX.test(petId)) throw new Error('invalid pet-id format')

        return fetch('http://localhost:8080/pets/' + petId, {
            method: 'DELETE',
            headers: {
                Authorization: 'Basic ' + userId
            }
        })
            .then(res => {
                const { status } = res

                if (status === 204)
                    return

                return res.json()
                    .then(body => {
                        const { error, message } = body

                        console.error(error, message)
                    })
            })
    }

    registerOwner(passport, name, surname, address, phone, email) {
        if (typeof passport !== 'string') throw new Error('invalid passport type')
        if (passport.length < 6) throw new Error('invalid passport lenght')

        if (typeof name !== 'string') throw new Error('invalid name type')
        if (name.length < 1) throw new Error('invalid name length')

        if (typeof surname !== 'string') new Error('invalid surname type')
        if (surname.length < 2) new Error('invalid surname length')

        if (typeof address !== 'string') new Error('invalid address type')
        if (address.length < 5) new Error('invalid address length')

        if (typeof phone !== 'string') new Error('invalid phone type')
        if (phone.length < 5) new Error('invalid phone length')

        if (typeof email !== 'string') new Error('invalid email type')
        if (email.length < 6) new Error('invalid email length')

        let owner = data.findOwnerByPassport(passport)

        if (owner == null) throw new Error('owner already exists')

        owner = new Owner('owner-' + data.ownersCount, name, surname, address, phone, email)

        data.insertOwner(owner)
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

        pet = new Pet('pet-' + data.petsCount, userId, chip, name, gender, birthdate, species, race, colors)

        data.insertPet(pet)
    }

    getPets() {
        const userId = data.getLoggedInUserId()
        if (userId === null) throw new Error('user not logged in')

        return fetch('http://localhost:8080/pets', {
            method: 'GET',
            headers: {
                Authorization: 'Basic ' + userId
            }
        })
            .then(res => {
                const { status } = res

                if (status === 200)
                    return res.json()

                return res.json()
                    .then(body => {
                        const { error, message } = body

                        throw new Error(message)
                    })
            })
    }


    getPet(petId) {
        const userId = data.getLoggedInUserId()
        if (userId === null) throw new Error('user not logged in')

        if (typeof petId !== 'string') throw new Error('invalid pet-id type')

        if (!PET_ID_REGEX.test(petId)) throw new Error('ivalid pet-id format')

        return fetch('http://localhost:8080/pets/' + petId, {
            method: 'GET',
            headers: {
                Authorization: 'Basic ' + userId
            }
        })
            .then(res => {
                const { status } = res

                if (status === 200)
                    return res.json()

                return res.json()
                    .then(body => {
                        const { error, message } = body

                        throw new Error(message)
                    })
            })
    }


    getLoggedInUser() {
        const userId = data.getLoggedInUserId()

        if (userId === null) throw new Error('user not logged in')

        return fetch('http://localhost:8080/users/me', {
            method: 'GET',
            headers: {
                Authorization: 'Basic ' + userId
            }
        })
            .then(res => {
                const { status } = res

                if (status === 200)
                    return res.json()

                return res.json()
                    .then(body => {
                        const { error, message } = body

                        throw new Error(message)
                    })
            })
    }

    changeUserImage(image) {
        const userId = data.getLoggedInUserId()
        if (userId === null) throw new Error('user not logged in')

        if (typeof image !== 'string') throw new Error('invalid image type')
        if (!URL_REGEX.test(image)) throw new Error('invalid image format')

        return fetch('http://localhost:8080/users/me/image', {
            method: 'PATCH',
            headers: {
                Authorization: 'Basic ' + userId,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ image })
        })

            .then(res => {
                const { status } = res

                if (status === 204)
                    return

                return res.json()
                    .then(body => {
                        const { error, message } = body

                        throw new Error(message)
                    })
            })

    }



    modifyPet(petId, name, birthdate, weight, image) {

        if (data.getLoggedInUserId() === null) throw new Error('user not logged in')

        if (typeof petId !== 'string') throw new Error('invalid pet-id type')
        if (!PET_ID_REGEX.test(petId)) throw new Error('invalid pet-id format')

        if (typeof name !== 'string') throw new Error('invalid name type')
        if (name.length < 1) throw new Error('invalid name length')

        if (typeof birthdate !== 'string') throw new Error('invalid birthdate type')

        if (!ISODATE_REGEX.test(birthdate)) throw new Error('invalid birthdate format')

        if (typeof weight !== 'number' || isNaN(weight)) throw new Error('invalid weight type')

        if (typeof image !== 'string') throw new Error('invalid image type')

        if (!URL_REGEX.test(image)) throw new Error('invalid image format')

        return fetch('http://localhost:8080/pets/' + petId, {
            method: 'PUT',
            headers: {
                Authorization: 'Basic ' + data.getLoggedInUserId(),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, birthdate, weight, image })
        })
            .then(res => {
                const { status } = res

                if (status === 204)
                    return

                return res.json()
                    .then(body => {
                        const { error, message } = body

                        throw new Error(message)
                    })
            })
    }

}
// instance

export const logic = new Logic()