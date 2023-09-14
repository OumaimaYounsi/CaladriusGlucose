const express = require("express")
const {getAllUsers, signeUp, login, deleteOneUser, updateUser, logout, resetPasssword, getOneUser, signeUpAdmin} = require('../Controller/UserController')

const {midelware}= require('../Middlewares/middelware')


// use the function Routes(HTTP) of express
const route = new express.Router()


// post: to update 
// put: to post


route.put('/signeup', signeUp)
route.put('/login', login)
route.post('/resetpassword', resetPasssword)
route.get('/logout', logout)
route.put('/addAdmin', signeUpAdmin)
//
//
route.get('/user/users',midelware, getAllUsers)
route.get('/user/:id', midelware,getOneUser)
route.delete('/user/delete/:id',midelware, deleteOneUser)
route.post('/user/:id',midelware, updateUser)




module.exports= route