const emergency= require('../Models/Emergency')

const e = require('express');


 exports.getAllEmergency = async (req, res) => {
    try {
        const limit = req.query.limit ? +req.query.limit : undefined;
        const emergencies = await emergency.find().limit(limit).sort({createdAt: 'desc'});
        res.status(200).json(emergencies);
    } catch (error) {
        res.status(400).json({ error: error.toString() });
    }
}


exports.addEmergency = async (req, res) => {
  try {
    const {id, typeOfEmergency ,DateOfSent, location, state} = req.body;

    const newEmergency = new emergency({
        id,
        typeOfEmergency,
        DateOfSent,
        location,
        state
    });

    const saveEmergency = await newEmergency.save();
    res.status(201).json(saveEmergency);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
};


exports.deleteEmergncy= async (req, res)=>{
    try {
        const deleteemergncy  = await emergency.findByIdAndDelete(req.params.id);
        if(!deleteemergncy) return res.status(400).json({error:"There is no emergency with this id"})
        res.status(200).json(deleteemergncy+"deleated")
    } catch (error) {
        res.status(400).json({ error: error.toString() });
    }
}


exports.getEmergencyById= async(req, res)=>{
    try {
        const getEmergency= await emergency.findById(req.params.id)
        if(!getEmergency) return res.status(400).json ({error: "emergency not existe"})
        res.status(200).json(getEmergency)
    } catch (error) {
        res.status(400).json ({error: error.toString()})
    }
}


exports.updateEmergency = async(req, res)=>{
    try {
        const newEmergency = await emergency.findByIdAndUpdate(req.params.id, req.body,{new:true});
        if (!newEmergency) {
            return res.status(404).send({ message: 'Device not found' });
        }


        return res.status(200).json(newEmergency);
    } catch (error) {
        return res.status(500).json({error: error.toString()});
    }
};
