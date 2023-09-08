const express= require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require("dotenv").config()
const cookieParser = require("cookie-parser")
const {checkUser}= require('./Middlewares/middelware')



const PORT = process.env.Port
const URL= process.env.CONNECTIONSTRING

//modules
const user= require('./RouteModule/AuthRoute')
const device= require('./RouteModule/DeviceRoute')
const emergency = require('./RouteModule/EmergencyRoute')

app.use(express.json());
app.use(cookieParser());
//routes
// app.get('*', checkUser) // veryfy user every rout
app.use('/',user)
app.use('/device', device)
app.use('/emergency', emergency)

// follow the shcema 
mongoose.set('strictQuery', true);


//server + connection to data base
mongoose.connect(URL).then(()=>{
    console.log("Connected to database")
    app.listen(PORT,()=>{
        console.log(`server started on port ${PORT}`)
    })    
}).catch((err)=>{
    console.error("Error while connecting", err)
})