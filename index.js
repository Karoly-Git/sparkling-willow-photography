require('dotenv').config();

const express = require('express');
const handlebars = require('express-handlebars');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 8005;

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));

// middlewares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// view-engine setup 
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// routing
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/maternity-photos', (req, res) => {
    res.render('gallery-maternity');
});

app.get('/newborn-photos', (req, res) => {
    res.render('gallery-newborn');
});

app.get('/sitter-session-photos', (req, res) => {
    res.render('gallery-sitter-session');
});

app.get('/family-photos', (req, res) => {
    res.render('gallery-family');
});

app.get('/cake-smash-photos', (req, res) => {
    res.render('gallery-cake-smash');
});

app.get('/engagement-photos', (req, res) => {
    res.render('gallery-engagement');
});

app.get('/milestone-photos', (req, res) => {
    res.render('gallery-milestone');
});

app.get('/award-winning-photos', (req, res) => {
    res.render('gallery-award-winning');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/reviews', (req, res) => {
    res.render('reviews');
});

app.get('/faq', (req, res) => {
    res.render('faq');
});

app.get('/privacy-policy', (req, res) => {
    res.render('privacy-policy');
});

app.get('/success', (req, res) => {
    res.render('success');
});

app.get('/error', (req, res) => {
    res.render('error');
});
app.get('/human-check-failed', (req, res) => {
    res.render('human-check-failed');
});

// nodemailer
let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAILUSER,
        pass: process.env.EMAILPASS
    },
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false
    },
});

app.post('/sendmail', (req, res) => {
    const name = req.body.sender_name;
    const email = req.body.sender_email;
    const phone = req.body.sender_phone;
    const message = req.body.message;

    const word = req.body.word;
    const index = req.body.id;

    //spam filter
    let isSpam = message.toLowerCase().includes('http') ||
        message.toLowerCase().includes('Прывітанне') ||
        message.toLowerCase().includes('я') ||
        message.toLowerCase().includes('хацеў') ||
        message.toLowerCase().includes('даведацца') ||
        message.toLowerCase().includes('Ваш') ||
        message.toLowerCase().includes('прайс') ||
        name.toLowerCase().includes('crytoawave');

    const dataBackEnd = [
        { options: ['white'] },
        { options: ['4', 'four'] },
        { options: ['4', 'four'] },
        { options: ['2', 'two'] },
        { options: ['blue'] }
    ];

    // bot filter
    let isBot = !dataBackEnd[index].options.includes(word.toLocaleLowerCase());

    // is test mode?
    let isTestMode = false;
    let mailOption = {};

    if (isTestMode) {
        mailOption = {
            from: 'emailservicelife@gmail.com',
            to: 'karoly.webdev@gmail.com',
            cc: '',
            subject: `New message from Website`,
            text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nDate: ${new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', weekday: 'long' })}\nTime: ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}\n---------------\n\n${message}`,
        }
    } else {
        mailOption = {
            from: 'emailservicelife@gmail.com',
            to: 'nicky@sparklingwillowphotography.co.uk',
            cc: '',
            bcc: 'karoly.webdev@gmail.com',
            subject: `New message from Website`,
            text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nDate: ${new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', weekday: 'long' })}\nTime: ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}\n---------------\n\n${message}`,
        }
    }

    if (isSpam) {
        res.redirect('/error');
    }
    if (isBot) {
        res.redirect('/human-check-failed');
    }
    else {
        transporter.sendMail(mailOption, (err) => {
            if (err) {
                res.redirect('/error');
                //console.log('!!! Error occured !!!');
                console.log(err);
            } else {
                res.redirect('/success');
                //console.log('Message successfully sent.');
            }
        });
    }
});



