const express = require("express")
const {getAllEmergency, getEmergencyById, addEmergency, updateEmergency, deleteEmergncy}= require("../Controller/EmergencyController")
// use the function Router(HTTP) of express
const route = new express.Router()

// post: to update 
// put: to post

route.get('/', getAllEmergency )
route.get('/:id', getEmergencyById)
//route.get('/:userId' , getEmergenciesByUserId)

route.put('/', addEmergency)

route.post('/:id', updateEmergency)

route.delete('/:id', deleteEmergncy)


module.exports= route