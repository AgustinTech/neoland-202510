import { MongoClient, ObjectId } from 'mongodb'

const client = new MongoClient('mongodb://localhost:27017')

client.connect()
    .then(() => {
        const db = client.db('product')

        const users = db.collection('users')
        const pets = db.collection('pets')

        // users.find({}).toArray()
        //     .then(users => console.table(users))
        //     .catch(error => console.error(error))

        // users.insertOne({name: 'le Chuga', email: 'le@chuga.com', username:'lechuga', password:'123123123' })
        //     .then(result => console.log(result))
        //     .catch(error => console.error(error))

        // users.updateOne({ _id: new ObjectId('69af2431eb5f77938c7c290c')}, {$set: {password: '345345345'}})
        //     .then(result => console.log(result))
        //     .catch(error => console.error(error))

        // users.findOne({ _id: new ObjectId('69af2431eb5f77938c7c290c') })
        //     .then(user => console.log(user))
        //     .catch(error => console.error(error))

        // users.find({ name: /l/i }).toArray()
        //     .then(users => console.table(users))
        //     .catch(error => console.error(error))

        // users.deleteOne({ _id: new ObjectId('69af238eeb5f77938c7c290a') })
        //     .then(result => console.log(result))
        //     .catch(error => console.error(error))

        // pets.insertOne({ userId: new Object('69af21aaeb5f77938c7c2907'), name: 'rocky', birthdate: new Date('2016-03-22'), weight: 3, image: 'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3bTYzMzVreTRwaHVpM3BzMWx6NTFyYW53NXlpcmg5c2R3YXU1MHhxNCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/MjOSt1BtJVvM4oDKvI/giphy.gif' })
        //     .then(result => console.log(result))
        //     .catch(error => console.error(error))

        // pets.deleteMany({ userId: new ObjectId('69af2430eb5f77938c7c290b') })
        //     .then(result => console.log(result))
        //     .catch(error => console.log(error))
    })
    .catch(error => console.error(error))