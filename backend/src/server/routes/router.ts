import express from 'express'
const Router: express.Router = express.Router()
import { Account, Validation } from '../controllers'
import { Schema } from '../services'


//Routes
    //Create account
        Router.post('/account/create', Validation.ValidationYUP(Schema.AccountRegisterSchema), Account.Create)

    //Login account
        Router.post('/account/login', Validation.ValidationYUP(Schema.AccountLoginSchema), Account.Login)

    //Change password
        Router.post('/account/update', Validation.ValidationYUP(Schema.AccountUpdateSchema), Account.Update)













//Export
    export { Router }