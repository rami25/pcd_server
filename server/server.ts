import express from 'express'
import { config } from 'dotenv'
const cors = require('cors')
export async function createServer() {
    config()
    const app = express()
    app.use(cors())
    app.use(express.json())

    app.use('/api/attack',   require('./src/routes/serverRoute'))

    return app
}