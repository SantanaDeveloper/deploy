var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');
const creds = require('./config');

var transport = {
    host: 'smtp.gmail.com', // Don’t forget to replace with the SMTP host of your provider
    port: 587,
    auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Servidor pronto para enviar mensagens');
  }
});

router.post('/send', (req, res, next) => {
  var nome = req.body.nome
  var assunto = req.body.assunto
  var email = req.body.email
  var mensagem = req.body.mensagem
  var conteudo = `Nome: ${nome} \n Assunto: ${assunto} \n Email: ${email} \n Mensagem: ${mensagem} `

  var mail = {
    from: nome,
    to: 'contato@agenciasantana.com.br',  // Change to email address that you want to receive messages on
    subject: assunto,
    text: conteudo
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
       status: 'success'
      })
    }
  })
})

const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)
app.listen(3002)