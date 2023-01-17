const express = require('express')
const { default: bilgiMail } = require('../../schemas/bilgilendirMail')
const { default: bilgiSms } = require('../../schemas/bilgilendirSms')
const { default: taniti } = require('../../schemas/kendinitanit')
const nodemailer = require('nodemailer')
const router = express.Router()

const dateA = new Date();
const dateD = dateA.toLocaleDateString()


router.get('/', (req, res)=>{
    res.render('site/index.handlebars')
})
router.get('/about', (req, res)=>{
    res.render('site/about.handlebars')
})
router.get('/portfolio', (req, res)=>{
    res.render('site/portfolio.handlebars')
})
router.get('/contact', (req, res)=>{
    res.render('site/contact.handlebars')
})
router.get('/services', (req, res)=>{
    res.render('site/services.handlebars')
})
router.get('/telephone', (req, res)=>{
    res.render('site/telephone.handlebars')
})
router.get('/mail', (req, res)=>{
    res.render('site/mail.handlebars')
})

router.post('/post/test1',(req,res) => {


    //schedule paketi kullanarak tarih seçimi ve seçilen tarihte uygulamanın aktif şekilde mesajının atılması sağlandı
    bilgiMail.create(req.body)
    const job = schedule.scheduleJob(2023, 01, 17, 15, 30, 0, function(){
        
     
/*
    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'alihandelen2358@gmail.com',
            pass:'AlihanDelen2358/*-'
        }
        })
        
        const mailOptions = {
            from:'alihandelen2358@gmail.com',
            to: 'nimino4296@tohup.com',
            subject:'deneme',
            text:'deneme mail 001'
        }
        
        transporter.sendMail(mailOptions,(err,data) =>{
        if(err){console.log(err)}
        else{console.log('mail gönderildi')}
        })
        
        */

    if(dateD=="14.01.2023"){

    const outputHTML = `
                <h2> Mail Details </h2>
                <ul> 
                <li>Name ${req.body.name} </li>
                <li>email ${req.body.email} </li>
                </ul> `

        async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.outlook.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'alihan_delen2358@hotmail.com' , // generated ethereal user
      pass: 'AlihanDelen2358/*-', // generated ethereal password
    },
    tls: { rejectUnauthorized: true }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Zeydor" <alihan_delen2358@hotmaill.com>', // sender address
    to: req.body.email, // list of receivers
    subject: "YTM DENEME", // Subject line
    text: "Başvuru Yaptığınız etkinlik yarın başlıyor..", // plain text body
    html: outputHTML, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

}

main().catch(console.error);

res.redirect('/')
}else{
    console.log(dateD)
    console.log("talebiniz kaydedilmiştir...")
    console.log("etkinliklten önce bilgilendirileceksiniz")
}
 });   
 });
router.post('/post/test2',(req,res) => {
        bilgiSms.create(req.body)

   

        res.redirect('/') 
          
     });

router.get('/iletilerMail',(req,res) => {
    bilgiMail.find()
    .then((result) => {
        res.send(result)
    })
    .catch((err) =>{
        console.log(err);
    })
    });
router.get('/iletilerSms',(req,res) => {
        bilgiSms.find()
        .then((result) => {
            res.send(result)
        })
        .catch((err) =>{
            console.log(err);
        })
        });

        router.post('/post/test3',(req,res) => {
            taniti.create(req.body)
    
            res.redirect('/') 
              
         });
         router.get('/taniti',(req,res) => {
            taniti.find()
            .then((result) => {
                res.send(result)
            })
            .catch((err) =>{
                console.log(err);
            })
            });

       

         

  

module.exports = router