import { MongoClient, ObjectId } from 'mongodb'

const client = new MongoClient('mongodb://localhost:27017')

client.connect()
    .then(() => {
        const db = client.db('product')

        const users = db.collection('users')

        // users.find({}).toArray()
        //     .then(users => console.table(users))
        //     .catch(error => console.error(error))

        // users.insertOne({name: 'le Chuga', email: 'le@chuga.com', username:'lechuga', password:'123123123' })
        //     .then(result => console.log(result))
        //     .catch(error => console.error(error))

        // users.updateOne({ _id: new ObjectId('69af2431eb5f77938c7c290c')}, {$set: {password: '345345345'}})
        //     .then(result => console.log(result))
        //     .catch(error => console.error(error))

        //  users.deleteOne({ _id: new ObjectId('69af2431eb5f77938c7c290c')})
        //     .then(result => console.log(result))
        //     .catch(error => console.error(error))

        // users.findOne({ _id: new ObjectId('69af2431eb5f77938c7c290c') })
        //     .then(user => console.log(user))
        //     .catch(error => console.error(error))

        users.find({ name: /l/i }).toArray()
            .then(users => console.table(users))
            .catch(error => console.error(error))
    })
    .catch(error => console.error(error))