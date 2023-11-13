import { RequestHandler } from "express"
import { User } from "../../database"
import bcrypt from 'bcrypt'


//Middleware
    //Update password account
        export const Update: RequestHandler = async(req, res) => {
            const { id, newPassword } = req.body

            User.updateOne({_id: id},{
                password: await bcrypt.hash(newPassword, 10)
            }).then(() => {
                return res.status(201).json({
                    result: true
                })
            }).catch(() => {
                return res.status(500).json({
                    result: false,
                    errors: 'Erro interno do servidor!'
                })
            })
        }