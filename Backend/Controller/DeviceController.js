const device= require('../Models/Device')

const e = require('express');


//  exports.addDevice= async(req, res)=>{
//     try {
//         const Device = await device.create(req.body)
//         res.status(200).json(Device);
        
//     } catch (error) {
//         res.status(400).json({error: error.toString()})
//     }
//  }

 exports.getAllDevices = async(req,res)=>{
    try {
        const allDevices = await device.find()
        es.status(200).json(allDevices);
    } catch (error) {
        res.status(400).json({error: error.toString()})
    }
 }

 exports.getDevices = async (req, res) => {
    try {
        const limit = req.query.limit ? +req.query.limit : undefined;
        const devices = await device.find().limit(limit).sort({createdAt: 'desc'});
        res.status(200).json(devices);
    } catch (error) {
        res.status(400).json({ error: error.toString() });
    }
}


//const User = require('./path/to/user/model'); // Update the path to your user model

exports.addDevice = async (req, res) => {
  try {
    const {id, name ,DateOfCreation} = req.body; // Assuming you're sending name and age in the request body

    const newDevce = new device({
        id,
        name,
        DateOfCreation
    });

    const saveDevice = await newDevce.save();
    res.status(201).json(saveDevice);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
};


exports.deleteDevice= async (req, res)=>{
    try {
        const deletedevice  = await device.findByIdAndDelete(req.params.id);
        if(!deletedevice) return res.status(400).json({error:"There is no device with this id"})
        res.status(200).json(deletedevice+"deleated")
    } catch (error) {
        res.status(400).json({ error: error.toString() });
    }
}


exports.getDeviceById= async(req, res)=>{
    try {
        const getdevice= await device.findById(req.params.id)
        if(!getdevice) return res.status(400).json ({error: "device not existe"})
        res.status(200).json(getdevice)
    } catch (error) {
        res.status(400).json ({error: error.toString()})
    }
}


exports.updateDevice = async(req, res)=>{
    try {
        const Newdevice = await device.findByIdAndUpdate(req.params.id, req.body,{new:true});
        if (!Newdevice) {
            return res.status(404).send({ message: 'Device not found' });
        }


        return res.status(200).json(Newdevice);
    } catch (error) {
        return res.status(500).json({error: error.toString()});
    }
};
