import { UserModel, PetModel, database } from './models.js'

database.connect('mongodb://localhost:27017/product')

const wendy = new User({ name: 'Wendy Darling', email: 'wendy@darling.com', username: 'wendydarling', password: '123123123' })
const pepitogrillo = new User({ name: 'Pepito Grillo ', email: 'pepito@grillo.com', username: 'pepitogrillo', password: '123123123' })

Promise.all([wendy.save(), pepitogrillo.save()])
    .then(([wendy, pepitogrillo]) => {
        console.log(wendy, pepitogrillo)

        const tor = new PetModel({ owner: wendy.id, name: 'Tor', birthdate: new Date('2018-02-05'), weight: 7, image: 'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3eWYyeWx6cTlsbzB5eDdoZ2QzNTE1d2EzMnd1NG96Y25rZWwydnoxdyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/c5J5viTR15V7rpcKoM/giphy.gif' })

        const rocky = new PetModel({ owner: wendy.id, name: 'Rocky', birthdate: new Date('2021-11-05'), weight: 5, image: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXZnbnJ4ZTY0Mm1oa2Nqb2Uzcnh4cjN3ZW85bmZ4ajFhN3U1Mjh3NCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/j0QzDgFZRX2njRxxtP/giphy.gif' })

        const tommy = new PetModel({ owner: pepitogrillo.id, name: 'Tommy', birthdate: new Date('2022-06-08'), weight: 6, image: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGU2dmlncDd4NmE1dXdodHN6czY2MDdtNXl2a2Q2a3hhdmEzNzJ4MCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/OHRF8LZis06OiPDJby/giphy.gif' })

        return Promise.all([tor.save(), rocky.save(), tommy.save()])
    })
    .then(([tor, rocky]) => console.log(tor, rocky))
    .catch(error => console.error(error))