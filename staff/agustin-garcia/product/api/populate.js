import mongoose from 'mongoose'

const { Schema, ObjectId, model } = mongoose

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const URL_REGEX = /(www|http:|https:)+[^\s]+[\w]/

const userSchema = new Schema({
    name: {
        type: String,
        minLength: 1,
        required: true
    },
    email: {
        type: String,
        minLength: 6,
        match: EMAIL_REGEX,
        required: true,
        unique: true
    },

    username: {
        type: String,
        minLength: 3,
        required: true,
        unique: true
    },

    password: {
        type: String,
        minLength: 8,
        required: true
    },

    image: {
        type: String,
        match: URL_REGEX
    },

    role: {
        type: String,
        enum: ['regular', 'administrator'],
        default: 'regular',
        required: true
    }
})

const petSchema = new Schema({
    owner: {
        type: ObjectId
    },

    name: {
        type: String,
        minLength: 1,
        required: true
    },
    birthdate: {
        type: Date,
        required: true
    },

    weight: {
        type: Number,
        required: true
    },

    image: {
        type: String,
        match: URL_REGEX,
        required: true
    }
})

const User = model('User', userSchema)
const Pet = model('Pet', petSchema)

mongoose.connect('mongodb://localhost:27017/product')

const wendy = new User({ name: 'Wendy Darling', email: 'wendy@darling.com', username: 'wendydarling', password: '123123123' })
const pepitogrillo = new User({ name: 'Pepito Grillo ', email: 'pepito@grillo.com', username: 'pepitogrillo', password: '123123123' })

Promise.all([wendy.save(), pepitogrillo.save()])
    .then(([wendy, pepitogrillo]) => {
        console.log(wendy, pepitogrillo)

        const tor = new Pet({ owner: wendy.id, name: 'Tor', birthdate: new Date('2018-02-05'), weight: 7, image: 'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3eWYyeWx6cTlsbzB5eDdoZ2QzNTE1d2EzMnd1NG96Y25rZWwydnoxdyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/c5J5viTR15V7rpcKoM/giphy.gif' })

        const rocky = new Pet({ owner: wendy.id, name: 'Rocky', birthdate: new Date('2021-11-05'), weight: 5, image: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXZnbnJ4ZTY0Mm1oa2Nqb2Uzcnh4cjN3ZW85bmZ4ajFhN3U1Mjh3NCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/j0QzDgFZRX2njRxxtP/giphy.gif' })

        const tommy = new Pet({ owner: pepitogrillo.id, name: 'Tommy', birthdate: new Date('2022-06-08'), weight: 6, image: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGU2dmlncDd4NmE1dXdodHN6czY2MDdtNXl2a2Q2a3hhdmEzNzJ4MCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/OHRF8LZis06OiPDJby/giphy.gif' })

        return Promise.all([tor.save(), rocky.save(), tommy.save()])
    })
    .then(([tor, rocky]) => console.log(tor, rocky))
    .catch(error => console.error(error))