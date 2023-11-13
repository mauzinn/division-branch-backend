import { RequestHandler } from "express"
import jwt from 'jsonwebtoken'
import { User } from "../../database"
const SECRET: any = process.env.SECRET


//Middleware
    //jwt validation
        export const ValidationJWT: RequestHandler = async(req, res, next) => {
            const token = req.body.token

            if (token) {
                try {
                    const tokenVerified: any = jwt.verify(token, SECRET)

                    if (tokenVerified) {
                        const AccountExists = await User.findOne({_id: tokenVerified.id})

                        if (AccountExists) {
                            return next()
                        }
                    }
                } catch {
                    return res.status(400).json({
                        result: false,
                        errors: 'Erro no token!'
                    })
                }
            } else {
                return res.status(400).json({
                    result: false,
                    errors: 'Token não existe.'
                })
            }
        }