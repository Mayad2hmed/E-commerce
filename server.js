import express from 'express'
import db_connection from './database/dbConnection.js'
import { bootstrap } from './src/modules/index.router.js'
const app = express()
const port = 3000
bootstrap()
db_connection()

app.listen(port, () => console.log(`Example app listening on port ${port}!`))