const express = require("express")
const {getAllEmergency, getEmergencyById, addEmergency, updateEmergency, deleteEmergncy}= require("../Controller/EmergencyController")
// use the function Router(HTTP) of express
const route = new express.Router()
const {midelware}= require('../Middlewares/middelware')


// post: to update 
// put: to post

route.get('/', midelware,getAllEmergency )
route.get('/:id', midelware,getEmergencyById)
//route.get('/:userId' , getEmergenciesByUserId)

route.put('/', midelware,addEmergency)

route.post('/:id', midelware,updateEmergency)

route.delete('/:id', midelware,deleteEmergncy)


module.exports= route