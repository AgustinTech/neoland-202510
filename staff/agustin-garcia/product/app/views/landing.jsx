function Landing({ onGoToLogin, onGoToRegister }) {
    console.log('Landing -> call')

    const handleLoginClick = event => {
        event.preventDefault()

        onGoToLogin()
    }

    const handleRegisterClick = event => {
        event.preventDefault()

        onGoToRegister()
    }

    console.log('Landing - render')

    return <div className="p-4">
        <h1 className="text-3xl font-bold cursor-pointer">MyPet</h1>
        <p className="text-3xl">Welcome!</p>

        <nav>
            <a className="text-white rounded-xl bg-[black] px-2 underline" onClick={handleLoginClick}>Login</a> or <a className="text-white rounded-xl bg-[black] px-2 underline" onClick={handleRegisterClick}>Register</a>
        </nav>
    </div>
}