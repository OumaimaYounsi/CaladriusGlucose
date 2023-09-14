const e = require('express');
const user = require('../Models/User')
const jwt = require("jsonwebtoken")



const maxAge = 24 * 60 * 60 // one day


const creatToken =(id)=>{
    return jwt.sign({id}, 'net secret', {
        expiresIn: maxAge, 
    });
}

exports.getAllUsers= async(req, res)=>{
    try {
        const userListe= await user.find();
        res.status(200).json(userListe)
        
    } catch (error) {
        res.status(400).json({error: error.toString()});
    }
    
}

exports.resetPasssword= async(req, res)=>{

}
exports.updateUser= async(req, res)=>{

}

exports.deleteOneUser= async(req, res)=>{

}

exports.getOneUser= async(req, res)=>{

}


exports.login= async(req,res)=>{
    console.log("loginpage")
    const {email , password}= req.body
  
    try {
        const userlog = await user.loginUser(email , password)
        const token = creatToken(userlog._id)
        res.cookie('jwt', token, {httpOnly: true}, {maxAge: maxAge * 1000}) // one day
        res.status(200).json({userlog: userlog._id})
    } catch (error) {
        res.status(500).json({error: error.toString()})
        console.log(error)
    }

}


exports.signeUp= async(req, res)=>{
    
    try {
        const {id, firstName, lastName, email,  password,  phoneNumber, birthDate,  gender, longitude, latitude, bloodSugarLevel, role, status} = req.body;
    const newuser = new user({
        id, 
        firstName,
        lastName,
        email,
        password,
        phoneNumber,
        birthDate, 
        gender,
        longitude,
        latitude,
        bloodSugarLevel, 
        role,
        status
    });
    newuser.role = "user";
    const register = await newuser.save();
    const token = creatToken(register._id)
    res.cookie('jwt', token, {httpOnly: true}, {maxAge: maxAge * 1000}) // one day 
    res.status(201).json({register: register._id, token});
     
    } catch (error) {
        res.status(500).json({error: error.toString()})
        console.log(error)
    }

}

exports.signeUpAdmin= async(req, res)=>{
    
    try {
        const {id, firstName, lastName, email,  password,  phoneNumber, birthDate,  gender, longitude, latitude, bloodSugarLevel, role, status} = req.body;
    const newuser = new user({
        id, 
        firstName,
        lastName,
        email,
        password,
        phoneNumber,
        birthDate, 
        gender,
        longitude,
        latitude,
        bloodSugarLevel, 
        role,
        status
    });
    newuser.role = "admin";
    const register = await newuser.save();
    const token = creatToken(register._id)
    res.cookie('jwt', token, {httpOnly: true}, {maxAge: maxAge * 1000}) // one day 
    res.status(201).json({register: register._id, token});
     
    } catch (error) {
        res.status(500).json({error: error.toString()})
        console.log(error)
    }

}

exports.logout= async(req, res)=>{
    res.cookie('jwt', "", {maxAge: 1})
    res.redirect('/')
}

