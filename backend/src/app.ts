import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
const app: express.Express = express()
import { server } from './server/server'


//Configuration server
    app.use(server)











//Server
    app.listen(process.env.PORT || 3000, () => {
        console.log('Server as listen in port: ' + process.env.PORT)
    })