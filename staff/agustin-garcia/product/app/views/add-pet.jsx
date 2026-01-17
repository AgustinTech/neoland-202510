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

            <Links href="" onClick={handleBackHomeClick}>&lt; Back</Links>
        </div>

        <form className="flex flex-col" onSubmit={handleAddPetSubmit}>
            <label htmlFor="name">Name</label>

            <Input type="text" name="name" id="Name"></Input>

            <label htmlFor="date">Date of Birth</label>

            <Input id="birthdate" name="birthdate" type="date"></Input>

            <label htmlFor="weight">Weight (kg)</label>

            <Input id="weight" name="weight" type="number" step="0.01"></Input>

            <label htmlFor="image">Image</label>

            <Input id="image" name="image" type="url" ></Input>

            <Button className="self-center px-2 mt-4" type="submit">AddPet</Button>
        </form>

        <p>{message}</p>
    </div>
}
