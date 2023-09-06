import dotenv from "dotenv";
import express from "express";

dotenv.config()


const app = express()
const port = process.env.SERVER_PORT || 3000

app.get('/', (req, res) => res.send('Hello, Express !'))

app.listen(port, () => console.log(`Notre application Node est démarée sur ${process.env.SERVER_PROTOCOL}://${process.env.SERVER_HOST}:${port}`))