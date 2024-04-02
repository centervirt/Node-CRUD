const express = require('express')
const  mongoose = require('mongoose')
const bodyParser = require('body-parser')
const { config } = require('dotenv')

config()

const bookRouters = require ('./routes/book.routes')

/// Usamos express para los middlewares
const app = express();
app.use(bodyParser.json()) //parseador de bodies

/// Aca conectaremos la base datos

mongoose.connect(process.env.MONGO_URL, { dbName: process.env.MONGO_DB_NAME })
const db = mongoose.connection;

app.use('/books', bookRouters)

const port = process.env.PORT || 3000

 app.listen(port, () => {
    console.log(`Servidor Iniciando como loco! Por el puerto: ${port}`)
 })