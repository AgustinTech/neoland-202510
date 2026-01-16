const { useState } = React

function Register({ onGoToLogin }) {
    console.log('Register -> call')

    const [message, setMessage] = useState('')
    const [passwordType, setPasswordType] = useState('password')
    const [passwordRepeatType, setPasswordRepeatType] = useState('password')


    const handleRegisterSubmit = event => {
        event.preventDefault()

        const form = event.target

        const name = form.name.value
        const email = form.email.value
        const username = form.username.value
        const password = form.password.value
        const passwordRepeat = form.passwordRepeat.value

        try {
            logic.registerUser(name, email, username, password, passwordRepeat)

            form.reset()

            setMessage('')
            setPasswordType('password')
            setPasswordRepeatType('password')

            onRegister()
        } catch (error) {
            setMessage(error.message)
        }

    }

    const handleLoginClick = event => {
        event.preventDefault()

        onGoToLogin()
    }


    const handleTogglePasswordClick = event => {
        event.preventDefault()

        setPasswordType(passwordType === 'password' ? 'text' : 'password')
    }

    const handleTogglePasswordRepeatClick = event => {
        event.preventDefault()

        setPasswordRepeatType(passwordRepeatType === 'password' ? 'text' : 'password')
    }

    console.log('Register -> render')

    return <div className="p-4">
        <h1 className="text-3xl font-bold cursor-pointer">MyPet</h1>

        <h2 className="font-bold">Register</h2>

        <form className="flex flex-col" onSubmit={handleRegisterSubmit}>
            <label htmlFor="name">Name </label>
            <input id="name" name="name" type="text" autoComplete="name" placeholder="Nombre" className="border px-1 rounded-xl" />

            <label>Email</label>
            <input id="email" name="email" type="email" autoComplete="email" placeholder="Email" className="border px-1 rounded-xl" />

            <label htmlFor="username">Username</label>
            <input id="username" name="username" type="text" autoComplete="username" placeholder="Username" className="border px-1 rounded-xl" />

            <label htmlFor="password">Password</label>
            <input id="password" name="password" type={passwordType} autoComplete="current-password" className={passwordType === 'password' ? 'border px-1 rounded-xl' : 'border px-1 rounded-xl bg-[gold]'} />

            <button type="button" className="text-white  rounded-xl bg-[black] self-end cursor-pointer" onClick={handleTogglePasswordClick}>{passwordType === 'password' ? 'Show' : 'Hide'}</button>
            <span className="self-end" style={{ display: 'none' }}>⬆</span>
            <label htmlFor="passwordRepeat">Repeat Password</label>
            <input id="passwordRepeat" name="passwordRepeat" type={passwordRepeatType} autoComplete="current-password" className={passwordRepeatType === 'password' ? 'border px-1 rounded-xl' : 'border px-1 rounded-xl bg-[gold]'} />

            <button type="button" className="text-white  rounded-xl bg-[black] self-end cursor-pointer" onClick={handleTogglePasswordRepeatClick}>{passwordRepeatType === 'password' ? 'Show' : 'Hide'}</button>
            <span className="self-end" style={{ display: 'none' }}>⬆</span>
            <button type="submit" className="text-white  rounded-xl bg-[black] self-center px-1 cursor-pointer">Register</button>
        </form>

        <a className="text-white  rounded-xl bg-[black] px-2 mt-4 underline" onClick={handleLoginClick}>Login</a>

        <p>{message}</p>
    </div>

}