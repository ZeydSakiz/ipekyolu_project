const nodemailer = require('nodemailer')


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

