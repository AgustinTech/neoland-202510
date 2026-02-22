const images = [
    'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3ZGttMHhzOGVsMWN3emg0aTZieGlkcjQ0aGszMDEweWtqd3BqczkycyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/57U61MMGMP876/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3M2Z0czJxZnJ1anhlejUyMmRjM2IwN3Y2amdlcWlsNnZscmh4MGc1aiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/pnq71zkPO1k65fgT2j/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHZpNDBra2pwazRib2JkdjVuZnpmdzlzYm1tenp0YmltdTAycXBiNCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/4E4KqxulO9JtRF8s6T/giphy.gif'
]

export const Spinner = () => {
    const randomIndex = Math.floor(Math.random() * images.length)
    const randomImage = images[randomIndex]

    return <div className="fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center">
        <img className="w-20 h-20 object-cover" src={randomImage} />
        <p>Loading...</p>
    </div>
}