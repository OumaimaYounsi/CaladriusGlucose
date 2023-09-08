const express = require("express")
const {midelware}= require('../Middlewares/middelware')


// use the function Router(HTTP) of express
const route = new express.Router()
const {addDevice, getDevices, deleteDevice, getDeviceById, updateDevice}= require ("../Controller/DeviceController")

// post: to update 
// put: to post

//route.get('/get', getAllDevices )
route.get('/', getDevices)
route.get('/:id',midelware, getDeviceById)
// route.get('/:userId' ,authMiddelware, getDevicesByUserId)

route.put('/add', midelware,addDevice)

route.post('/:id', midelware,updateDevice)

route.delete('/:id', midelware,deleteDevice)


module.exports= route