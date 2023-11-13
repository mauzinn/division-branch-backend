import { RequestHandler } from "express"
import * as yup from 'yup'
import { Account } from "../../services/interfaces"


//Middleware
    //Validation yup
        export const ValidationYUP = (Schema: yup.Schema<Account>): RequestHandler => async(req, res, next) => {
            
            try {

                await Schema.validate(req.body)
                return next()

            } catch(error: any) {

                return res.status(400).json({
                    result: false,
                    errors: error.message
                })
                
            }

        }