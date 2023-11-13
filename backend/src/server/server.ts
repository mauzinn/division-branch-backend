import express from 'express'
const server: express.Express = express()
import { Router } from './routes/router'


//Configuration
    //Express parser
        server.use(express.json())


//Routes
    server.use(Router)










//Export
    export { server }