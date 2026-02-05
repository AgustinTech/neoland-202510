const { data, User, Pet } = require('./data')

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const URL_REGEX = /http(s)?:\/\/(www.)?[a-zA-Z]+(\.[a-zA-Z]+)+(\/(\w|[-_%.#?=&+])+)+/g
const USER_ID_REGEX = /^\user-[0-9]+$/
const PET_ID_REGEX = /^\pet-[0-9]+$/

class Logic {
    constructor() {
    }

    registerUser(name, email, username, password, passwordRepeat) {

        if (typeof name !== 'string') throw new Error('invalid name type')
        if (name.length < 1) throw new Error('invalid name length')

        if (typeof email !== 'string') throw new Error('invalid email type')
        if (email.length < 6) throw new Error('invalid email length')
        if (!EMAIL_REGEX.test(email)) throw new Error('invalid email format')

        if (typeof username !== 'string') throw new Error('invalid username type')
        if (username.length < 4) throw new Error('invalid username length')

        if (typeof password !== 'string') throw new Error('invalid password type')
        if (password.length < 8) throw new Error('invalid password length')

        if (typeof passwordRepeat !== 'string') throw new Error('invalid passwordRepeat type')
        if (passwordRepeat.length < 8) throw new Error('invalid passwordRepeat length')
        if (password !== passwordRepeat) throw new Error('passwords do not match')

        let user = data.findUserByEmail(email)

        if (user !== null) throw new Error('user email already exists')

        user = data.findUserByUsername(username)

        if (user !== null) throw new Error('user username already exists')

        user = new User('user-' + data.usersCount, name, email, username, password, 'regular')

        data.insertUser(user)
    }


    authenticateUser(username, password) {

        if (typeof username !== 'string') throw new Error('invalid username type')
        if (username.length < 3) throw new Error('invalid username length')

        if (typeof password !== 'string') throw new Error('invalid password type')
        if (password.length < 8) throw new Error('invalid password length')

        const user = data.findUserByUsername(username)

        if (user === null) throw new Error('user does not exists')

        if (user.password !== password) throw new Error('incorrect password')

        return user.id
    }

    changePassword(userId, password, newPassword, newPasswordRepeat) {

        if (typeof userId !== 'string') throw new Error('invalid userId type')
        if (!USER_ID_REGEX.test(userId)) throw new Error('invalid userId format')

        if (typeof password !== 'string') throw new Error('invalid current password type')
        if (typeof newPassword !== 'string') throw new Error('invalid newPassword type')
        if (typeof newPasswordRepeat !== 'string') throw new Error('invalid newPasswordRepeat type')

        if (newPassword.length < 8) throw new Error('invalid newPassword length')
        if (newPassword !== newPasswordRepeat) throw new Error('newPasswordRepeat do not match')

        const user = data.findUserById(userId)
        if (!user) throw new Error('user not found')

        if (user.password !== password)
            throw new Error('current password is incorrect')

        user.password = newPassword
    }


    changeEmail(userId, email, newEmail, newEmailRepeat) {

        if (typeof userId !== 'string') throw new Error('invalid userId type')
        if (!USER_ID_REGEX.test(userId)) throw new Error('invalid userId format')

        if (typeof email !== 'string') throw new Error('invalid current email type')
        if (email.length < 6) throw new Error('invalid email length')
        if (!EMAIL_REGEX.test(email)) throw new Error('invalid email format')

        if (typeof newEmail !== 'string') throw new Error('invalid newEmail type')
        if (newEmail.length < 6) throw new Error('invalid newEmail length')
        if (!EMAIL_REGEX.test(newEmail)) throw new Error('invalid email format')

        if (newEmail !== newEmailRepeat) throw new Error('newEmailRepeat do not match')
        if (typeof newEmailRepeat !== 'string') throw new Error('invalid newEmailRepeat type')
        if (newEmailRepeat.length < 6) throw new Error('invalid newEmailRepeat length')
        if (!EMAIL_REGEX.test(newEmailRepeat)) throw new Error('invalid email format')

        const user = data.findUserById(userId)

        if (!user) throw new Error('user not found')

        if (user.email !== email) throw new Error('old email does not match')

        const otherUser = data.findUserByEmail(newEmail)

        if (otherUser) throw new Error('newEmail belongs to another user')

        user.email = newEmail
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


    addPet(userId, name, birthdate, weight, image) {

        const user = data.findUserById(userId)

        if (typeof userId !== 'string') throw new Error('invalid userId type')
        if (!USER_ID_REGEX.test(userId)) throw new Error('invalid userId format')

        if (user === null) throw new Error('user does not exists')

        if (typeof name !== 'string') throw new Error('invalid name type')
        if (name.length < 1) throw new Error('invalid name length')

        if (typeof birthdate !== 'string') throw new Error('invalid birthdate type')

        const isoDateRegex = /^\d{4}-\d{2}-\d{2}$/
        if (!isoDateRegex.test(birthdate)) throw new Error('invalid birthdate format')

        if (typeof weight !== 'number' || isNaN(weight)) throw new Error('invalid weight type')

        if (typeof image !== 'string') throw new Error('invalid image type')

        if (!URL_REGEX.test(image)) throw new Error('invalid image format')

        const pet = new Pet('pet-' + data.petsCount, userId, name, birthdate, weight, image)

        data.insertPet(pet)
    }


    removePet(userId, petId) {
        if (typeof userId !== 'string') throw new Error('invalid userId type')
        if (!USER_ID_REGEX.test(userId)) throw new Error('invalid userId format')

        if (typeof petId !== 'string') throw new Error("invalid pet-id type")
        if (!PET_ID_REGEX.test(petId)) throw new Error('invalid pet-id format')

        const user = data.findUserById(userId)

        if (!user) throw new Error('user does not exists')

        const pet = data.findPetById(petId)

        if (!pet) throw new Error('pet not found')

        if (pet.userId !== userId) throw new Error('user not owner of pet')

        const petIndex = data.pets.indexOf(pet)

        data.pets.splice(petIndex, 1)
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

    getPets(userId) {

        if (typeof userId !== 'string') throw new Error('invalid userId type')
        if (!USER_ID_REGEX.test(userId)) throw new Error('invalid userId format')

        const user = data.findUserById(userId)

        if (!user) throw new Error('user does not exists')

        const pets = data.findPetByUserId(userId)

        return pets
    }
}
// instance

const logic = new Logic()

module.exports = {
    logic
}