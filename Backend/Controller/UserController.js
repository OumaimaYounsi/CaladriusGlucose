const e = require('express');
const user = require('../Models/User')

exports.getAllUsers= async(req, res)=>{
    try {
        const userListe= await user.find();
        res.status(200).json(userListe)
        
    } catch (error) {
        res.status(400).json({error: error.toString()});
    }
    
}

