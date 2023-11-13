const Url: string = `${process.env.DATABASE_URL1}${process.env.DATABASE_PASSWORD}${process.env.DATABASE_URL2}`
import mongoose from 'mongoose'
import { Account } from '../services/interfaces'

mongoose.connect(Url)

const db = mongoose.connection

db.on('error', (err) => {
    console.error(err)
})

const UserSchema: mongoose.Schema<Account> = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const User = mongoose.model('user', UserSchema)

export { User }