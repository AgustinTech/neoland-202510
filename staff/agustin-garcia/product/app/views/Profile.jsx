const { useState } = React

function Profile({ onGoToHome }) {
    console.log('Profile -> call')

    const [view, setView] = useState('profile')

    const handleBackHomeClick = event => {
        event.preventDefault()

        onGoToHome()
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

        <div>
            <Links href="" onClick={handleBackHomeClick}>&lt; Back</Links>
        </div>

        <ul>
            <li><Links onClick={handleChangePasswordClick}>Change Password</Links></li>
            <li><Links onClick={handleChangeEmailClick}>Change Email</Links></li>
        </ul>

        {view === 'change-password' && <ChangePassword />}

        {view === 'change-email' && <ChangeEmail />}

    </div>
}
