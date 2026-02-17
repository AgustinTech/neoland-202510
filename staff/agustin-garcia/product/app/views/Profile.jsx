import { useState } from 'react'

import { Links } from './components/commons/Links'
import { ChangePassword } from './components/ChangePassword'
import { ChangeEmail } from './components/ChangeEmail'
import { ChangeUserImage } from './components/ChangeUserImage'

export function Profile({ onGoToHome }) {
    console.log('Profile -> call')

    const [view, setView] = useState('profile')

    const handleBackHomeClick = event => {
        event.preventDefault()

        onGoToHome()
    }

    const handleImageClick = event => {
        event.preventDefault()

        setView('change-image')
    }


    const handleChangePasswordClick = event => {
        event.preventDefault()

        setView('change-password')
    }


    const handleChangeEmailClick = event => {
        event.preventDefault()

        setView('change-email')
    }



    console.log('Profile -> render')
    return <div className="p-4">
        <h1 className="text-3xl font-bold cursor-pointer p-2">MyPet</h1>

        <div className='flex justify-between'>
            <h2 className='font-bold'>Profile</h2>
            <Links href="" onClick={handleBackHomeClick}>&lt; Back</Links>

        </div>

        <ul>
            <li><Links onClick={handleChangePasswordClick}>Change Password</Links></li>
            <li><Links onClick={handleChangeEmailClick}>Change Email</Links></li>
            <Links onClick={handleImageClick}>Change Image</Links>
        </ul>

        {view === 'change-password' && <ChangePassword />}

        {view === 'change-email' && <ChangeEmail />}

        {view === 'change-image' && <ChangeUserImage />}

    </div>
}
