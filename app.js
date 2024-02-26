const express = require ('express')
const dotenv = require ('dotenv')
const cookieParser = require('cookie-parser')

const app = express()

app.set('view engine','ejs')

app.use(express.static('public'))

app.use(express.urlencoded({extended:true}))
app.use(express.json())

dotenv.config({path: './env/.env'})

app.use(cookieParser())

app.use('/', require('./routes/router'))

app.use(function(req, res, next) {
    if (!req.user)
        res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    next();
});


app.listen(process.env.port, () => {
    console.log(" http://localhost:" + process.env.port );
  });