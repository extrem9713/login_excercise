const express = require('express')
const exphbs = require('express-handlebars')
const routes = require('./routes')
require('./config/mongoose')
const app = express()
const port = 3000


app.engine('hbs', exphbs({defaultlayout: 'main', extname: '.hbs'}))
app.set('view engine', 'hbs')

app.use(express.urlencoded({extended: true}))
app.use(routes)

app.listen(port, () =>{
  console.log(`sever is running on http://localhost:${port}`)
})