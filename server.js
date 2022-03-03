const express = require('express')
const app = express()
const port = process.env.port || 3000
// const connectDB = require('./config/db')
// connectDB();


app.listen(port, () => {
    console.log(`File Sharing app listening on port ${port}!`)
});