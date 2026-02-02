const express = require('express')

const { logic } = require('./logic')

const api = express()

const jsonBodyParser = express.json()

const people = (
    { id: 'person-0', name: 'Bob', age: 33 },
    { id: 'person-1', name: 'Peter', age: 40 },
    { id: 'person-2', name: 'Wendy', age: 28 }
)

api.get('/', (req, res) => res.json({ hello: "World!" })
)

api.get('/people', (req, res) => {
    const personId = req.query.id

    const person = people.find(person => person.id === personId)

    res.json(person)
})

api.post('/users', jsonBodyParser, (req, res) => {
    try {
        const { name, email, username, password, passwordRepeat } = req.body

        logic.registerUser(name, email, username, password, passwordRepeat)

        res.send()
    } catch (error) {
        res.status(400).json({ error: error.constructor.name, message: error.message })
    }

})

api.post('/users/auth', jsonBodyParser, (req, res) => {
    try {
        const { username, password } = req.body

        const userId = logic.authenticateUser(username, password)

        res.send(userId)
    } catch (error) {
        res.status(400).json({ error: error.constructor.name, message: error.message })
    }

})


api.post('/pets', jsonBodyParser, (req, res) => {
    try {
        const userId = req.headers.authorization.slice(6)

        const { name, birthdate, weight, image } = req.body

        logic.addPet(userId, name, birthdate, weight, image)

        res.send()
    } catch (error) {
        res.status(400).json({ error: error.constructor.name, message: error.message })
    }

})
api.listen(8080, () => console.log('API listening on port 8080'))