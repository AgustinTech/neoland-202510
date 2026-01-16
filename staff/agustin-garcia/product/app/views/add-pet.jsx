const { useState } = React

function AddPet({ onGoToHome }) {
    console.log('AddPet -> call')

    const [message, setMessage] = useState('')

    const handleBackHomeClick = event => {
        event.preventDefault()

        onGoToHome()
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

            form.reset()

            onGoToHome()
        } catch (error) {
            setMessage(error.message)
        }

    }


    console.log('AddPet -> render')
    return <div className="p-4">
        <h1 className="text-3xl font-bold cursor-pointer">MyPet</h1>

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
