import mongoose from 'mongoose';
const { Schema } = mongoose;

const User= new Schema({
  id: Number,
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  phoneNumber: String,
  birthDate: Date,
  adress: {
    langetude: String,
    latitude: String
  },
  bloodSugerLevel: String

});