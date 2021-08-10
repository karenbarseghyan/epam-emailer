require('dotenv').config();

const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '',
        password: ''
    }
});

let mailOptions = {
    from: 'karenbg90@gmail.com',
    to: 'karenbarseghyan90@gmail.com',
    subject: 'EPAM Emailer lesson',
    text: 'Email Received'
}

transporter.sendMail(mailOptions, (err,data)=>{
    if(err){
        console.log("error")
    }else{
        console.log("email sent")
    }
})