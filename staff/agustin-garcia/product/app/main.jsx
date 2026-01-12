const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)

const useState = React.useState

function App() {
    const [view, setView] = useState('home')

    const handleLoginClick = event => {
        event.preventDefault()

        setView('login')
    }

    const handleRegisterClick = event => {
        event.preventDefault()

        setView('register')
    }

    const handleHomeClick = event => {
        event.preventDefault()
        setView('home')
    }

    const handleAddPetClick = event => {
        event.preventDefault()
        setView('add-pet')
    }

    const handleLandingClick = event => {
        event.preventDefault()
        setView('landing')
    }

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

            <form className="flex flex-col">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" className="border px-1 rounded-xl" />

                <label htmlFor="password">Password</label>
                <input id="password" type="password" className="border px-1 rounded-xl" />

                <button type="button" className="text-white rounded-xl bg-[black] self-end cursor-pointer">Show
                </button>
                <span className="self-end" style={{ display: 'none' }}>⬆</span>
                <button type="submit" className="text-white rounded-xl bg-[black] self-center px-2 mt-4 cursor-pointer">Login</button>

            </form>

            <a className="text-white rounded-xl bg-[black]  px-2 underline" onClick={handleRegisterClick}>Register</a>

            <p></p>
        </div>

    // register
    if (view === 'register')
        return <div className="p-4">
            <h1 className="text-3xl font-bold cursor-pointer" onClick={handleLandingClick}>MyPet</h1>
            <h2 className="font-bold">Register</h2>
            <form className="flex flex-col">
                <label htmlFor="name">Name </label>
                <input id="name" type="text" placeholder="Nombre" className="border px-1 rounded-xl" />

                <label>Email</label>
                <input id="email" type="email" placeholder="Email" className="border px-1 rounded-xl" />

                <label htmlFor="username">Username</label>
                <input id="username" type="text" placeholder="Username" className="border px-1 rounded-xl" />

                <label htmlFor="password">Password</label>
                <input id="password" type="password" className="border px-1 rounded-xl" />

                <button type="button" className="text-white  rounded-xl bg-[black] self-end cursor-pointer">Show</button>
                <span className="self-end" style={{ display: 'none' }}>⬆</span>
                <label htmlFor="passwordrepeat">Repeat Password</label>
                <input id="passwordrepeat" type="password" className="border px-1 rounded-xl" />

                <button type="button" className="text-white  rounded-xl bg-[black] self-end cursor-pointer">Show</button>
                <span className="self-end" style={{ display: 'none' }}>⬆</span>
                <button type="submit" className="text-white  rounded-xl bg-[black] self-center px-1 cursor-pointer">Register</button>
            </form>
            <a className="text-white  rounded-xl bg-[black] px-2 mt-4 underline" onClick={handleLoginClick}>Login</a>
            <p></p>
        </div>

    // home
    if (view === 'home')
        return <div className="p-4">
            <h1 className="text-3xl font-bold cursor-pointer" onClick={handleLandingClick}>MyPet</h1>

            <h2>Welcome Home</h2>

            <div className="flex justify-between">
                <button type="button" className="text-white rounded-xl bg-[black] px-1 cursor-pointer" onClick={handleAddPetClick}>+ Pet</button>
                <button type="button" className="text-white rounded-xl bg-[black] px-1 cursor-pointer" onClick={handleLandingClick}>Logout</button>
            </div>
            <ul className="flex flex-col gap-2 mt-2">
                <li className="flex items-center justify-between gap-4 mb-2 border-2 border-gray-600 p-2 rounded-md max-w-sm w-full ">

                    <div className="flex items-center gap-4">
                        <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzJrdmNtZnB0enJqbWZ1bjRjbWp2ZmJ1amw3ODB5MGszcnVkMGFuNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mcsPU3SkKrYDdW3aAU/giphy.gif" className="rounded-full w-20 h-20 object-cover" />

                        <p className="font-bold">Leo</p>
                    </div>

                    <button className="justify-self-end cursor-pointer">🗑️</button>
                </li>
                <li className="flex items-center justify-between gap-4 mb-2 border-2 border-gray-600 p-2 rounded-md max-w-sm w-full ">
                    <div className="flex items-center gap-4">
                        <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTFwcDFnOGNwNTdwbXdwdng1Ymx0NXJxazlzb3Uzb25sc2RjcXU3ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DvyLQztQwmyAM/giphy.gif" className="rounded-full w-20 h-20 object-cover" />

                        <p className="font-bold">Rocky</p>
                    </div>
                    <button className="justify-self-end cursor-pointer">🗑️</button>
                </li>
            </ul>
            <div className="w-full h-full fixed top-0 left-0 bg-black/75 flex justify-center items-center" style={{ display: 'none' }}>
                <div className="bg-white border-black border-2 p-2">
                    <p className="text-center">Delete Pet?</p>

                    <div className="flex justify-center gap-2">
                        <button className="cursor-pointer cursor-pointer">❌</button>
                        <button className="cursor-pointer cursor-pointer">✅</button>
                    </div>
                </div>
            </div>

            <p></p>
        </div>

    // add pet
    if (view === 'add-pet')
        return <div className="p-4">
            <h1 className="text-3xl font-bold cursor-pointer" onClick={handleLandingClick}>MyPet</h1>

            <div className="flex justify-between">
                <h2 className="text-2xl font-bold">Add Pet</h2>

                <a href="" className="text-white rounded-xl bg-[black]  px-2 underline" onClick={handleHomeClick}>&lt; Back</a>
            </div>

            <form className="flex flex-col">
                <label htmlFor="name">Name</label>
                <input type="text" id="Name" className="border px-1 rounded-xl" />

                <label htmlFor="date">Date of Birth</label>
                <input id="date" type="date" className="border px-1 rounded-xl" />

                <label htmlFor="weight">Weight (kg)</label>
                <input id="weight" type="number" step="0.01" className="border px-1 rounded-xl" />

                <label id="image">Image</label>
                <input id="image" type="url" className="border px-1 rounded-xl" />

                <button type="submit" className="text-white rounded-xl bg-[black] self-center px-1 self-center mt-4 cursor-pointer">Add Pet</button>
            </form>

            <p></p>
        </div>
}
