const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)

const { useState, useRef } = React

function App() {
    console.log('App -> call')

    const [view, setView] = useState('landing')
    const [message, setMessage] = useState('')
    const [passwordType, setPasswordType] = useState('password')
    const [passwordRepeatType, setPasswordRepeatType] = useState('password')
    const [pets, setPets] = useState([])
    const [showPanel, setShowPanel] = useState(false)
    const [petId, setPetIdToDelete] = useState(null)

    const loginFormRef = useRef()
    const registerFormRef = useRef()

    const handleLoginClick = event => {
        event.preventDefault()
        setView('login')
        if (loginFormRef.current)
            loginFormRef.current.reset()
        setPasswordType('password')
        setPasswordRepeatType('password')
        setMessage('')
    }

    const handleRegisterClick = event => {
        event.preventDefault()
        setView('register')
        if (registerFormRef.current)
            registerFormRef.current.reset()
        setPasswordType('password')
        setPasswordRepeatType('password')
        setMessage('')
    }

    const handleBackHomeClick = event => {
        event.preventDefault()
        setView('home')
        setMessage('')
    }

    const handleAddPetClick = event => {
        event.preventDefault()
        setView('add-pet')
        setMessage('')
    }

    const handleLandingClick = event => {
        event.preventDefault()
        setView('landing')
    }

    const handleLogoutClick = event => {
        event.preventDefault()
        logic.logoutUser()

        setView('login')
        try {

        } catch (error) {
            setMessage('sorry, there was an error on logout, please, try it later')
        }
    }

    const handleLoginSubmit = event => {
        event.preventDefault()

        const form = event.target

        const username = form.username.value
        const password = form.password.value


        try {
            logic.loginUser(username, password)


            form.reset()

            const pets = logic.getPets()

            const newPets = []

            for (const pet of pets) {
                newPets.push(pet)
            }


            setView('home')
            setMessage('')
            setPasswordType('password')
            setPasswordRepeatType('password')
            setPets(newPets)
        } catch (error) {
            setMessage(error.message)
        }
    }


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

            setView('login')
            setMessage('')
        } catch (error) {
            setMessage(error.message)
        }

    }


    const handleAddPetSubmit = event => {
        event.preventDefault()

        const form = event.target

        const name = form.name.value
        const birthdate = form.birthdate.value
        const weight = Number(form.weight.value)
        const image = form.image.value

        try {
            logic.addPet(name, birthdate, weight, image)
            event.preventDefault()

            form.reset()

            const pets = logic.getPets()

            setView('home')
            setPets(pets)
            setMessage('')
        } catch (error) {
            setMessage(error.message)
        }

    }

    const handleDeletePetClick = event => {
        event.preventDefault()

        const pet = event.target
        const petId = pet.id

        setPetIdToDelete(petId)
        setShowPanel(true)
    }

    const handleCancelDelete = event => {
        event.preventDefault()
        setShowPanel(false)
        setPetIdToDelete(null)
    }

    const handleConfirmDelete = event => {
        event.preventDefault()

        try {
            logic.deletePet(petId)

            const pets = logic.getPets()
            setPets(pets)

            setShowPanel(false)
            setPetIdToDelete(null)
            setMessage('')
        } catch (error) {
            setMessage(error.message)
            setShowPanel(false)
            setPetIdToDelete(null)
        }
    }


    const handleTogglePasswordClick = event => {
        event.preventDefault()

        setPasswordType(passwordType === 'password' ? 'text' : 'password')
    }

    const handleTogglePasswordRepeatClick = event => {
        event.preventDefault()

        setPasswordRepeatType(passwordRepeatType === 'password' ? 'text' : 'password')
    }


    console.log('App -> render')


    // landing
    if (view === 'landing')
        return <div className="p-4">
            <h1 className="text-3xl font-bold cursor-pointer" onClick={handleLandingClick}>MyPet</h1>
            <p className="text-3xl">Welcome!</p>

            <nav>
                <a className="text-white rounded-xl bg-[black] px-2 underline" onClick={handleLoginClick}>Login</a> or <a className="text-white rounded-xl bg-[black] px-2 underline" onClick={handleRegisterClick}>Register</a>
            </nav>
        </div>

    // login
    if (view === 'login')
        return <div className="p-4">
            <h1 className="text-3xl font-bold cursor-pointer" onClick={handleLandingClick}>MyPet</h1>

            <h2 className="font-bold">Login </h2>

            <form className="flex flex-col" onSubmit={handleLoginSubmit} ref={loginFormRef}>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" autoComplete="username" className="border px-1 rounded-xl" />

                <label htmlFor="password">Password</label>
                <input id="password" name="password" autoComplete="current-password" type={passwordType} className={passwordType === 'password' ? 'border px-1 rounded-xl' : 'border px-1 rounded-xl bg-[gold]'} />

                <button type="button" className="text-white rounded-xl bg-[black] self-end cursor-pointer" onClick={handleTogglePasswordClick}>{passwordType === 'password' ? 'Show' : 'Hide'}</button>
                <span className="self-end" style={{ display: 'none' }}>⬆</span>
                <button type="submit" className="text-white rounded-xl bg-[black] self-center px-2 mt-4 cursor-pointer">Login</button>

            </form>

            <a className="text-white rounded-xl bg-[black]  px-2 underline" onClick={handleRegisterClick}>Register</a>

            <p>{message}</p>
        </div>

    // register
    if (view === 'register')
        return <div className="p-4">
            <h1 className="text-3xl font-bold cursor-pointer" onClick={handleLandingClick}>MyPet</h1>

            <h2 className="font-bold">Register</h2>

            <form className="flex flex-col" onSubmit={handleRegisterSubmit} ref={registerFormRef}>
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

    // home
    if (view === 'home') {

        const petItems = []

        for (const pet of pets) {
            const petItem = <li key={pet.id} className="flex items-center justify-between gap-4 mb-2 border-2 border-gray-600 p-2 rounded-md max-w-sm w-full ">

                <div className="flex items-center gap-4">
                    <img src={pet.image} className="rounded-full w-20 h-20 object-cover" />

                    <p className="font-bold">{pet.name}</p>
                </div>

                <button className="justify-self-end cursor-pointer" id={pet.id} onClick={handleDeletePetClick}>🗑️</button>
            </li>

            petItems.push(petItem)
        }


        return <div className="p-4">
            <h1 className="text-3xl font-bold cursor-pointer" onClick={handleLandingClick}>MyPet</h1>

            <h2>Welcome Home</h2>

            <div className="flex justify-between">
                <button type="button" className="text-white rounded-xl bg-[black] px-1 cursor-pointer" onClick={handleAddPetClick}>+ Pet</button>
                <button type="button" className="text-white rounded-xl bg-[black] px-1 cursor-pointer" onClick={handleLogoutClick}>Logout</button>
            </div>
            <ul className="flex flex-col gap-2 mt-2">
                {petItems}
            </ul>

            <div className="w-full h-full fixed top-0 left-0 bg-black/75 flex justify-center items-center" style={{ display: showPanel ? 'flex' : 'none' }}>
                <div className="bg-white border-black border-2 p-2 rounded-lg">
                    <p className="text-center mb-4 font-bold">Delete Pet?</p>

                    <div className="flex justify-center gap-4">
                        <button className="cursor-pointer text-2xl" onClick={handleCancelDelete}>❌</button>
                        <button className="cursor-pointer text-2xl" onClick={handleConfirmDelete}>✅</button>
                    </div>
                </div>
            </div>

            <p>{message}</p>
        </div>
    }
    // add pet
    if (view === 'add-pet')
        return <div className="p-4">
            <h1 className="text-3xl font-bold cursor-pointer" onClick={handleLandingClick}>MyPet</h1>

            <div className="flex justify-between">
                <h2 className="text-2xl font-bold">Add Pet</h2>

                <a href="" className="text-white rounded-xl bg-[black]  px-2 underline" onClick={handleBackHomeClick}>&lt; Back</a>
            </div>

            <form className="flex flex-col" onSubmit={handleAddPetSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="Name" className="border px-1 rounded-xl" />

                <label htmlFor="date">Date of Birth</label>
                <input id="birthdate" name="birthdate" type="date" className="border px-1 rounded-xl" />

                <label htmlFor="weight">Weight (kg)</label>
                <input id="weight" name="weight" type="number" step="0.01" className="border px-1 rounded-xl" />

                <label htmlFor="image">Image</label>
                <input id="image" name="image" type="url" className="border px-1 rounded-xl" />

                <button type="submit" className="text-white rounded-xl bg-[black] self-center px-1 self-center mt-4 cursor-pointer">Add Pet</button>
            </form>

            <p>{message}</p>
        </div>
}