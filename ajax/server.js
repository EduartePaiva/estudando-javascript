const bodyParsser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.'))
app.use(bodyParsser.urlencoded({extended:true}))
app.use(bodyParsser.json())

app.get('/teste', (req,res) => res.send(new Date))
app.listen(8080, () => console.log('Executando...'))