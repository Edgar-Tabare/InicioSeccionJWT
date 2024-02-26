const express = require ('express')

const router = express.Router()

const controllers =require('../controllers/controllers')

router.get('/', controllers.isAuthenticated, (req,res)=>{
  
    res.render('index',{user:req.user})
})

router.get('/login', (req,res)=>{
    res.render('login',{alert:false} )
})

router.get('/register', (req,res)=>{
    res.render('register')
})




router.post('/register',controllers.register)
router.post('/login', controllers.login)
router.get('/logout',controllers.logout)

module.exports = router