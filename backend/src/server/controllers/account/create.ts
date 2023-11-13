import { RequestHandler } from "express"
import { User } from "../../database"
import bcrypt from 'bcrypt'


//Middleware
    //Create account
        export const Create: RequestHandler = async(req, res) => {
            const { email, name, password } = req.body
            const NameExists = await User.findOne({
                name: name
            })
            const EmailExists = await User.findOne({
                email: email
            })

            if (!NameExists && !EmailExists) {
                new User({
                    email,
                    name,
                    password: await bcrypt.hash(password, 10)
                }).save().then(() => {
                    return res.status(201).json({
                        result: true
                    })
                }).catch(() => {
                    return res.status(500).json({
                        result: false,
                        errors: 'Erro ao tentar criar conta!'
                    }) 
                })
            } else {
                return res.status(400).json({
                    result: false,
                    errors: 'Email ou nome já existe no banco de dados!'
                }) 
            }
        }