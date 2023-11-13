import { RequestHandler } from "express"
import { User } from "../../database"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const SECRET: any = process.env.SECRET


//Middleware
    //Login account
        export const Login: RequestHandler = async(req, res) => {
            const { name, password } = req.body
            const AccountExists = await User.findOne({name: name})

            if (!AccountExists) {
                return res.status(400).json({
                    result: false,
                    errors: 'Conta não encontrada!'
                })
            }

            if (await bcrypt.compare(password, AccountExists.password)) {
                const token = jwt.sign({
                    id: AccountExists._id
                }, SECRET, { expiresIn: 86400 })

                return res.status(201).json({
                    result: true,
                    token
                })
            } else {
                return res.status(400).json({
                    result: false,
                    errors: 'Senha incorreta!'
                })
            }
        }