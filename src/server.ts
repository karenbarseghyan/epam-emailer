require('dotenv').config();

const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'process.env.EMAIL',
        password: 'process.env.PASSWORD'
    }
});

let mailOptions = {
    from: 'karenbg90@gmail.com',
    to: 'karenbarseghyan90@gmail.com',
    subject: 'EPAM Emailer lesson',
    text: 'Email Received'
}

transporter.sendMail(mailOptions, function(err: any,data: any){
    if(err){
        console.log("error", err)
    }else{
        console.log("email sent")
    }
})