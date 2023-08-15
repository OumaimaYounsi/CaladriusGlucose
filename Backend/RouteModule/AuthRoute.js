const express = require("express")
const {getAllUsers} = require('../Controller/UserController')
// use the function Routes(HTTP) of express
const route = new express.Router()


// post: to update 
// put: to post


//route.put('/signeup', signUp)
// route.put('/login', login)
// route.post('/resetpassword', resetPasssword)
//
//
route.get('/', getAllUsers)
// route.get('/:id', getOneUser)
// route.delete('/delete/:id', deleteOneUser)
// route.post('/:id', updateUser)



module.exports= route