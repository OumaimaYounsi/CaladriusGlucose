import mongoose from 'mongoose';
const { Schema } = mongoose;

const Emergency= new Schema({
  id: Number,
  typeOfEmergency: String,
  DateOfSent: Date,
  location: {
    langetude: String,
    latitude: String
  },
  userId: {type:mongoose.Types.ObjectId,ref:"user"}
});