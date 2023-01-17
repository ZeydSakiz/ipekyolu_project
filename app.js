const express= require('express')
const {engine}=require('express-handlebars')
const nodemailer = require('nodemailer')
const dotenv = require('dotenv')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const schedule = require('node-schedule');

//import conn from './DB/db.js';
//conn = require('./DB/db.js')


const app = express()
const port =5000
const router = express.Router()


mongoose.set('strictQuery', true);





app.use(express.static('public')) //static dosyayı okumak için gerekli olan middleware
dotenv.config();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

/*
//iletişim mesajı ve bilgilerini kaydeden istek satırı. bunu daha sonra dene çalışıp çalışmayacağını görmek için en son kaldığın nokta burası..
app.post('/post/content',(req,res) => {
   ileti.create(req.body)
   res.redirect('/')   
});

*/







const main = require('./views/routes/main')
const { default: conn } = require('./DB/db')
app.use('/' , main)
conn();


//templete-engine ile aynı kodu defalarca yazmaktan kurtulduk

app.listen(port,()=>{
    console.log('Server Çalışıyor,portta', port)
});

module.exports = router