const express = require('express')
const Account = require('../../models/account')
const router = express.Router()

router.get('/', (req,res) => {
  return res.redirect('login')
})

router.get('/login', (req,res) => {
  return res.render('login')
})

router.post('/login', (req,res) => {
  return Account.findOne({email: req.body.email})
  .lean()
  .then(user =>{
    if(!user) {
      const alert = '該 E-mail尚未註冊'
      return res.render('login', {alert})
    }
    if (user.password !== req.body.password) {
      const alert ='您輸入的密碼有誤'
      return res.render('login', {alert})
    }
    return res.redirect(`/show/${user._id}`)
  })
})

router.get('/show/:id', (req, res) => {
  const id = req.params.id
  return Account.findById(id)
  .lean()
  .then(user => {
    res.render('show', {user})
  })
})


module.exports = router