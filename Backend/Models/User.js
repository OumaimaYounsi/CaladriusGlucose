const mongoose= require("mongoose")

const UserSchema= new mongoose.Schema({
  id: Number,
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  phoneNumber: String,
  birthDate: Date,
  gender: String,
  adress: {
    langetude: String,
    latitude: String
  },
  bloodSugerLevel: String,
  role: String,
  state: String
});

const User = mongoose.model('user', UserSchema)
module.exports= User;

