export * from './User.js'
export * from './Pet.js'

import { registerUser } from './registerUser.js'
import { authenticateUser } from './authenticateUser.js'
import { getUser } from './getUser.js'
import { changeEmail } from './changeEmail.js'
import { changeImage } from './changeImage.js'
import { changeName } from './changeName.js'
import { changePassword } from './changePassword.js'
import { changeUsername } from './changeUsername.js'

import { addPet } from './addPet.js'
import { getPet } from './getPet.js'
import { getPets } from './getPets.js'
import { modifyPet } from './modifyPet.js'
import { removePet } from './removePet.js'

export const logic = {
    registerUser,
    authenticateUser,
    getUser,
    changeEmail,
    changeImage,
    changeName,
    changePassword,
    changeUsername,
    addPet,
    getPet,
    getPets,
    modifyPet,
    removePet
}