import { addPet } from './addPet'
import { changeEmail } from './changeEmail'
import { changeUserImage } from './changeImage'
import { changeName } from './changeName'
import { changePassword } from './changePassword'
import { changeUsername } from './changeUsername'
import { getLoggedInUser } from './getLoggedInUser'
import { getPet } from './getPet'
import { getPets } from './getPets'
import { isUserLoggedIn } from './isUserLoggedIn'
import { loginUser } from './loginUser'
import { logoutUser } from './logoutUser'
import { modifyPet } from './modifyPet'
import { registerUser } from './registerUser'
import { deletePet } from './removePet'

export const logic = {
    addPet,
    changeEmail,
    changeUserImage,
    changeName,
    changePassword,
    changeUsername,
    getLoggedInUser,
    getPet,
    getPets,
    isUserLoggedIn,
    loginUser,
    logoutUser,
    modifyPet,
    registerUser,
    deletePet
}