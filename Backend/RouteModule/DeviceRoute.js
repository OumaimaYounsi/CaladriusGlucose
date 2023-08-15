const express = require("express")

// use the function Router(HTTP) of express
const route = new express.Router()
const {addDevice, getDevices, deleteDevice, getDeviceById, updateDevice}= require ("../Controller/DeviceController")

// post: to update 
// put: to post

//route.get('/get', getAllDevices )
route.get('/', getDevices)
route.get('/:id', getDeviceById)
// route.get('/:userId' ,authMiddelware, getDevicesByUserId)

route.put('/add', addDevice)

route.post('/:id', updateDevice)

route.delete('/:id', deleteDevice)


module.exports= route