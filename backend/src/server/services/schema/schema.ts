import * as yup from 'yup'
import { Account, Login, Update } from '../interfaces'


//Schemas
    export const AccountRegisterSchema: yup.Schema<Account> = yup.object().shape({
        email: yup.string().email().min(5).max(240).required(),
        name: yup.string().min(3).max(140).required(),
        password: yup.string().min(8).max(20).required()
    })

    export const AccountLoginSchema: yup.Schema<any> = yup.object().shape({
        name: yup.string().min(3).max(140).required(),
        password: yup.string().min(8).max(20).required()
    })

    export const AccountUpdateSchema: yup.Schema<any> = yup.object().shape({
        id: yup.string().min(3).max(80).required(),
        token: yup.string().min(3).max(440).required(),
        newPassword: yup.string().min(8).max(20).required()
    })

