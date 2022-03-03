const express = require('express');
const app = express()
const path = require('path')
const port = process.env.port || 3000
const connectDB = require('./config/db')
connectDB();
app.use(express.static('public'))
app.use(express.json());
//Template Engine 

app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')

//Routes
app.use('/api/files', require('./routes/file'));
app.use('/files', require('./routes/show'));
app.use('/files/download', require('./routes/donwload'))

app.listen(port, () => {
    console.log(`File Sharing app listening on port ${port}!`)
});