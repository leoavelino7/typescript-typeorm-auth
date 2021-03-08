import 'reflect-metadata'
import express from 'express'

import dotenv from 'dotenv'

import './database/connect'

import routes from './routes'

dotenv.config()

const app = express()

app.use(express.json())
app.use(routes)

app.set('PORT', process.env.PORT || 8080)

app.listen(app.get('PORT'), () => console.log(`🔥 Server started at http://localhost:${app.get('PORT')}`))