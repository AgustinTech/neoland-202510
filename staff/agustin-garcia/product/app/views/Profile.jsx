import { useState } from 'react'

import { Links } from './components/commons/Links'
import { ChangePassword } from './components/ChangePassword'
import { ChangeEmail } from './components/ChangeEmail'
import { ChangeUserImage } from './components/ChangeUserImage'
import { ChangeName } from './components/ChangeName'
import { ChangeUsername } from './components/ChangeUsername'

export function Profile({ onGoToHome, onError, onSuccess, onClear }) {
    console.log('Profile -> call')

    const [view, setView] = useState('profile')

    const handleBackHomeClick = event => {
        event.preventDefault()

        onGoToHome()
    }

    const handleImageClick = event => {
        event.preventDefault()
        onClear()
        setView('change-image')
    }


    const handleChangePasswordClick = event => {
        event.preventDefault()
        onClear()
        setView('change-password')
    }


    const handleChangeEmailClick = event => {
        event.preventDefault()
        onClear()
        setView('change-email')
    }

    const handleChangeNameClick = event => {
        event.preventDefault()
        onClear()
        setView('change-name')
    }


    const handleChangeUsernameClick = event => {
        event.preventDefault()
        onClear()
        setView('change-username')
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
            <li><Links onClick={handleChangeNameClick}>Change Name</Links></li>
            <li><Links onClick={handleChangeUsernameClick}>Change Username</Links></li>
            <Links onClick={handleImageClick}>Change Image</Links>
        </ul>

        {view === 'change-password' && <ChangePassword onError={onError} onSuccess={onSuccess} />}

        {view === 'change-email' && <ChangeEmail onError={onError} onSuccess={onSuccess} />}

        {view === 'change-image' && <ChangeUserImage onError={onError} onSuccess={onSuccess} />}

        {view === 'change-name' && <ChangeName onError={onError} onSuccess={onSuccess} />}

        {view === 'change-username' && <ChangeUsername onError={onError} onSuccess={onSuccess} />}



    </div>
}
